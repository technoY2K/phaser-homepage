import { useEffect, useState } from "react";
import Phaser from "phaser";
import GAME_CONFIG from "./config";
import { GameEvent, EventMessage, GamePayload } from "./game.types";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "~/store/store";
import STRINGS from "./index.strings";
import DialogBox from "~/components/dialogbox";

export function GameEngine() {
    const [isReady, setReady] = useState(false);
    const dispatch = useAppDispatch();
    const n = useSelector((state: AppState) => state.game);

    console.log(n, "VALUE FROM STATE");

    function gameEventHandler(gm: GamePayload): void {
        switch (gm.message) {
            case EventMessage.Ready:
                setReady(true);
                break;

            case EventMessage.StateChange:
                if (gm.updateState) {
                    dispatch(gm.updateState());
                }
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        const game = new Phaser.Game(GAME_CONFIG);
        game.events.on(GameEvent.MainSystem, gameEventHandler);

        return () => {
            setReady(false);
            game.destroy(true);
        };
    }, []);

    return (
        <main>
            <div id="dialog-modal">
                <DialogBox
                    messages={["Hello there", "Ok whatever", "Lorem Ipsum"]}
                    characterName="Player"
                    onDialogEnded={() => {
                        console.log("end");
                    }}
                    screenWidth={800}
                    screenHeight={800}
                />
            </div>
            <div
                id={STRINGS.htmlElementMountId}
                style={{ visibility: isReady ? "visible" : "hidden" }}
            ></div>
        </main>
    );
}
