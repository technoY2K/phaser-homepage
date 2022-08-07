import Phaser from "phaser";
import {
    GameEvent,
    GameEventType,
    GamePayload,
} from "~/phaser/game-engine/game.types";
import { ASSETS, MAPS, SCENES } from "../game.config";

const {
    sprites: { king },
} = ASSETS;
export class Loading extends Phaser.Scene {
    constructor() {
        super(SCENES.loading.key);
    }

    preload(): void {
        this.load.baseURL = ASSETS.path;

        this.load.image(king.image.key, king.image.path);

        this.load.atlas(king.atlas.key, king.atlas.image, king.atlas.path);

        this.load.image({
            key: MAPS.office.image.key,
            url: MAPS.office.image.path,
        });

        this.load.tilemapTiledJSON(MAPS.office.key, MAPS.office.json.path);

        this.load.spritesheet(
            "office-sprite",
            "tilemaps/tiles/office-interior-16-16.png",
            {
                frameWidth: 16,
                frameHeight: 16,
            }
        );
    }

    create(): void {
        const paylaod: GamePayload = {
            type: GameEventType.Ready,
        };

        this.game.events.emit(GameEvent.Message, paylaod);
        this.scene.start(SCENES.level1.key);
        this.scene.start(SCENES.uiScore.key);
    }
}
