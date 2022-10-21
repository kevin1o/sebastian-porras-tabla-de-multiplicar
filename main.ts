input.onButtonPressed(Button.A, function () {
    factor_1 = randint(0, 9)
    factor_1 = randint(0, 9)
    basic.showNumber(factor_1)
    basic.pause(500)
    basic.showString("x")
    basic.showNumber(factor_2)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(factor_1 * factor_2)
    basic.pause(500)
    basic.clearScreen()
})
let factor_2 = 0
let factor_1 = 0
basic.showString("tabla de multiplicar")
basic.clearScreen()
