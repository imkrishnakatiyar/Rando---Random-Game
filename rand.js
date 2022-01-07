let n ;
let s = 5;
let sco = 0 ; 

rand = Math.random();
rando = rand ; 
rando = rando*10;
            a = (Math.floor(rando)%10);
            let att = 24 ;
            let re = 0 ;
             let wrg = 0 ;         
function one()
{
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
  document.getElementById("wng").innerHTML= "wrong =" + wrg+"/3" ;
if((sco==16)&&(att>0))
        {
            alert("Yeahh ! you won reload the page  to start again");
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
  document.getElementById("wng").innerHTML= "wrong =" + wrg+"/3" ;
   if(wrg==3)
   {
      sco = 0 ;
      att = 0 ;
      alert("Ohh you lost  reload the page  to start again") 
   }
    if(att<=0)
    
    {
       sco = 0 ; 
       document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
      
    
    if((sco==16)&&(att>0))
    {
        alert("Yeahh ! you won  reload the page  to start again ");
    }
    if(sco!=16)
    {
        alert("Sorry you Lost  reload the page  to start again");
    }
    }
}

}

function two()
{
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
 document.getElementById("wng").innerHTML= "wrong =" + wrg+"/3" ;
if((sco==16)&&(att>0))
        {
            
            alert("Yeahh ! you won   reload the page  to start again");
        }
if(att<=0)
    
     {
        
        document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
      
     }
    

}
    
    
if(n!=re) {
  wrg=wrg+1 ;
    att =att-1 ;
   
    document.getElementById("score").innerHTML = "score" + "=" + sco ;
    document.getElementById("attempt").innerHTML= "Attempts left =" + att ;
  document.getElementById("wng").innerHTML= "wrong =" + wrg+"/3" ;
    if(wrg==3)
    {
       sco = 0 ;
       att = 0 ;
       alert("Ohh you lost  reload the page  to start again") 
    }
if(att<=0)
    
     {
        
        document.getElementById("attempt").innerHTML= "OOPS you are out of attempts  reload the page  to start again" ;
        if((sco==16)&&(att>0))
        {
            alert("Yeahh ! you won reload the page  to start again ");
        }
        if(sco!=16)
        {
            alert("Sorry you Lost  reload the page  to start again");
        }
     }
    


 
}

}
