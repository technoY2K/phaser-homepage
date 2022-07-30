import Phaser from "phaser";
import { GameState } from "../phaser.types";
import STRINGS from "./index.strings";

const {
    assets: { office, kingSprite },
} = STRINGS;
export class Loading extends Phaser.Scene {
    constructor() {
        super(STRINGS.loadingScene.key);
    }

    preload(): void {
        this.load.baseURL = STRINGS.assets.path;

        this.load.image(kingSprite.image.key, kingSprite.image.path);

        this.load.atlas(
            kingSprite.atlas.key,
            kingSprite.atlas.image,
            kingSprite.atlas.path
        );

        this.load.image({
            key: office.image.key,
            url: office.image.path,
        });

        this.load.tilemapTiledJSON(office.json.key, office.json.path);

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
        this.game.events.emit(GameState.Ready, true);
        this.scene.start(STRINGS.level1Scene.key);
    }
}
