module base {
  export abstract class Tank extends base.GameObject {
    // private instance variables
    protected _keyboardEvent: KeyboardEvent;

    public TankSpeed: number;
    public TankLife: number;
    public BulletRange: number;
    public BulletSpeed: number;
    public BulletPower: number;

    protected _moveLeft: boolean;
    protected _moveRight: boolean;
    protected _moveUp: boolean;
    protected _moveDown: boolean;
    protected _startFire: boolean;
    
    protected _tankType: config.tankTypes;


    // public properties
    public Bullet: base.Bullet;


    // constructors
    constructor(imageString: string, name: string, tanktype: config.tankTypes) {
      super(imageString);
      this.name = name;
      this._tankType = tanktype;
      this.setupPlayer();
      this.setupTank();

    }

    // private methods

    //setup tank types
    private setupTank(): void {
      this.TankLife = 100;
      switch (this._tankType) {
        case config.tankTypes.HEAVY:
          this.TankSpeed = Core.GameManager.H_tank_speed;
          this.BulletSpeed = Core.GameManager.H_bullet_speed
          this.BulletRange = Core.GameManager.H_bullet_range;
          this.BulletPower = Core.GameManager.H_bullet_power;
          break;
        case config.tankTypes.MEDIUM:
          this.TankSpeed = Core.GameManager.M_tank_speed;
          this.BulletSpeed = Core.GameManager.M_bullet_speed
          this.BulletRange = Core.GameManager.M_bullet_range;
          this.BulletPower = Core.GameManager.M_bullet_power;
          break;
        case config.tankTypes.LIGHT:
          this.TankSpeed = Core.GameManager.L_tank_speed;
          this.BulletSpeed = Core.GameManager.L_bullet_speed
          this.BulletRange = Core.GameManager.L_bullet_range;
          this.BulletPower = Core.GameManager.L_bullet_power;
          break;
      }
    }

    //setup player specific properties
    private setupPlayer(): void {
      switch (this.name)
      {
        case "Player1":
        this.Bullet = new objects.Bullet1(10000, 10000, 1, 0, 0, 0);
        this.y = 430;
        this.x = 200;
        Core.GameManager.P1Health = 100;
        break;
        case "Player2":
        this.Bullet = new objects.Bullet2(10000, 10000, 1, 0, 0, 0);
        this.y = 130;
        this.x = 200;
        Core.GameManager.P2Health = 100;
        break; 
      }
     }

     //fires the bullet
     private fire(): void {
      this.Bullet.x = this.x;
      this.Bullet.y = this.y;
      this.Bullet._angel = this.rotation;
      this.Bullet._speed = this.BulletSpeed;
      this.Bullet._power = this.BulletPower;
      this.Bullet._range = this.BulletRange;

    }

// setup controllers & detects pressed keys using keyboard manager
    private setController(): void {
      if (this.name == "Player1") {

        this._moveLeft = Core.GameManager.keyboardManager.P1Left;
        this._moveRight = Core.GameManager.keyboardManager.P1Right;
        this._moveUp = Core.GameManager.keyboardManager.P1Up;
        this._moveDown = Core.GameManager.keyboardManager.P1Down;
        this._startFire = Core.GameManager.keyboardManager.P1Fire;
      }
      else if (this.name == "Player2") {

        this._moveLeft = Core.GameManager.keyboardManager.P2Left;
        this._moveRight = Core.GameManager.keyboardManager.P2Right;
        this._moveUp = Core.GameManager.keyboardManager.P2Up;
        this._moveDown = Core.GameManager.keyboardManager.P2Down;
        this._startFire = Core.GameManager.keyboardManager.P2Fire;
      }
    }

    //check bounds to avoid tanks go out of canvas
    private checkBounds(): void {
      //right boundary
      if (this.x >= 640 - this.HalfWidth) {
        this.x = 640 - this.HalfWidth;
      }

      // left boundary
      if (this.x <= this.HalfWidth) {
        this.x = this.HalfWidth;
      }
      // up boundary
      if (this.y <= this.HalfHeight) {
        this.y = this.HalfHeight;
      }
      // down boundary
      if (this.y >= 480 - this.HalfHeight) {
        this.y = 480 - this.HalfHeight;
      }
    }

    //detects tank movements & moves the tank
    private move(): void {
      this.setController();
      if ((this._moveLeft) && (this._moveUp)) {
        this.x -= this.TankSpeed;
        this.y -= this.TankSpeed;
        this.rotation = -45;
      }
      else if ((this._moveLeft) && (this._moveDown)) {
        this.x -= this.TankSpeed;
        this.y += this.TankSpeed;
        this.rotation = -135;
      }
      else if ((this._moveRight) && (this._moveDown)) {
        this.x += this.TankSpeed;
        this.y += this.TankSpeed;
        this.rotation = 135;
      }
      else if ((this._moveRight) && (this._moveUp)) {
        this.x += this.TankSpeed;
        this.y -= this.TankSpeed;
        this.rotation = 45;
      }
      else if (this._moveLeft) {
        this.x -= this.TankSpeed;
        this.rotation = -90;
      }
      else if (this._moveRight) {
        this.x += this.TankSpeed;
        this.rotation = 90;
      }
      else if (this._moveUp) {
        this.y -= this.TankSpeed;
        this.rotation = 0;
      }
      else if (this._moveDown) {
        this.y += this.TankSpeed;
        this.rotation = 180;
      }
      else if (this._startFire) {

        if (this.Bullet.x == 10000) {
          createjs.Sound.play("fire");
          this.fire();
        }
      }
    }

    // public methods

    public Update(): void {

      this.move();
      this.checkBounds();

      if (this.Bullet != null)
      {
        if (this.Bullet.x != 10000) {
          this.Bullet.Update();
        }
      }
    }

  }
}
