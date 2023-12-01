var s=0;
var m=40;
var h=12;
var time="PM";


var print=document.getElementById("time");
setInterval(()=>{
    s+=1;
     if(s > 59){
         s=0;
         m+=1;
         if(m > 59){
             m=0;
             h+=1;
             if(h>12)
             {
                 h=1;
             }
             
         }
     }
     print.innerHTML=(h+':'+m+':'+s);
 
 },1000);
