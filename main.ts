type Color = {
    h: number; // hue
    s: number; // saturation
    l: number; // lightness
};

const blackcolor: Color = { h: 0, s: 0, l: 0 };
const colorArray: Array<Color> = [
    { h: 0, s: 100, l: 50 },
    { h: 120, s: 100, l: 50 },
    { h: 240, s: 100, l: 50 },
    { h: 60, s: 100, l: 50 },
    { h: 180, s: 100, l: 50 },
    { h: 300, s: 100, l: 50 },
    { h: 280, s: 70, l: 50 },
    { h: 35, s: 100, l: 50 },
    { h: 130, s: 50, l: 30 },
];

const hasColor = [1, 3, 5, 7, 9, 11, 13, 15, 17, 15, 13, 11, 9, 7, 5, 3, 1];
const stripLength = 17;
const strip = neopixel.create(DigitalPin.P1, stripLength, NeoPixelMode.RGB);

basic.forever(function () {
    // loop through the hasColor array
    for (let i = 0; i < hasColor.length; i++) {
        // retrieve the count from the hasColor array at index i
        const count = hasColor[i];
        const middle = 8;
        // retrieve a color from the colorArray
        const color = colorArray[i % colorArray.length];

        strip.clear();
        // loop to set the color of specific LEDs
        for (let j = 0; j < count; j++) {
            // set the color of the LED at the calculated position
            strip.setPixelColor(middle - Math.floor(count / 2) + j, neopixel.hsl(color.h, color.s, color.l));
        }

        strip.show();
        basic.pause(300);
    }
})
