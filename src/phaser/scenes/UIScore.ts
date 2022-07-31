import { Scene } from "phaser";
import { Score, ScoreOperations } from "../classes/Score";
import STRINGS from "./index.strings";

export class UIScore extends Scene {
    private score!: Score;
    private chestLootHandler: () => void;

    constructor() {
        super("ui-score");
        this.chestLootHandler = () => {
            this.score.changeValue(ScoreOperations.INCREASE, 10);
        };
    }

    private initListeners(): void {
        this.game.events.on(
            STRINGS.events.chestLooted,
            this.chestLootHandler,
            this
        );
    }

    create(): void {
        this.score = new Score(this, 20, 20, 0);

        // add listeners
        this.initListeners();
    }
}
