module objects {
    export class P1Medium extends base.Tank {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("p1medium");
        this.setTankProperties();
        this.setController();
        this.Start();
      }
  
      // private methods
  private setTankProperties():void{
    this._tankSpeed = Core.GameManager.M_tank_speed;
    this._bulletSpeed = Core.GameManager.M_bullet_speed
    this._bulletRange = Core.GameManager.M_bullet_range;
    this._bulletPower = Core.GameManager.M_bullet_power;
    this._tankLife = 100;
  }

  private setController():void{
    this._left = Core.GameManager.P1_LEFT;
    this._right = Core.GameManager.P1_RIGHT;
    this._up = Core.GameManager.P1_UP;
    this._down = Core.GameManager.P1_DOWN;
  }
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this.y = 430;
        this.x = 200;

        
      }
  
      // updates the game object every frame
      public Update():void {
        super.Update();
        //this.Move();
        //this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
  
      }
  
      // move the object to some new location
  
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
  