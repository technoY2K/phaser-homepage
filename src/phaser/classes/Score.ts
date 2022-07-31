import { Game, Scene } from "phaser";
import { Text } from "./Text";
import { GameEvent, GameMessage, GameMessageType } from "../phaser.types";

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
        const message: GameMessage = {
            type: GameMessageType.StateChange,
            payload: { value: this.scoreValue },
        };

        game.events.emit(GameEvent.Message, message);
    }

    public getScore(): number {
        return this.scoreValue;
    }
}
