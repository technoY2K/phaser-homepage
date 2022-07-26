import Phaser from "phaser";
import { GameState } from "../phaser.types";

export class Loading extends Phaser.Scene {
    constructor() {
        super("loading-scene");
    }

    preload(): void {
        this.load.baseURL = "/assets/";
        this.load.image("king", "sprites/king.png");
    }

    create(): void {
        this.game.events.emit(GameState.Ready, true);
        this.scene.start("level-1-scene");
    }
}
