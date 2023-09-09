input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    x += 1
    led.unplot(x - 1, y)
    if (x >= 5) {
        x = 0
        y += 1
    }
    if (y >= 5) {
        x = 0
        y = 0
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.clearScreen()
    x = 0
    y = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.plot(x, y)
    x += 1
    if (x >= 5) {
        x = 0
        y += 1
    }
    if (y >= 5) {
        x = 0
        y = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    basic.pause(200)
    led.toggle(x, y)
    basic.pause(50)
})
