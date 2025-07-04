/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 }),
    ];

    this.sounds = [
      new Sound("Boing", "./Ball/sounds/Boing.wav"),
      new Sound("Pop", "./Ball/sounds/Pop.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 10;
    this.goto(10, -169);
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.costume = "Screenshot 2025-03-05 at 7";
        this.stage.costume = "Spotlight";
        this.broadcast("message1");
        yield* this.sayAndWait("Hello!", 2);
        this.effects.color += 25;
        this.size += 10;
      }
      yield;
    }
  }
}
