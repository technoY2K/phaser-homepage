import { useEffect, useState } from "react";
import Phaser from "phaser";
class Scene extends Phaser.Scene {
  create() {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;
    const loadingText = this.add
      .text(screenCenterX, screenCenterY, "Welcome")
      .setOrigin(0.5);

    this.game.events.emit("READY", true);
  }
}

function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: "game",
      width: "100%",
      height: 600,
      scene: [Scene],
    };

    const game = new Phaser.Game(config);
    game.events.on("READY", setReady);

    return () => {
      setReady(false);
      game.destroy(true);
    };
  }, []);

  return (
    <div id="game" style={{ visibility: isReady ? "visible" : "hidden" }}></div>
  );
}

export default App;
