import Phaser from "phaser";
import { GameState } from "../phaser.types";

export class Loading extends Phaser.Scene {
    constructor() {
        super("loading-scene");
    }

    preload(): void {
        this.load.baseURL = "/assets/";
        this.load.image("king", "sprites/king.png");
        this.load.atlas("a-king", "spritesheets/a-king.png", "spritesheets/a-king-atlas.json");
        this.load.image({
            key: "tiles",
            url: "tilemaps/tiles/dungeon-16-16.png",
        });
        this.load.tilemapTiledJSON("dungeon", "tilemaps/json/dungeon.tmj");
    }

    create(): void {
        this.game.events.emit(GameState.Ready, true);
        this.scene.start("level-1-scene");
    }
}
