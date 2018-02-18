module scenes {
  export class StartScene extends base.Scene {
    // Private Instance Variables
    private _welcomeLabel: base.Label;
    private _startButton: base.Button;

    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      Core.GameManager.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._welcomeLabel = new base.Label("Welcome", "60px", "Consolas", "#000000", 320, 240, true);
      this._startButton = new base.Button(this.assetManager, "startButton", 320, 340);
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._welcomeLabel);

      // add the startButton to the scene
      this.addChild(this._startButton);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
