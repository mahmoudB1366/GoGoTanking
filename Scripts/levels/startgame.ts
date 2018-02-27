module Levels {
    export class StartGame extends createjs.Bitmap {
      // private instance variables
        
      // public properties
  
      // Constructor
      constructor() {
        super(Core.GameManager.assetManager.getResult("startgame"));
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {

      }
  
      // updates the game object every frame
      public Update():void {

      }
    }
  }