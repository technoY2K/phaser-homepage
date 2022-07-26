import Phaser from "phaser";
import { GameState } from "../phaser.types";

export class InitialScene extends Phaser.Scene {
  private king!: Phaser.GameObjects.Sprite;

  constructor() {
    super("loading-scene");
  }

  preload(): void {
    this.load.baseURL = "/assets/";
    this.load.image("king", "sprites/king.png");
  }

  create(): void {
    this.king = this.add.sprite(100, 100, "king");
    this.game.events.emit(GameState.Ready, true);
  }
}
