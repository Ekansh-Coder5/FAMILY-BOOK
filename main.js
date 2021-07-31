var Reason = [
    "Ekansh",
    "Ashvi",
    "Papa",
    "Mama"
  ];
  
  var Image = [
    "Ekansh.jpg",
    "Ashi.jpg",
    "Papa.jpg",
    "Mama.jpg"
  ];
  var E = 0 ;
  function Next() {
    document.getElementById("Food").innerHTML = Reason[E];
    document.getElementById("Water2").src = Image[E];
  E++;
   if(E==4)
    {  
    E=0;
    } 
   
  }