import { Display, Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";
import STRINGS from "./index.strings";

const { assets } = STRINGS;

export class Level1 extends Scene {
    private player!: Player;
    private map!: Tilemaps.Tilemap;
    private tileset!: Tilemaps.Tileset;

    // layers
    private groundLayer!: Tilemaps.TilemapLayer;
    private furnitureLayer!: Tilemaps.TilemapLayer;
    private wallsLayer!: Tilemaps.TilemapLayer;
    private exteriorLayer!: Tilemaps.TilemapLayer;

    constructor() {
        super(STRINGS.level1Scene.key);
    }

    private initMap(): void {
        this.map = this.make.tilemap({
            key: assets.office.key,
            tileWidth: 16,
            tileHeight: 16,
        });

        this.tileset = this.map.addTilesetImage(
            assets.office.key,
            assets.office.image.key
        );

        this.groundLayer = this.map.createLayer("Ground", this.tileset, 400, 0);

        this.furnitureLayer = this.map.createLayer(
            "Furniture",
            this.tileset,
            400,
            0
        );

        this.wallsLayer = this.map.createLayer("Walls", this.tileset, 400, 0);

        this.exteriorLayer = this.map.createLayer(
            "Exterior",
            this.tileset,
            400,
            0
        );

        // // set collision
        // this.wallsLayer.setCollisionByProperty({ collides: true });
        // this.physics.world.setBounds(
        //     0,
        //     0,
        //     this.wallsLayer.width,
        //     this.wallsLayer.height
        // );
    }

    private showDebugWalls(): void {
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        this.wallsLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Display.Color(243, 243, 48, 255),
        });
    }

    create(): void {
        this.initMap();
        this.player = new Player(this, 300, 500);
        this.physics.add.collider(this.player, this.wallsLayer);
    }

    update(): void {
        this.player.update();
    }
}
