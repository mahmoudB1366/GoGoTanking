module scenes {
  export class PlayScene extends base.Scene {
    // Private Instance Variables
    private _background: Levels.Level1;
    //private _plane: objects.Plane;
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
      //this._plane = new objects.Plane(this.assetManager);
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
      //this._plane.Update();
      //this._island.Update();

      //this._clouds.forEach(cloud => {
       // cloud.Update();
      //});
    }

    // This is where the fun happens
    public Main(): void {
      // add the ocean to the scene
      this.addChild(this._background);

      // add the island to the scene
      //this.addChild(this._island);

      // add the plane to the scene
      //this.addChild(this._plane);

      // add clouds to the scene

      //this._clouds.forEach(cloud => {
       // this.addChild(cloud);
     // });
    }
  }
}