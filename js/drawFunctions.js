function translateSetup(){
    ctx.translate(canvas.width/2, canvas.height/2);
}
function rise(){
  var   x = 0;
  var   y = -velocityMap; 
    translate(x,y);
    clearHeight +=velocityMap;
}
function translate(x,y){
    ctx.translate(x, y);
}

function drawPlanet() {
    for(var i = 0; i<planet.length; i++){
        if(planet[i].body === "planet"){
            ctx.beginPath();
            ctx.arc(planet[i].x[0], planet[i].y[0], planet[i].mass, 0, Math.PI*2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.closePath();
        }else if(planet[i].body ==="svart"){
            ctx.beginPath();
            ctx.arc(planet[i].x[0], planet[i].y[0], (planet[i].mass/50), 0, Math.PI*2);
            ctx.fillStyle = "#000000";
            ctx.fill();
            ctx.closePath();
        }else if(planet[i].body ==="sun"){
            ctx.beginPath();
            ctx.arc(planet[i].x[0], planet[i].y[0], (planet[i].mass/25), 0, Math.PI*2);
            ctx.fillStyle = "#ffe100";
            ctx.fill();
            ctx.closePath();
        }else if(planet[i].body ==="ship"){
            drawShip(i);
        }
        
    }
}
function drawShip(i){
    
    var shipImage= document.querySelector("#shipImg");
    //console.log(planet[i].x[0]);
    //console.log(planet[i].y[0]);
    //console.log(-1/2*shipImage.width+(planet[i].x[0]));
    ctx.drawImage(shipImage, (-1/2*shipImage.width) + (planet[i].x[0]) ,(-1/2*shipImage.height) + (planet[i].y[0]));
    
}

function clear(){
    ctx.clearRect(-1/2*(canvas.width)+clearWidth, -1/2*(canvas.height)+clearHeight, canvas.width, canvas.height);
}

function drawAcceleration(){
    for(var i =0; i<planet.length; i++){
        ctx.beginPath();
        ctx.moveTo(planet[i].x[0], planet[i].y[0]);
        ctx.lineTo((planet[i].x[0]+(planet[i].x[2] * 1000)), (planet[i].y[0]+(planet[i].y[2] * 1000)));
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#228B22';
        ctx.stroke();
    }
}

function draw0(){
        ctx.beginPath();
        ctx.moveTo(-10,0);
        ctx.lineTo(10,0);
        ctx.moveTo(0,-10);
        ctx.lineTo(0,10);
        ctx.moveTo(-10,canvas.height/2);
        ctx.lineTo(10,canvas.height/2);
        ctx.moveTo(-10,-canvas.height/2);
        ctx.lineTo(10,-canvas.height/2);
        ctx.moveTo(-canvas.height/2,-10);
        ctx.lineTo(-canvas.height/2,10);
        ctx.moveTo(canvas.height/2,-10);
        ctx.lineTo(canvas.height/2,10);

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
}