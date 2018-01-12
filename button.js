const five = require("johnny-five");
var board = new five.Board({
    port: "COM3"
});


board.on("ready", function () {
    var button = new five.Button(2);
    var led = new five.Led(13);
    var motor = new five.Servo(8);
    button.on("press", function() {
        led.on();
        motor.sweep();
        console.log("Button Pressed");
    });
    
    button.on("release", function() {
        led.off();
        // motor.to(90);
        console.log("Button Released");
    });
});


