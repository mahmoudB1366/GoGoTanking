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
var Levels;
(function (Levels) {
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        // private instance variables
        // public properties
        // Constructor
        function GameOver() {
            var _this = _super.call(this, Core.GameManager.assetManager.getResult("gameover")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        GameOver.prototype.Start = function () {
        };
        // updates the game object every frame
        GameOver.prototype.Update = function () {
        };
        return GameOver;
    }(createjs.Bitmap));
    Levels.GameOver = GameOver;
})(Levels || (Levels = {}));
//# sourceMappingURL=gameover.js.map