/* document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  }); */
  
  detectOrientation() ;

  window.onorientationchange = function() { 
    let orientation = window.orientation; 
        switch(orientation) { 
            case 0:
            case 90:
            case -90: window.location.reload(); 
            break; } 
};

  function detectOrientation(){
      //Votre code ici
    if(window.innerHeight > window.innerWidth){
        document.getElementById('rotateScreen').style.display = 'block';
    }else{
        document.getElementById('displayContent').style.display = 'block';
        document.getElementById('rotateScreen').style.display = 'none';

    }
  }
  