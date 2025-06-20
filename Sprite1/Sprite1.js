/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53,
      }),
    ];

    this.sounds = [
      new Sound("Meow", "./Sprite1/sounds/Meow.wav"),
      new Sound("A Bass", "./Sprite1/sounds/A Bass.wav"),
      new Sound("Cheer", "./Sprite1/sounds/Cheer.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "Screenshot 2025-03-05 at 7";
    this.goto(-8, 169);
    this.size = 12;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 3;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.y -= 3;
        }
      }
      if (this.keyPressed("down arrow")) {
        this.y -= 3;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.y += 3;
        }
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 3;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.x += 3;
        }
      }
      if (this.keyPressed("right arrow")) {
        this.x += 3;
        if (this.touching(Color.rgb(0, 0, 0))) {
          this.x -= 3;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("edge")) {
        this.goto(-8, 169);
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.goto(19, -56);
    yield* this.playSoundUntilDone("Cheer");
  }
}
