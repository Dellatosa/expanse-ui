
Hooks.once("init", function() {
    //CONFIG.debug.hooks = true;
});

Hooks.on('diceSoNiceRollStart', (id, result) => {
    console.log("Debug expanse ui", result.roll);
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
});