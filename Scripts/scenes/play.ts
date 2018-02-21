module scenes {
  export class PlayScene extends base.Scene {
    // Private Instance Variables
    private _background: Levels.Level1;
    public _player1: base.Tank;
    public _player2: base.Tank;
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
      this._player1 = new objects.P1Medium();
      this._player2 = new objects.P2Heavy();
      


      this.Main();
    }

    public Update(): void {
      this._background.Update();
      
      if (this._player1 !=null)
      {
        this._player1.Update();
        if (Core.GameManager.P1Health == 0)
        {
          this.removeChild(this._player1);
          this._player1 = null;

        }
      }
      
      
      if (this._player2 !=null)
      {
        this._player2.Update();
        if (Core.GameManager.P2Health == 0)
        {
          this.removeChild(this._player2);
          this._player2 = null;

        }
      }
      
      //this._island.Update();

      //this._clouds.forEach(cloud => {
       // cloud.Update();
      //});
    }

    // This is where the fun happens
    public Main(): void {
      // add the background to the scene
      this.addChild(this._background);

      // add the Players to the scene
      this.addChild(this._player1);
      this.addChild(this._player2);
      Core.GameManager.playScene = this;

    }



    }
  
}
