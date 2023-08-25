input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    while (true) {
        if (Brainco.get_Attention_Value(Brainco.value_level.high)) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                # . . . .
                # # # # #
                `)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        } else {
            wuKong.stopAllMotor()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    FLAG = 0
    wuKong.stopAllMotor()
})
let FLAG = 0
FLAG = 0
