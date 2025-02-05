
class ExpanseStuntDice extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "s";
}

CONFIG.Dice.terms["s"] = ExpanseStuntDice;

ageRollChecker = function(ageRoll, generateSP, isStuntAttack, extraSP = 0, stackSP = true) {

    console.log("GAE CHECKER EXPANSE !!!!")
    const die1 = ageRoll.dice[0].results[0].result;
    const die2 = ageRoll.dice[0].results[1].result;
    const die3 = ageRoll.dice[1].results[0].result;
    const diffFaces = new Set([die1, die2, die3]).size;
    const hasDoubles = diffFaces < 3;
    const rollSummary = {
        dice: {
            d1: { val: die1, img: getDiceImg(die1, false)},
            d2: { val: die2, img: getDiceImg(die2, false)},
            d3: { val: die3, img: getDiceImg(die3, true)}
        },
        stunt: (hasDoubles || isStuntAttack) && generateSP,
        stuntDie: die3
        // stuntPoints: (isStuntAttack ? ageSystem.stuntAttackPoints : 0) + (hasDoubles ? die3 : 0) + (isStuntAttack || hasDoubles ? extraSP : 0)
    };

    // Define total of Stunt Points Generated
    let stuntPts = 0;
    if (rollSummary.stunt) {
        stuntPts = isStuntAttack ? ageSystem.stuntAttackPoints : 0;
        if (hasDoubles) stuntPts = stackSP ? stuntPts + die3 : Math.max(stuntPts, die3);
        if (stuntPts) stuntPts += extraSP
    }
    rollSummary.stuntPoints = stuntPts;

    return rollSummary
};

function getDiceImg(val, peripetie) {
    let path = "systems/age-system/resources/imgs/expanse-dice/chat/";
    let diceType;
    let diceBase;
    let dicePeripeties;

    let expanseDiceType = game.settings.get("age-system", "ExpanseDices");
    switch(expanseDiceType) {
        case "TerreAE":
            diceType = "earth";
            diceBase = "light";
            dicePeripeties = "dark";
            break;
        case "TerreEA":
            diceType = "earth";
            diceBase = "dark";
            dicePeripeties = "light";
            break;
        case "MarsRN":
            diceType = "mars";
            diceBase = "light";
            dicePeripeties = "dark";
            break;
        case "MarsNR":
            diceType = "mars";
            diceBase = "dark";
            dicePeripeties = "light";
            break;
        case "CeintureBN":
            diceType = "belt";
            diceBase = "light";
            dicePeripeties = "dark";
            break;
        case "CeintureNB":
            diceType = "belt";
            diceBase = "dark";
            dicePeripeties = "light";
            break;
        case "ProtogenCN":
            diceType = "protogen";
            diceBase = "light";
            dicePeripeties = "dark";
            break;
        case "ProtogenNC":
            diceType = "protogen";
            diceBase = "dark";
            dicePeripeties = "light";
            break;
    }

    //let img = peripetie ? dicePeripeties : diceBase;
    let img = peripetie ? `${diceType}-${val}-${dicePeripeties}.png` : `${diceType}-${val}-${diceBase}.png`;
    return `${path}${diceType}/${img}`;
};

Hooks.once("init", function() {
    CONFIG.debug.hooks = true;
});

Hooks.on('diceSoNiceRollStart', (id, result) => {
    console.log("Debug expanse ui", result.roll);
    //console.log(game.dice3d.getLoadedDiceSystems());
});

Hooks.on('preCreateChatMessage', (chatMessage) => {
    //console.log("Debug expanse ui", chatMessage.rolls[0]);
});

Hooks.once('diceSoNiceReady', (dice3d) => {

    dice3d.addColorset({
        name:'expRouge',
        description:'The Expanse - Rouge',
        category:'The Expanse',
        foreground:'black',
        background:'#BB3019',
        outline:'#BB3019',
        edge:'#BB3019',
        //material:'glass',
        texture:'none'
    },"no");

    dice3d.addColorset({
        name:'expBlanc',
        description:'The Expanse - Blanc',
        category:'The Expanse',
        foreground:'black',
        background:'#FFFFFF',
        outline:'#FFFFFF',
        edge:'#FFFFFF',
        //material:'glass',
        texture:'none'
    },"no");

    dice3d.addColorset({
        name:'expNoir',
        description:'The Expanse - Noir',
        category:'The Expanse',
        foreground:'white',
        background:'#000000',
        outline:'#000000',
        edge:'#000000',
        //material:'glass',
        texture:'none'
    },"no");

    dice3d.addColorset({
        name:'expBleu',
        description:'The Expanse - Bleu',
        category:'The Expanse',
        foreground:'white',
        background:'#4071B7',
        outline:'#4071B7',
        edge:'#4071B7',
        //material:'glass',
        texture:'none'
    },"no");

    dice3d.addColorset({
        name:'expCyan',
        description:'The Expanse - Cyan',
        category:'The Expanse',
        foreground:'black',
        background:'#57CBF5',
        outline:'#57CBF5',
        edge:'#57CBF5',
        //material:'glass',
        texture:'none'
    },"no");

    let prefix = "";
    if(game.data.options.routePrefix) prefix = `/${game.data.options.routePrefix}`;

    // Terre Blanc 
    dice3d.addSystem({id:"terreBlanc",name:"Expanse - Terre blanc"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-bump.png`
        ],
        colorset: "expBlanc",
        system: "terreBlanc"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-bump.png`
        ],
        colorset: "expBleu",
        system: "terreBlanc"
    });

    // Terre Bleu
    dice3d.addSystem({id:"terreBleu",name:"Expanse - Terre bleu"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-bump.png`
        ],
        colorset: "expBleu",
        system: "terreBleu"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/earth/earth-6-bump.png`
        ],
        colorset: "expBlanc",
        system: "terreBleu"
    });

    // Mars Rouge
    dice3d.addSystem({id:"marsRouge",name:"Expanse - Mars rouge"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-bump.png`
        ],
        colorset: "expRouge",
        system: "marsRouge"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-bump.png`
        ],
        colorset: "expNoir",
        system: "marsRouge"
    });

    // Mars Noir
    dice3d.addSystem({id:"marsNoir",name:"Expanse - Mars noir"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-bump.png`
        ],
        colorset: "expNoir",
        system: "marsNoir"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/mars/mars-6-bump.png`
        ],
        colorset: "expRouge",
        system: "marsNoir"
    });

    // Ceinture Blanc
    dice3d.addSystem({id:"ceintureBlanc",name:"Expanse - Ceinture blanc"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-bump.png`
        ],
        colorset: "expBlanc",
        system: "ceintureBlanc"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-bump.png`
        ],
        colorset: "expNoir",
        system: "ceintureBlanc"
    });

    // Ceinture Noir
    dice3d.addSystem({id:"ceintureNoir",name:"Expanse - Ceinture noir"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-bump.png`
        ],
        colorset: "expNoir",
        system: "ceintureNoir"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/belt/belt-6-bump.png`
        ],
        colorset: "expBlanc",
        system: "ceintureNoir"
    });

    // Protogene Cyan - Noir
    dice3d.addSystem({id:"protogenCyan",name:"Expanse - Protogène cyan"},"default");

    dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-bump.png`
        ],
        colorset: "expCyan",
        system: "protogenCyan"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-bump.png`
        ],
        colorset: "expNoir",
        system: "protogenCyan"
    });

    // Protogene Noir
    dice3d.addSystem({id:"protogenNoir",name:"Expanse - Protogène noir"},"default");

	dice3d.addDicePreset({
        type:"d6",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-dark.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-dark.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-bump.png`
        ],
        colorset: "expNoir",
        system: "protogenNoir"
    });

    dice3d.addDicePreset({
        type:"ds",
        labels:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-light.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-light.png`
        ],
        bumpMaps:[
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-1-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-2-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-3-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-4-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-5-bump.png`,
            `${prefix}/modules/expanse-ui/resources/expanse-dice/dice-so-nice/protogen/protogen-6-bump.png`
        ],
        colorset: "expCyan",
        system: "protogenNoir"
    });
});