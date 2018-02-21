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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        //private _island: objects.Island;
        //private _clouds: objects.Cloud[];
        // private _cloudNum: number;
        // Public Properties
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        PlayScene.prototype.Start = function () {
            this._background = new Levels.Level1();
            this._player1 = new objects.P1Medium();
            this._player2 = new objects.P2Heavy();
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this._background.Update();
            if (this._player1 != null) {
                this._player1.Update();
                if (Core.GameManager.P1Health == 0) {
                    this.removeChild(this._player1);
                    this._player1 = null;
                }
            }
            if (this._player2 != null) {
                this._player2.Update();
                if (Core.GameManager.P2Health == 0) {
                    this.removeChild(this._player2);
                    this._player2 = null;
                }
            }
            //this._island.Update();
            //this._clouds.forEach(cloud => {
            // cloud.Update();
            //});
        };
        // This is where the fun happens
        PlayScene.prototype.Main = function () {
            // add the background to the scene
            this.addChild(this._background);
            // add the Players to the scene
            this.addChild(this._player1);
            this.addChild(this._player2);
            Core.GameManager.playScene = this;
        };
        return PlayScene;
    }(base.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map