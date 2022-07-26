import { useEffect, useState } from "react";
import Phaser from "phaser";

enum GameState {
  Ready = "READY",
}
class Scene extends Phaser.Scene {
  create() {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.add.text(screenCenterX, screenCenterY, "Welcome").setOrigin(0.5);

    this.game.events.emit(GameState.Ready, true);
  }
}

export function Game() {
  const [isReady, setReady] = useState(false);

  function windowSizedChanged(game: Phaser.Game) {
    if (game.isBooted) {
      setTimeout(() => {
        game.scale.resize(window.innerWidth, window.innerHeight);
        game.canvas.setAttribute(
          "style",
          `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
        );
      }, 100);
    }
  }

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      parent: "game",
      title: "Cloud Land",
      type: Phaser.WEBGL,
      backgroundColor: "#351f1b",
      scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      render: {
        antialiasGL: false,
        pixelArt: true,
      },
      callbacks: {
        postBoot: (game) => {
          window.onresize = () => windowSizedChanged(game);
        },
      },
      canvasStyle: `display: block; width: 100%; height: 100%;`,
      autoFocus: true,
      scene: [Scene],
    };

    const game = new Phaser.Game(config);
    game.events.on(GameState.Ready, setReady);

    return () => {
      setReady(false);
      game.destroy(true);
    };
  }, []);

  return (
    <div id="game" style={{ visibility: isReady ? "visible" : "hidden" }}></div>
  );
}
