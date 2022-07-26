import Phaser from "phaser";
import { GameState } from "../phaser.types";

export class LoadingScene extends Phaser.Scene {
  create() {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.add.text(screenCenterX, screenCenterY, "Welcome").setOrigin(0.5);

    this.game.events.emit(GameState.Ready, true);
  }
}
