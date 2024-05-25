window.eaglercraftOpts = {
    container: "game_frame",
    assetsURI: "assets.epk",
    serverWorkerURI: "worker_bootstrap.js",
    servers: [
        {
            serverAddress: "address here",
            serverName: "placeholder", 
            hideAddress: false
        }
    ],
    relays: [
        { 
            addr: "wss://eagler-relay.colbster937.dev/",
            name: "Colbster937 Relay #1",
            primary: relayId == 0
        },
        {
            addr: "wss://eagler-relay.eaglesmp.org/",
            name: "Colbster937 Relay #2",
            primary: relayId == 1
        },
        {
            addr: "wss://relay.deev.is/",
            name: "lax1dude relay #1",
            primary: relayId == 2
        },
        {
            addr: "wss://relay.lax1dude.net/",
            name: "lax1dude relay #2",
            primary: relayId == 3
        },
        {
            addr: "wss://relay.shhnowisnottheti.me/",
            name: "ayunami relay #1",
            primary: relayId == 4
        }
    ],
    mainMenu: { 
        splashes: [
            "Darviglet!",
            "You Eagler!",
            "Yeeeeeee!",
            "yeee",
            "EEEEEEEEE!",
            "You Darvig!",
            "You Vigg!",
            ":>",
            "|>",
            "You Yumpster!"
        ], 
        eaglerLogo: false 
    }
};