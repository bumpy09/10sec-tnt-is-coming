let number = 0
edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    for (let index = 0; index <= 9; index++) {
        number = index + 1
        basic.showNumber(number)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.showIcon(IconNames.Butterfly)
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.showIcon(IconNames.Chessboard)
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    basic.clearScreen()
})
