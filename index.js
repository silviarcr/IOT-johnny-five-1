//inclui biblioteca
const five = require("johnny-five");
//cria variavel board com instancia/implementacao da
//classe Board 
const arduino = new five.Board({
    port: "COM3"
});


function callback() {
    //chamada pra executar alguma ação
    //const led = new five.Led(13);
    // led.blink(500);
    var led = new five.Led(8);
    var botao = new five.Button(2);
    var servo = new five.Servo({
        pin: 10,
        range: [10, 90],
        startAt: 19
    });


    var portaoAberto = false;

    botao.on("down", function () {
        if (!portaoAberto) {
            console.log("botao pressionado");
            servo.to(90, 3 * 1000);
            led.on();
            portaoAberto = true;
        }
        else {
            servo.to(19, 1 * 1000);
            led.off();
            portaoAberto = false;
        }
    });

    //     botao.on("up", function () {
    //     console.log("botao released");
    //     servo.to(19, 1 * 1000);
    //     led.off();
    //});


}

arduino.on("ready", callback);

