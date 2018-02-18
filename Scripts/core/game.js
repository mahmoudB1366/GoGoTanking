/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManifest;
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "island", src: "./Assets/images/island.png" },
        { id: "cloud", src: "./Assets/images/cloud.png" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        core.GameManager.assetManager = new createjs.LoadQueue(); // creates the assetManager object
        core.GameManager.assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        core.GameManager.assetManager.loadManifest(assetManifest);
        core.GameManager.assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        core.GameManager.stage = stage;
        core.GameManager.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != core.GameManager.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
        stage.removeAllChildren();
        switch (core.GameManager.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene();
                break;
        }
        currentState = core.GameManager.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map