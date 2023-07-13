input.onButtonPressed(Button.A, function () {
    opción += 1
    if (opción == Opciones.length) {
        opción = 0
    }
    basic.showString("" + (Opciones[opción]))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(opción)
    basic.showNumber(opción)
    basic.showString("" + (Opciones[opción]))
    basic.pause(5000)
    basic.showString("A para elegir")
})
let opción = 0
let Opciones: string[] = []
radio.setGroup(3)
radio.setTransmitPower(7)
Opciones = ["Para Elisa", "Feliz Cumpleaños"]
basic.showString("A para elegir")
opción = -1
