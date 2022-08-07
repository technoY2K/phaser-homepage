/* eslint-disable */
// @ts-nocheck

import { Display, GameObjects, Scene, Tilemaps } from "phaser";
import { Player } from "../classes/Player";
import { GameEvent } from "~/phaser/game-engine/game.types";
import { MAPS, SCENES } from "../game.config";
import { gameObjectsToObjectPoints } from "./utils";

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
        super(SCENES.level1.key);
    }

    private initMap(): void {
        // tileset
        this.map = this.make.tilemap({
            key: MAPS.office.key,
            tileWidth: 16,
            tileHeight: 16,
        });

        this.tileset = this.map.addTilesetImage(
            MAPS.office.key,
            MAPS.office.image.key
        );

        // create layers
        this.groundLayer = this.map.createLayer("Ground", this.tileset, 0, 0);

        this.furnitureLayer = this.map.createLayer(
            "Furniture",
            this.tileset,
            0,
            0
        );

        this.wallsLayer = this.map.createLayer("Walls", this.tileset, 0, 0);

        this.exteriorLayer = this.map.createLayer(
            "Exterior",
            this.tileset,
            0,
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
                .sprite(cp.x, cp.y, "office-sprite", 219)
                .setScale(2)
        );

        this.chests.forEach((chest) => {
            this.physics.add.overlap(this.player, chest, (_, chest) => {
                this.game.events.emit(GameEvent.ChestLooted);
                chest.destroy();
                this.cameras.main.flash();
            });
        });
    }

    private initCamera(): void {
        this.cameras.main.setSize(
            this.game.scale.width,
            this.game.scale.height
        );

        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
        this.cameras.main.setZoom(2);
    }

    private showDebugWalls(): void {
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        this.exteriorLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Display.Color(243, 243, 48, 255),
        });
    }

    create(): void {
        // map
        this.initMap();

        // player
        this.player = new Player(this, 100, 500);

        // create chests and points
        this.initChests();

        // add collider to player
        this.physics.add.collider(this.player, this.wallsLayer);
        this.physics.add.collider(this.player, this.furnitureLayer);
        this.physics.add.collider(this.player, this.exteriorLayer);

        // camera
        this.initCamera();
    }

    update(): void {
        this.player.update();
    }
}
