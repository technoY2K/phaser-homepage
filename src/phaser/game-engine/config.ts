import Phaser from "phaser";
import { Loading, CafePurple, UIScore } from "../scenes";
import STRINGS from "./index.strings";

function windowSizedChanged(game: Phaser.Game) {
    if (game.isBooted) {
        setTimeout(() => {
            game.scale.resize(window.innerWidth, window.innerHeight);
            game.canvas.setAttribute(
                "style",
                `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
            );
        }, 100);
    }
}

const config: Phaser.Types.Core.GameConfig = {
    parent: STRINGS.htmlElementMountId,
    title: STRINGS.gameTitle,
    type: Phaser.WEBGL,
    backgroundColor: STRINGS.gameBackgroundColor,
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
    render: {
        antialiasGL: false,
        pixelArt: true,
    },
    callbacks: {
        postBoot: (game) => {
            windowSizedChanged(game);
            window.onresize = () => windowSizedChanged(game);
        },
    },
    canvasStyle: `display: block; width: 100%; height: 100%;`,
    autoFocus: true,
    scene: [Loading, CafePurple, UIScore],
};

export default config;
