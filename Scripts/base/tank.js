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
var base;
(function (base) {
    var Tank = /** @class */ (function (_super) {
        __extends(Tank, _super);
        // constructors
        function Tank(imageString) {
            var _this = _super.call(this, Core.GameManager.assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // private methods
        Tank.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.HalfWidth = this.Width * 0.5;
            this.HalfHeight = this.Height * 0.5;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Start();
        };
        // public methods
        Tank.prototype.Start = function () {
        };
        Tank.prototype.Update = function () {
            this._keyboardEvent = Core.GameManager.KeyboardEvent;
            this.Move();
        };
        Tank.prototype.Reset = function () {
        };
        Tank.prototype.CheckBounds = function () {
        };
        Tank.prototype.Move = function () {
            if (this._keyboardEvent != null) {
                switch (this._keyboardEvent.key) {
                    case this._left:
                        this.x -= this._tankSpeed;
                        this.rotation = -90;
                        break;
                    case this._right:
                        this.x += this._tankSpeed;
                        this.rotation = +90;
                        break;
                    case this._down:
                        this.y += this._tankSpeed;
                        this.rotation = 180;
                        break;
                    case this._up:
                        this.y -= this._tankSpeed;
                        this.rotation = 0;
                        break;
                }
                Core.GameManager.KeyboardEvent = null;
            }
        };
        return Tank;
    }(createjs.Bitmap));
    base.Tank = Tank;
})(base || (base = {}));
//# sourceMappingURL=tank.js.map