export const ASSETS = {
    path: "/assets/",
    sprites: {
        king: {
            image: {
                key: "king-image",
                path: "sprites/king.png",
            },
            atlas: {
                key: "king-atlas",
                image: "spritesheets/a-king.png",
                path: "spritesheets/a-king-atlas.json",
            },
        },
    },
};

export const MAPS = {
    office: {
        key: "office",
        image: {
            key: "office-image",
            path: "tilemaps/tiles/office-interior-16-16.png",
        },
        json: {
            key: "office-tmj",
            path: "tilemaps/json/office-map.tmj",
        },
    },
    cafePurple: {
        key: "cafe-purple",
        image: {
            key: "cafe-purple-image",
            path: "tilemaps/tiles/modern-exteriors-32x32.png",
        },
        json: {
            key: "cafe-purple-tmj",
            path: "tilemaps/json/cafe-purple.tmj",
        },
    },
};

export const SCENES = {
    loading: {
        key: "loading-scene",
    },
    level1: {
        key: "level-1-scene",
    },
    cafePurple: {
        key: "cafe-purple-scene",
    },
    uiScore: {
        key: "ui-score",
    },
};
