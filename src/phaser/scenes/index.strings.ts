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
        dungeonTile: {
            key: "dungeon",
            image: {
                key: "tiles",
                path: "tilemaps/tiles/dungeon-16-16.png",
            },
            json: {
                key: "dungeon",
                path: "tilemaps/json/dungeon.tmj",
            },
        },
    },
    loadingScene: {
        key: "loading-scene",
    },
    level1Scene: {
        key: "level-1-scene",
    },
};
