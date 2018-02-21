var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var P1Medium = /** @class */ (function (_super) {
        __extends(P1Medium, _super);
        // private instance variables
        // public properties
        // Constructor
        function P1Medium() {
            var _this = _super.call(this, "p1medium") || this;
            _this.setTankProperties();
            _this.setController();
            _this.Start();
            return _this;
        }
        // private methods
        P1Medium.prototype.setTankProperties = function () {
            this._tankSpeed = Core.GameManager.M_tank_speed;
            this._bulletSpeed = Core.GameManager.M_bullet_speed;
            this._bulletRange = Core.GameManager.M_bullet_range;
            this._bulletPower = Core.GameManager.M_bullet_power;
            this._tankLife = 100;
        };
        P1Medium.prototype.setController = function () {
            this._left = Core.GameManager.P1_LEFT;
            this._right = Core.GameManager.P1_RIGHT;
            this._up = Core.GameManager.P1_UP;
            this._down = Core.GameManager.P1_DOWN;
        };
        // public methods
        // Initializes variables and creates new objects
        P1Medium.prototype.Start = function () {
            this.y = 430;
            this.x = 200;
        };
        // updates the game object every frame
        P1Medium.prototype.Update = function () {
            _super.prototype.Update.call(this);
            //this.Move();
            //this.CheckBounds();
        };
        // reset the objects location to some value
        P1Medium.prototype.Reset = function () {
        };
        // move the object to some new location
        // check to see if some boundary has been passed
        P1Medium.prototype.CheckBounds = function () {
            // right boundary
            if (this.x >= 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            // left boundary
            if (this.x <= this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        };
        return P1Medium;
    }(base.Tank));
    objects.P1Medium = P1Medium;
})(objects || (objects = {}));
//# sourceMappingURL=p1medium.js.map