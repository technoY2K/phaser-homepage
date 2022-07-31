export default {
    assets: {
        path: "/assets/",
        kingSprite: {
            image: {
                key: "king",
                path: "sprites/king.png",
            },
            atlas: {
                key: "a-king",
                image: "spritesheets/a-king.png",
                path: "spritesheets/a-king-atlas.json",
            },
        },
        office: {
            key: "office",
            image: {
                key: "office-tile",
                path: "tilemaps/tiles/office-interior-16-16.png",
            },
            json: {
                key: "office",
                path: "tilemaps/json/office-map.tmj",
            },
        },
    },
    events: {
        chestLooted: "chest-looted",
    },
    loadingScene: {
        key: "loading-scene",
    },
    level1Scene: {
        key: "level-1-scene",
    },
};
