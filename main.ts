input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(currenttemperature)
    basic.clearScreen()
})
let min = 0
let max = 0
let currenttemperature = 0
currenttemperature = input.temperature()
max = currenttemperature
min = currenttemperature
basic.forever(function () {
    basic.showString(".")
    currenttemperature = input.temperature()
    if (currenttemperature < min) {
        min = currenttemperature
    }
    if (currenttemperature > max) {
        max = currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
