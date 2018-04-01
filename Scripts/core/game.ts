/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: base.Label;
  let clickMeButton: base.Button;
  let assetManifest: any[];
  let currentScene: base.Scene;
  let currentState: number;
  let keyBoardManager: managers.KeyboardManager;
  let textureAtlasData: any;
  let textureAtlas: createjs.SpriteSheet;

  textureAtlasData = {

    "images": [
        
        "./Assets/sprites/atlas.png"
    ],

    "frames": [
      [218, 300, 9, 9, 0, 0, 0],	//bullet
      [2, 2, 49, 50, 0, 0, 0],	//grass
      [2, 300, 25, 25, 0, 0, 0],	//health (1)
      [29, 300, 25, 25, 0, 0, 0],	//health (2)
      [53, 2, 50, 50, 0, 0, 0],	//house
      [56, 300, 25, 25, 0, 0, 0],	//mine (1)
      [83, 300, 25, 25, 0, 0, 0],	//mine (2)
      [2, 157, 48, 47, 0, 0, 0],	//p1heavy (1)
      [52, 157, 48, 47, 0, 0, 0],	//p1heavy (2)
      [102, 157, 48, 47, 0, 0, 0],	//p1heavy (3)
      [152, 157, 48, 47, 0, 0, 0],	//p1heavy (4)
      [86, 255, 40, 42, 0, 0, 0],	//p1light (1)
      [194, 206, 40, 43, 0, 0, 0],	//p1light (2)
      [152, 206, 40, 44, 0, 0, 0],	//p1light (3)
      [2, 255, 40, 43, 0, 0, 0],	//p1light (4)
      [40, 106, 36, 48, 0, 0, 0],	//p1medium (1)
      [158, 54, 36, 49, 0, 0, 0],	//p1medium (2)
      [105, 2, 36, 50, 0, 0, 0],	//p1medium (3)
      [196, 54, 36, 49, 0, 0, 0],	//p1medium (4)
      [202, 157, 48, 47, 0, 0, 0],	//p2heavy (1)
      [2, 206, 48, 47, 0, 0, 0],	//p2heavy (2)
      [52, 206, 48, 47, 0, 0, 0],	//p2heavy (3)
      [102, 206, 48, 47, 0, 0, 0],	//p2heavy (4)
      [212, 255, 40, 41, 0, 0, 0],	//p2light (1)
      [128, 255, 40, 42, 0, 0, 0],	//p2light (2)
      [44, 255, 40, 43, 0, 0, 0],	//p2light (3)
      [170, 255, 40, 42, 0, 0, 0],	//p2light (4)
      [78, 106, 36, 48, 0, 0, 0],	//p2medium (1)
      [116, 106, 36, 48, 0, 0, 0],	//p2medium (2)
      [2, 106, 36, 49, 0, 0, 0],	//p2medium (3)
      [154, 106, 36, 48, 0, 0, 0],	//p2medium (4)
      [110, 300, 25, 25, 0, 0, 0],	//range (1)
      [191, 300, 25, 24, 0, 0, 0],	//range (2)
      [143, 2, 50, 50, 0, 0, 0],	//sea
      [137, 300, 25, 25, 0, 0, 0],	//star (1)
      [164, 300, 25, 25, 0, 0, 0],	//star (2)
      [195, 2, 50, 50, 0, 0, 0],	//stone
      [192, 106, 50, 48, 0, 0, 0],	//tree
      [2, 54, 50, 50, 0, 0, 0],	//wood
      [54, 54, 50, 50, 0, 0, 0],	//wood2
      [106, 54, 50, 50, 0, 0, 0],	//wood3
      ],
      "animations": {
         "bullet": {
            "frames": [0] 
         },
         "grass": {
            "frames": [1] 
         },
         "health": {
            "frames": [2 , 3] 
            , "speed": 0.03
         },
         "house": {
            "frames": [4] 
         },
         "mine": {
            "frames": [5 , 6] 
            , "speed": 0.03
         },
         "p1heavy": {
            "frames": [7 , 8, 9, 10]
            , "speed": 0.2  
         },
         "p1light": {
            "frames": [11,12,13,14]
            , "speed": 0.2  
         },
         "p1medium": {
            "frames": [15, 16, 17, 18] 
            , "speed": 0.2  
         },
         "p2heavy": {
            "frames": [19,20,21,22]
            , "speed": 0.2  
         },
         "p2light": {
            "frames": [23,24,25,26] 
            , "speed": 0.2  
         },
         "p2medium": {
            "frames": [27,28,29,30] 
            , "speed": 0.2  
         },
         "range": {
            "frames": [31,32] 
            , "speed": 0.03
         },
         "sea": {
            "frames": [33] 
         },
         "star": {
            "frames": [34,35] 
            , "speed": 0.03
         },
         "stone": {
            "frames": [36] 
         },
         "tree": {
            "frames": [37] 
         },
         "wood": {
            "frames": [38] 
            
         },
         "wood2": {
          "frames": [39] 
       },
       "wood3": {
        "frames": [40] 
     }
      }

    };

  assetManifest = [
    //Buttons
    {id: "startButton", src:"./Assets/images/startButton.png"},
    {id: "backButton", src:"./Assets/images/backButton.png"},
    {id: "p1heavy", src:"./Assets/images/p1heavy.png"},
    {id: "p1medium", src:"./Assets/images/p1medium.png"},
    {id: "p1light", src:"./Assets/images/p1light.png"},
    {id: "p2heavy", src:"./Assets/images/p2heavy.png"},
    {id: "p2medium", src:"./Assets/images/p2medium.png"},
    {id: "p2light", src:"./Assets/images/p2light.png"},

    //Backgrounds
    {id: "bg1", src:"./Assets/images/bg1.png"},
    {id: "bg2", src:"./Assets/images/bg2.png"},
    {id: "bg3", src:"./Assets/images/bg3.png"},
    {id: "start", src:"./Assets/images/start.png"},
    {id: "gameOver", src:"./Assets/images/gameover.png"},

    //Sounds
    {id: "level1sd", src:"./Assets/audio/level1sd.mp3"},
    {id: "level2sd", src:"./Assets/audio/level2sd.mp3"},
    {id: "level3sd", src:"./Assets/audio/level3sd.mp3"},
    {id: "fire", src:"./Assets/audio/fire.mp3"},
    {id: "explosion", src:"./Assets/audio/explosion.mp3"},
    {id: "powerup", src:"./Assets/audio/powerup.wav"},
    {id: "starsd", src:"./Assets/audio/starsd.wav"},
    {id: "rangesd", src:"./Assets/audio/rangesd.wav"},
    {id: "explosion2", src:"./Assets/audio/explosion2.wav"},
    {id: "explosion3", src:"./Assets/audio/explosion3.wav"}
  ];

  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    Core.GameManager.assetManager = new createjs.LoadQueue(); // creates the assetManager object
    Core.GameManager.assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
    Core.GameManager.assetManager.loadManifest(assetManifest);
    Core.GameManager.assetManager.on("complete", Start, this);
  }

  function Start():void {
    console.log("Starting Application...");
    //textureAtlasData.images = [ assetManager.getResult("textureAtlas") ];
    textureAtlas = new createjs.SpriteSheet(textureAtlasData);
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);

    Core.GameManager.stage = stage;
    Core.GameManager.currentScene = config.Scene.START;
    currentState = config.Scene.START;

    keyBoardManager = new managers.KeyboardManager();
    Core.GameManager.keyboardManager = keyBoardManager;
    Core.GameManager.textureAtlas = textureAtlas;
    console.log("Listening to Keyboad...");
    Main();
  }

  function Update():void {
    // if the scene that is playing returns another current scene
    // then call Main again and switch the scene
    if(currentState!= Core.GameManager.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main():void {
    stage.removeAllChildren();

    switch(Core.GameManager.currentScene) {
      case config.Scene.START:
        currentScene = new scenes.StartScene();
      break;
      case config.Scene.LEVEL1:
        currentScene = new scenes.Level1Scene();
      break;
      case config.Scene.LEVEL2:
      currentScene = new scenes.Level2Scene();
    break;
    case config.Scene.LEVEL3:
    currentScene = new scenes.Level3Scene();
  break;
      case config.Scene.OVER:
        currentScene = new scenes.OverScene();
      break;
    }

    currentState = Core.GameManager.currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();
