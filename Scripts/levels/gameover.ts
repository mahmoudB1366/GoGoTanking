module Levels {
    export class GameOver extends createjs.Bitmap {
      // private instance variables
        
      // public properties
  
      // Constructor
      constructor() {
        super(Core.GameManager.assetManager.getResult("gameover"));
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