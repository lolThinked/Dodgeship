function findShipNumber(){
        for(var i=0; i<planet.length; i++){
        if(planet[i].body === "ship"){
            
            shipNumber = i;
           
            return i;
            
        }
    }
}
findShipNumber();


//Piltaster og fartsvariabler
document.onkeydown = checkKey;
document.onkeyup = checkKey1;
//Piltaster
    function checkKey(e) {

        e = e || window.event;

     if (e.keyCode == '38') {
            up();
            // up arrow
        }
        else if (e.keyCode == '40') {
           down();
           // down arrow
        }
        else if (e.keyCode == '37') {
           left();
           // left arrow
        }
        else if (e.keyCode == '39') {
           right();
           // right arrow
        }
        
    }
//Piltaster slipp
    function checkKey1(e) {

        e = e || window.event;

     
        if (e.keyCode == '38') {
            
            // up arrow
            if(lodd !== 0){
                lodd=0;
            }
        }if (e.keyCode == '40') {
            
            // up arrow
            if(lodd !==0){
                lodd=0;
            }
        }
        
        else if (e.keyCode == '39') {
          if(vann!==0){
            vann=0;
           }
        }else if (e.keyCode == '37') {
           
           // left arrow
           if(vann !== 0){
            vann=0;
           }
        }
        
    }
//fartsvariabler og funksjoner
    
    
    function right(){
        vann = 1*fart;
    }
    function left(){
        vann = -1*fart;
    }
    function up(){
        lodd = -1*fart;
    }
    function down(){
        lodd = 1*fart;
    }
function addControlsA(i){
    planet[i].x[2] += vann;
    planet[i].y[2] += lodd;
    var fart = 1/100;
    
}
function addControlsV(i){
    planet[i].x[1] += vann;
    planet[i].y[1] += lodd;
    fart = 0.1;
    
}
function addControlsP(i){

    planet[i].x[0] += vann;
    planet[i].y[0] += lodd;
    fart =10;
}

  