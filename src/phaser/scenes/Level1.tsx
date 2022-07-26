import Phaser from "phaser";

export class Level1 extends Phaser.Scene {
  private king!: Phaser.GameObjects.Sprite;

  constructor() {
    super("level-1-scene");
  }

  create(): void {
    this.king = this.add.sprite(100, 100, "king");
  }
}
