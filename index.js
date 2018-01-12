//inclui biblioteca
const five = require("johnny-five");
//cria variavel board com instancia/implementacao da
//classe Board 
const arduino = new five.Board({
    port: "COM3"
});


function callback() {
    //chamada pra executar alguma ação
    const led = new five.Led(13);
    led.blink(500);
}

arduino.on("ready", callback);
