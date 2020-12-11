
function start(){
    setup();

    setInterval(DRAW, 8.3); //120Hz
    //setInterval(DRAW, 16.6);//60Hz
    //DRAW();
}
start();

function setup(){
    translateSetup();
    drawPlanet();
}

