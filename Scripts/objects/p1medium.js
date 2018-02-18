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
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        P1Medium.prototype.Start = function () {
            this.y = 430;
            this.x = 200;
        };
        // updates the game object every frame
        P1Medium.prototype.Update = function () {
            this.Move();
            //this.CheckBounds();
        };
        // reset the objects location to some value
        P1Medium.prototype.Reset = function () {
        };
        // move the object to some new location
        P1Medium.prototype.Move = function () {
            this.x = Core.GameManager.stage.mouseX;
        };
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