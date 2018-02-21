module Core {
    export class GameManager {
      public static stage: createjs.Stage;
      public static assetManager: createjs.LoadQueue;
      public static currentScene: number;
      public static KeyboardEvent: KeyboardEvent;

// Tanks Properties
      public static H_tank_speed = 1.5;
      public static H_bullet_range = 1.5;
      public static H_bullet_speed = 1.5;
      public static H_bullet_power = 1.5;

      public static M_tank_speed = 1.5;
      public static M_bullet_range = 1.5;
      public static M_bullet_speed = 3;
      public static M_bullet_power = 1.5;

      public static L_tank_speed = 1.5;
      public static L_bullet_range = 1.5;
      public static L_bullet_speed = 1.5;
      public static L_bullet_power = 1.5;

      //Controllers
      public static P1_LEFT = 'a';
      public static P1_RIGHT = 'd';
      public static P1_UP = 'w';
      public static P1_DOWN = 's';
      public static P1_FIRE = 'm';
    }
  }