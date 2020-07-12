
var min=0;
var sec= 0;
var mili=0;
var intrval;


var visibleminutes=0;
var visibleseconds=0;
var visiblemilisecnds=0;



var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var miliheading=document.getElementById("mili");


function watch(){
   

    mili ++;
    if(mili< 10){
              visiblemilisecnds="0" + mili.toString();
        }
          else{
               visiblemilisecnds=mili;
          
          miliheading.innerHTML=visiblemilisecnds;
          }

     if(mili>=100){
       
         sec++;
     
     if(sec < 1){
            visibleseconds="0" + sec.toString; 
    
        }
        
          else {
                  visibleseconds=sec;

              secheading.innerHTML=visibleseconds + ":";
             mili=0;
                 
     }
    }
                
         if(sec>=60){
          
            min++;
            if(min<1){
                      visibleminutes="0" + min.toString();
                  }
                  else{
                      visibleminutes=min;
              
             minheading.innerHTML= visibleminutes + ":";
             sec=0;
                   }
    }
     

    }


    // Buttons

    function start(){
        intrval=setInterval(watch,10)
      
    }


function stop(){
    clearInterval(intrval)
}


function reset(){
    mili=0;
    sec=0;
    min=0;
    minheading.innerHTML= "0"+min + ":";
    secheading.innerHTML= "0"+sec + ":";
    miliheading.innerHTML="0"+mili ;

    stop()
}
