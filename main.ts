basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.clearScreen()
        basic.pause(100)
    }
})
