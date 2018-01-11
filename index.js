const five = require("johnny-five");
const arduino = new five.Board({
    port: "COM4"
});


function callback() {
    //chamada pra executar alguma ação
    const led = new five.Led(13);
    led.blink(500);
}

arduino.on("ready", callback);
