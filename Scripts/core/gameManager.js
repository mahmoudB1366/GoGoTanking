var Core;
(function (Core) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
        }
        // Tanks Properties
        GameManager.H_tank_speed = 1.5;
        GameManager.H_bullet_range = 1.5;
        GameManager.H_bullet_speed = 1.5;
        GameManager.H_bullet_power = 1.5;
        GameManager.M_tank_speed = 1.5;
        GameManager.M_bullet_range = 1.5;
        GameManager.M_bullet_speed = 1.5;
        GameManager.M_bullet_power = 1.5;
        GameManager.L_tank_speed = 1.5;
        GameManager.L_bullet_range = 1.5;
        GameManager.L_bullet_speed = 1.5;
        GameManager.L_bullet_power = 1.5;
        //Controllers
        GameManager.P1_LEFT = 'a';
        GameManager.P1_RIGHT = 'd';
        GameManager.P1_UP = 'w';
        GameManager.P1_DOWN = 's';
        return GameManager;
    }());
    Core.GameManager = GameManager;
})(Core || (Core = {}));
//# sourceMappingURL=gameManager.js.map