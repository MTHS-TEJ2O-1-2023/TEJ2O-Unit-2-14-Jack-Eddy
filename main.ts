/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Nov 2023
 * This program moves a pixel down when button A is pressed, and moves a pixel up diagonaly when butten B is pressed
*/

// variables
let sprite: game.LedSprite = null
let pixelLocation = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// pixels move down in a diagonal
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  pixelLocation = 0
  sprite = game.createSprite(0, 0)

  // start loop
  while (pixelLocation <= 5) {
    sprite.set(LedSpriteProperty.X, pixelLocation)
    sprite.set(LedSpriteProperty.Y, pixelLocation)
    pixelLocation = pixelLocation + 1
    basic.pause(500)
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// pixels move up in a diagonal
input.onButtonPressed(Button.B, function () {
  // setup
  basic.clearScreen()
  pixelLocation = 5
  sprite = game.createSprite(0, 0)

  // start loop
  while (pixelLocation >= 0) {
    sprite.set(LedSpriteProperty.X, pixelLocation)
    sprite.set(LedSpriteProperty.Y, pixelLocation)
    pixelLocation = pixelLocation - 1
    basic.pause(500)
  }

  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
