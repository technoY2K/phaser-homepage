import { Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";

export class Level1 extends Scene {
    private player!: Player;
    private map!: Tilemaps.Tilemap;
    private tileset!: Tilemaps.Tileset;
    private wallsLayer!: Tilemaps.TilemapLayer;
    private groundLayer!: Tilemaps.TilemapLayer;

    constructor() {
        super("level-1-scene");
    }

    private initMap(): void {
        this.map = this.make.tilemap({
            key: "dungeon",
            tileWidth: 16,
            tileHeight: 16,
        });
        this.tileset = this.map.addTilesetImage("dungeon", "tiles");
        this.groundLayer = this.map.createLayer("Ground", this.tileset, 0, 0);
        this.wallsLayer = this.map.createLayer("Walls", this.tileset, 0, 0);
        this.physics.world.setBounds(
            0,
            0,
            this.wallsLayer.width,
            this.wallsLayer.height
        );
    }

    create(): void {
        this.initMap();
        this.player = new Player(this, 100, 100);
    }

    update(): void {
        this.player.update();
    }
}
