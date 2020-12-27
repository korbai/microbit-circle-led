let index = 0
let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setBrightness(3)
let index2 = 0
index2 = 355
basic.forever(function () {
    strip.clear()
    index += 15
    index2 += 15
    strip.showRainbow(index, index2)
})
