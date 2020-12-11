function Gravity(){
    
    for(var i = 0; i<(planet.length-1); i++){
       //console.log("START I-Løkke: ");
       //console.log("I= " + i);
       
        for(var j = 1; j<(planet.length-i); j++){
                    //console.log("START J-løkke: ");
                    //console.log("J= " + j);
                    var d = Math.sqrt(( planet[i+j].x[0] - planet[i].x[0] ) * ( planet[i+j].x[0] - planet[i].x[0] ) + ( planet[i+j].y[0] - planet[i].y[0] ) * ( planet[i+j].y[0] - planet[i].y[0] )); //var d = sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
                    var a1 = Math.acos(Math.abs(planet[i+j].x[0] - planet[i].x[0] )/d);  //var a1 = acos(sqrt((x2-x1)*(x2-x1))/d);
                    var force = gamma*(planet[i].mass*planet[i+j].mass)/(d*d);
                    //console.log("x-pos_planet[i+j]: " + planet[i+j].x[0]);
                    //console.log("x-pos_planet[i]: " + planet[i].x[0]);
                    //console.log("avstand: " + d);
                if(planet[i+j].x[0]-planet[i].x[0]>0){         //console.log("x-pos_planet[i+j] > x-pos_planet[i]");                     //if(x2-x1>0)
                    planet[i].x[2] = (force *Math.cos(a1))/planet[i].mass;              //x1_a = (force * cos(a1))/m1;
                    planet[i+j].x[2] = -1*(force *Math.cos(a1))/planet[i+j].mass;       //x2_a = -1*(force * cos(a1))/m2;
                }else if(planet[i].x[0]-planet[i+j].x[0] >0){  //console.log("x-pos_planet[i+j] < x-pos_planet[i]");                     //}else if(x1-x2 >0)
                    planet[i].x[2] = -1*(force *Math.cos(a1))/planet[i].mass;           //x1_a = -1*(force * cos(a1))/m1;
                    planet[i+j].x[2] = (force *Math.cos(a1))/planet[i+j].mass;          //x2_a = (force * cos(a1))/m2;
                }
                if(planet[i+j].y[0]-planet[i].y[0]>0){         //console.log("y-pos_planet[i+j] > y-pos_planet[i]");                      //if(y2-y1>0){
                    planet[i].y[2] = (force * Math.sin(a1))/planet[i].mass;               //y1_a = (force * sin(a1))/m1;
                    planet[i+j].y[2] = -1*(force * Math.sin(a1))/planet[i+j].mass;        //y2_a = -1*(force * sin(a1))/m2;
                }else if(planet[i].y[0]-planet[i+j].y[0] >0){   //console.log("y-pos_planet[i+j] < y-pos_planet[i]");                     //}else if(y1-y2>0){
                    planet[i].y[2] = -1*(force * Math.sin(a1))/planet[i].mass;            //y1_a = -1*(force * sin(a1))/m1;
                    planet[i+j].y[2] = (force * Math.sin(a1))/planet[i+j].mass;           //y2_a = (force * sin(a1))/m2;
                }
                //console.log("a1: " + a1);
                //console.log("force: " + force);
                //console.log("i: " + i + "og j: " + j); 
                //console.log("SLUTT J-Løkke:");
                //console.log(""); console.log("");
            }
            //console.log("SLUTT I-Løkke: ");
        }
       
   

}
function gravity(){
    Gravity();
    
}
function posVelAcc(){
    for(var i=0; i<planet.length; i++){
        planet[i].x[1] += planet[i].x[2];                                           //x1_v += x1_a; 
        planet[i].y[1] += planet[i].y[2];                                           //y1_v += y1_a; 
        planet[i].x[0] += planet[i].x[1];                                           //x1 += x1_v; 
        planet[i].y[0] += planet[i].y[1];                                           //y1 += y1_v;
        }
}
function drawPlanetName(i){
    for(var i =0; i<planet.length; i++){
        ctx.fillStyle = "red";
        ctx.fillText(i,planet[i].x[0] ,planet[i].y[0]);
    }
   
}


  