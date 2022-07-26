import Phaser from "phaser";
import { Player } from "../classes/Player";

export class Level1 extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super("level-1-scene");
    }

    create(): void {
        this.player = new Player(this, 100, 100);
    }

    update(): void {
        this.player.update();
    }
}
