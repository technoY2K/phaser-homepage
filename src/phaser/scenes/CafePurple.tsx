import { Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";
import { MAPS, SCENES } from "../game.config";

export class CafePurple extends Scene {
    private player!: Player;

    private map!: Tilemaps.Tilemap;
    private tileset!: Tilemaps.Tileset;

    // layers
    private groundLayer!: Tilemaps.TilemapLayer;
    private buildingLayer!: Tilemaps.TilemapLayer;

    constructor() {
        super(SCENES.cafePurple.key);
    }

    private initMap(): void {
        this.map = this.make.tilemap({
            key: MAPS.cafePurple.json.key,
        });

        this.tileset = this.map.addTilesetImage(
            MAPS.cafePurple.json.key,
            MAPS.cafePurple.image.key
        );

        this.groundLayer = this.map.createLayer("Ground", this.tileset, 0, 0);
        this.buildingLayer = this.map.createLayer(
            "Buildings",
            this.tileset,
            0,
            0
        );
    }

    public create(): void {
        this.initMap();

        this.player = new Player(this, 300, 700);
    }

    public update(): void {
        this.player.update();
    }
}
