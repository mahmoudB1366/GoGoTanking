module objects {
    export class P1Medium extends base.Tank {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("p1medium");
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this.y = 430;
        this.x = 200;
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        //this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
  
      }
  
      // move the object to some new location
      public Move():void {
       this.x = Core.GameManager.stage.mouseX;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // right boundary
        if(this.x >= 640 - this.HalfWidth) {
          this.x = 640 - this.HalfWidth;
        }
  
        // left boundary
        if(this.x <= this.HalfWidth) {
          this.x = this.HalfWidth;
        }
      }
    }
  }
  