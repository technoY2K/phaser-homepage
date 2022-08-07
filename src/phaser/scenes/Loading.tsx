import Phaser from "phaser";
import {
    GameEvent,
    GameEventType,
    GamePayload,
} from "~/phaser/game-engine/game.types";
import SCENES_CONFIG from "./index.strings";

const {
    assets: { maps, sprites },
} = SCENES_CONFIG;
export class Loading extends Phaser.Scene {
    constructor() {
        super(SCENES_CONFIG.scenes.loading.key);
    }

    preload(): void {
        this.load.baseURL = SCENES_CONFIG.assets.path;

        this.load.image(sprites.king.image.key, sprites.king.image.path);

        this.load.atlas(
            sprites.king.atlas.key,
            sprites.king.atlas.image,
            sprites.king.atlas.path
        );

        this.load.image({
            key: maps.office.image.key,
            url: maps.office.image.path,
        });

        this.load.tilemapTiledJSON(maps.office.key, maps.office.json.path);

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
        this.scene.start(SCENES_CONFIG.scenes.level1.key);
        this.scene.start("ui-score");
    }
}
