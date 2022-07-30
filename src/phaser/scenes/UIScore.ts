import { Scene } from "phaser";
import { Score } from "../classes/Score";

export class UIScore extends Scene {
    private score!: Score;

    constructor() {
        super("ui-score");
    }

    create(): void {
        this.score = new Score(this, 20, 20, 0);
    }
}
