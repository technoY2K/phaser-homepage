import Phaser from "phaser";
import { GameState } from "../phaser.types";
import STRINGS from "./index.strings";

const {
    assets: { dungeonTile, kingSprite },
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
            key: dungeonTile.image.key,
            url: dungeonTile.image.path,
        });
        this.load.tilemapTiledJSON(dungeonTile.json.key, dungeonTile.json.path);
    }

    create(): void {
        this.game.events.emit(GameState.Ready, true);
        this.scene.start(STRINGS.level1Scene.key);
    }
}
