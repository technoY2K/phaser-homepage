import { Display, GameObjects, Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";
import STRINGS from "./index.strings";
import { gameObjectsToObjectPoints } from "./utils";

const { assets } = STRINGS;

export class Level1 extends Scene {
    private player!: Player;
    private chests!: GameObjects.Sprite[];

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
        // tileset
        this.map = this.make.tilemap({
            key: assets.office.key,
            tileWidth: 16,
            tileHeight: 16,
        });

        this.tileset = this.map.addTilesetImage(
            assets.office.key,
            assets.office.image.key
        );

        // create layers
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

        // // set collision to layers
        this.wallsLayer.setCollisionByProperty({ collides: true });
        this.furnitureLayer.setCollisionByProperty({ collides: true });
        this.exteriorLayer.setCollisionByProperty({ collides: true });

        // set world bounds
        this.physics.world.setBounds(
            0,
            0,
            this.exteriorLayer.width,
            this.exteriorLayer.height
        );
    }

    private initChests(): void {
        const chestPoints = gameObjectsToObjectPoints(
            this.map.filterObjects("Chests", (c) => c.name === "ChestPoint")
        );

        this.chests = chestPoints.map((cp) =>
            this.physics.add
                .sprite(cp.x + 400, cp.y, "office-sprite", 219)
                .setScale(2)
        );

        this.chests.forEach((chest) => {
            this.physics.add.overlap(this.player, chest, (_, chest) => {
                chest.destroy();
                this.cameras.main.flash();
            });
        });
    }

    private showDebugWalls(): void {
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        this.exteriorLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Display.Color(243, 243, 48, 255),
        });
    }

    create(): void {
        this.initMap();
        this.player = new Player(this, 600, 500);

        // create chests and points
        this.initChests();

        // add collider to player
        this.physics.add.collider(this.player, this.wallsLayer);
        this.physics.add.collider(this.player, this.furnitureLayer);
        this.physics.add.collider(this.player, this.exteriorLayer);
    }

    update(): void {
        this.player.update();
    }
}
