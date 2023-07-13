input.onButtonPressed(Button.A, function () {
    opción += 1
    if (opción == Opciones.length) {
        opción = 0
    }
    basic.showString("" + (Opciones[opción]))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(opción)
    basic.showString("" + (Opciones[opción]))
    basic.pause(2000)
    basic.showString("A para elegir")
})
let opción = 0
let Opciones: string[] = []
radio.setGroup(3)
radio.setTransmitPower(7)
Opciones = ["1", "2"]
basic.showString("A para elegir")
opción = -1
