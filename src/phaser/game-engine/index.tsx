import { useEffect, useState } from "react";
import Phaser from "phaser";
import { GameEvent, GameMessage, GameMessageType } from "../phaser.types";
import { Loading, Level1, UIScore } from "../scenes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "~/store/store";
import { increment } from "~/store/game";
import STRINGS from "./index.strings";

export function GameEngine() {
    const [isReady, setReady] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const n = useSelector((state: AppState) => state.game);

    console.log(n, "N");

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

    function gameEventHandler(gm: GameMessage): void {
        switch (gm.type) {
            case GameMessageType.Ready:
                setReady(true);
                break;

            case GameMessageType.StateChange:
                dispatch(increment(gm.payload?.value ?? 0));
                break;

            default:
                break;
        }
    }

    useEffect(() => {
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
            scene: [Loading, Level1, UIScore],
        };

        const game = new Phaser.Game(config);
        game.events.on(GameEvent.Message, gameEventHandler);

        return () => {
            setReady(false);
            game.destroy(true);
        };
    }, []);

    return (
        <div
            id={STRINGS.htmlElementMountId}
            style={{ visibility: isReady ? "visible" : "hidden" }}
        ></div>
    );
}
