import { useEffect, useState } from "react";
import Phaser from "phaser";
import GAME_CONFIG from "./config";
import { GameEvent, GameEventType, GamePayload } from "./game.types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "~/store/store";
import { increment } from "~/store/game";
import STRINGS from "./index.strings";

export function GameEngine() {
    const [isReady, setReady] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const n = useSelector((state: AppState) => state.game);

    console.log(n, "VALUE FROM STATE");

    function gameEventHandler(gm: GamePayload): void {
        switch (gm.type) {
            case GameEventType.Ready:
                setReady(true);
                break;

            case GameEventType.StateChange:
                dispatch(increment(gm.data ?? 0));
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        const game = new Phaser.Game(GAME_CONFIG);
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
