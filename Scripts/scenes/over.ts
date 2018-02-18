module scenes {
  export class OverScene extends base.Scene {
    // Private Instance Variables
    private _overLabel: objects.Label;
    private _backButton: objects.Button;

    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _backButtonClick():void {
      Core.GameManager.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
      this._backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._overLabel);

      // add the backButton to the scene
      this.addChild(this._backButton);

      // event listeners
      this._backButton.on("click", this._backButtonClick);
    }
  }
}
