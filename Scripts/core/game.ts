/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManifest: any[];
  let currentScene: base.Scene;
  let currentState: number;

  assetManifest = [
    {id: "clickMeButton", src:"./Assets/images/clickMeButton.png"},
    {id: "startButton", src:"./Assets/images/startButton.png"},
    {id: "nextButton", src:"./Assets/images/nextButton.png"},
    {id: "backButton", src:"./Assets/images/backButton.png"},
    {id: "ocean", src:"./Assets/images/ocean.gif"},
    {id: "plane", src:"./Assets/images/plane.png"},
    {id: "island", src:"./Assets/images/island.png"},
    {id: "cloud", src:"./Assets/images/cloud.png"}
  ];

  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    core.GameManager.assetManager = new createjs.LoadQueue(); // creates the assetManager object
    core.GameManager.assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    core.GameManager.assetManager.loadManifest(assetManifest);
    core.GameManager.assetManager.on("complete", Start, this);
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);

    core.GameManager.stage = stage;
    core.GameManager.currentScene = config.Scene.START;
    currentState = config.Scene.START;
    Main();
  }

  function Update():void {
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if(currentState!= core.GameManager.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main():void {
    stage.removeAllChildren();

    switch(core.GameManager.currentScene) {
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
