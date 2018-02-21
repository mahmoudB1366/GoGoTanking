module objects {
    export class Bullet1 extends base.Bullet {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor(x:number,y:number,angel:number,speed:number,range:number,power:number) {
        super(x,y,angel,speed,range,power);
        this._enemy = "Player2";
        this._enemyTank = Core.GameManager.playScene.getChildAt(2) as base.Tank;
      }

      public IsColliding():string {
  if (this._enemyTank != null)
  {
      if((Math.abs(this.y - this._enemyTank.y) < (this.HalfHeight + this._enemyTank.HalfHeight))
    && (Math.abs(this.x - this._enemyTank.x) < (this.HalfWidth + this._enemyTank.HalfWidth)))
      {
          Core.GameManager.P2Health = 0;
          this.x = 10000;
      }
      return "";

  }
    }

    }
    }