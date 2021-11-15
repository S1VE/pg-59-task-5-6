radio.setGroup(1)
if (input.temperature() >= 35) {
    basic.showString("too hot")
} else if (input.temperature() <= 35) {
    basic.showString("mild")
} else if (input.temperature() <= 15) {
    basic.showString("too cold")
}
basic.forever(function () {
    basic.showNumber(input.temperature())
    radio.sendNumber(input.temperature())
})
