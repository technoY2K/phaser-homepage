import { Actor } from './Actor';

export class Player extends Actor {
  private keyW: Phaser.Input.Keyboard.Key;
  private keyA: Phaser.Input.Keyboard.Key;
  private keyS: Phaser.Input.Keyboard.Key;
  private keyD: Phaser.Input.Keyboard.Key;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'king');
    
    // keys
    this.keyW = this.scene.input.keyboard.addKey('W');
    this.keyA = this.scene.input.keyboard.addKey('A');
    this.keyS = this.scene.input.keyboard.addKey('S');
    this.keyD = this.scene.input.keyboard.addKey('D');
    
    // physics
    this.getBody().setSize(30, 30);
    this.getBody().setOffset(8, 0);
  }

  update(): void {
    this.getBody().setVelocity(0);

    if (this.keyW?.isDown) {
      this.body.velocity.y = -110;
    }

    if (this.keyA?.isDown) {
      this.body.velocity.x = -110;
      this.checkFlip();
      this.getBody().setOffset(48, 15);
    }

    if (this.keyS?.isDown) {
      this.body.velocity.y = 110;
    }
    
    if (this.keyD?.isDown) {
      this.body.velocity.x = 110;
      this.checkFlip();
      this.getBody().setOffset(15, 15);
    }
  }
}