import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Ball from "./Ball/Ball.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Sprite1: new Sprite1({
    x: 31,
    y: -62,
    direction: 101.53695903281549,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 12,
    visible: true,
    layerOrder: 2,
  }),
  Ball: new Ball({
    x: 10,
    y: -169,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20.869565217391305,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
