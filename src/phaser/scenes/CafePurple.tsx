import { Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";
import { MAPS, SCENES } from "../game.config";

export class CafePurple extends Scene {
    private player!: Player;

    private map!: Tilemaps.Tilemap;
    private tileset!: Tilemaps.Tileset;

    // layers
    private edificeLayer!: Tilemaps.TilemapLayer;
    private furnishingLayer!: Tilemaps.TilemapLayer;

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

        this.map.createLayer("Ground", this.tileset, 0, 0);
        this.map.createLayer("Sidewalk", this.tileset, 0, 0);
        this.map.createLayer("Road", this.tileset, 0, 0);
        this.edificeLayer = this.map.createLayer("Edifice", this.tileset, 0, 0);
        this.furnishingLayer = this.map.createLayer(
            "Furnishing",
            this.tileset,
            0,
            0
        );

        this.edificeLayer.setCollisionByProperty({ collision: true });
        this.furnishingLayer.setCollisionByProperty({ collision: true });
    }

    public create(): void {
        this.initMap();

        this.player = new Player(this, 300, 700);

        this.physics.add.collider(this.player, this.edificeLayer);
        this.physics.add.collider(this.player, this.furnishingLayer);
    }

    public update(): void {
        this.player.update();
    }
}
