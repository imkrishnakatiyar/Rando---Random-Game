let n ;
let s = Math.floor((Math.random()*100)%10);
let sco = 0 ; 
let lvl = 1 ;
let wng = 5 ;
let rand = Math.random();
let rando = rand ; 
rando = rando*10;
         let a = (Math.floor(rando)%10);
            let att = 24 ;
            
            let re = 0 ;
             let wrg = 0 ;  
let lim = 16 ;             

function one()
{
    document.getElementById("lvl").innerHTML = "level"+" "+lvl ;
    n= 1 ;
    if(a<=s)
    {
        re = 1;
    }
    if(a>s)
    {
        re=2;
    }
    if(n==re)
    {
       sco=sco+1;
       document.getElementById("score").innerHTML ="score"+ "=" +sco ;
       rando = rando*10;
               a = (Math.floor(rando)%10);
    att=att-1 ;
    document.getElementById("attempt").innerHTML= "Attempts left =" + att ;
     document.getElementById("wng").innerHTML= "wrong =" + wrg+"/"+wng ;
    
    if(sco==lim)
           {
               
               if(lvl==7)
               {
  alert("You won !");
               }
               else{
             lvl++;
             s=s+1 ;
             sco = 0 ;
             att = 24 ;
               att = att+8 ;
               lim = lim + 8;
               wrg = 0 ;
               wng++;
                 a=a*a;
               }
           }
    if(att<=0)
       
        {
           
           document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
        }
        
          
    
    }
    if(n!=re) {
       wrg =wrg +1 ;
       att=att-1 ;
    
       document.getElementById("score").innerHTML = "score" + "=" + sco ;
       document.getElementById("attempt").innerHTML= "Attempts left =" + att ;
     document.getElementById("wng").innerHTML= "wrong =" + wrg+"/"+wng ;
      if(wrg==wng)
      {
         sco = 0 ;
         att = 0 ;
         
      }
      
       if((sco==lim)&&(att>0))
       {
           
          
           lvl++;
           s=s+1 ;
           sco = 0 ;
           att = 24 ;
           att = att+8  ;
           lim = lim +8 ;
           wrg = 0 ;
           wng++;
         a=a*a;
           }
        }
      if(att<=0)
       
       {
          sco = 0 ; 
          document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
           if(sco!=lim)
        {
            alert("you lost");
        }   
       
       
       }
       
}




function two()
{
    document.getElementById("lvl").innerHTML ="level"+" "+lvl ;
    n = 2 ;

    if(a<=s)
    {
        re = 1;
    }
    if(a>s)
    {
        re=2;
    }
if(n==re)
{
    sco=sco+1;
    document.getElementById("score").innerHTML ="score" +"=" + sco ;
    rando = rando*10;
            a = (Math.floor(rando)%10);
att=att-1 ;
document.getElementById("attempt").innerHTML= "Attempts left = " +att ;
 document.getElementById("wng").innerHTML= "wrong =" + wrg+"/"+wng ;
if(sco==lim)
        {
            
            
            
            lvl++ ;
            s=s+1 ;
            sco = 0 ;
            att = 24 ;
            att = att + 8 ;
            lim = lim + 8;
          a=a*a;
            wrg = 0 ;
            wng++ ;
            }
        }
if(att<=0)
    
     {
        
        document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
        if(sco!=lim)
        {
            alert("you lost");
        }
      
     }
    


    
    
if(n!=re) {
  wrg=wrg+1 ;
    att =att-1 ;
   
    document.getElementById("score").innerHTML = "score" + "=" + sco ;
    document.getElementById("attempt").innerHTML= "Attempts left =" + att ;
  document.getElementById("wng").innerHTML= "wrong =" + wrg+"/"+wng ;
    if(wrg==wng)
    {
      alert("you lost");
       sco = 0 ;
       att = 0 ;
      
    }

        if(sco==lim)
        {
            
           

            
            lvl++;
            s=s+1 ;
            s = 0 ;
            att = 24;
            att = att + 8 ;
            lim = lim + 8;
            wrg = 0;
            wng++ ;
            }

        
    if(att<=0)
    
     {
        
        document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
     
        if(sco!=lim)
        {
            alert("you lost");
        }
     }
}
    
    

    }
