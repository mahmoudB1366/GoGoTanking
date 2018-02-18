module scenes {
  export class PlayScene extends base.Scene {
    // Private Instance Variables
    private _background: Levels.Level1;
    private _player1: base.Tank;
    //private _island: objects.Island;
    //private _clouds: objects.Cloud[];
   // private _cloudNum: number;

    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods



    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._background = new Levels.Level1();
      this._player1 = new objects.P1Medium;
      //this._island = new objects.Island(this.assetManager);

      // instantiate the cloud array
      //this._clouds = new Array<objects.Cloud>();
      //this._cloudNum = 3;
      // loop and add each cloud to the array
      //for (let count = 0; count < this._cloudNum; count++) {
        //this._clouds[count] = new objects.Cloud(this.assetManager);
      //}

      this.Main();
    }

    public Update(): void {
      this._background.Update();
      this._player1.Update();
      //this._island.Update();

      //this._clouds.forEach(cloud => {
       // cloud.Update();
      //});
    }

    // This is where the fun happens
    public Main(): void {
      // add the background to the scene
      this.addChild(this._background);

      // add the Player1 to the scene
      this.addChild(this._player1);

      // add the plane to the scene
      //this.addChild(this._plane);

      // add clouds to the scene

      //this._clouds.forEach(cloud => {
       // this.addChild(cloud);
     // });
    }
  }
}
