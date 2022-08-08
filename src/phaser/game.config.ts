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
    cafePurple: {
        key: "cafe",
        image: {
            key: "modern-ext-image",
            path: "tilemaps/tiles/modern-ext-32x32.png",
        },
        json: {
            key: "outside",
            path: "tilemaps/json/cafe-purple.tmj",
        },
    },
};

export const SCENES = {
    loading: {
        key: "loading-scene",
    },
    cafePurple: {
        key: "cafe-purple-scene",
    },
    uiScore: {
        key: "ui-score",
    },
};
