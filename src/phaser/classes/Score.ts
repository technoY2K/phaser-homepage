import { Game, Scene } from "phaser";
import { Text } from "./Text";
import {
    GameEvent,
    GameEventType,
    GamePayload,
} from "~/phaser/game-engine/game.types";
import { increment } from "~/store/game";

export enum ScoreOperations {
    INCREASE,
    DESCREASE,
    SET_VALUE,
}

export class Score extends Text {
    private scoreValue: number;

    constructor(scene: Scene, x: number, y: number, initScore = 0) {
        super(scene, x, y, `Score ${initScore}`);

        scene.add.existing(this);
        this.scoreValue = initScore;
    }

    public changeValue(operation: ScoreOperations, value: number): void {
        switch (operation) {
            case ScoreOperations.INCREASE:
                this.scoreValue += value;
                break;

            case ScoreOperations.DESCREASE:
                this.scoreValue -= value;
                break;

            case ScoreOperations.SET_VALUE:
                this.scoreValue = value;
                break;

            default:
                break;
        }

        this.setText(`Score: ${this.scoreValue}`);
    }

    public emitScoreChange(game: Game): void {
        const payload: GamePayload<number> = {
            type: GameEventType.StateChange,
            updateState: () => increment(this.scoreValue),
        };

        game.events.emit(GameEvent.Message, payload);
    }

    public getScore(): number {
        return this.scoreValue;
    }
}
