// sert a écrire en machine a écrire ///////////////////////////
function typewriter() {
    var myText = "DÉVELOPPEUR WEB JUNIOR";
  
    var myArray = myText.split("");
  
    var timeLooper;
  
  
    
    function loop(){
      if (myArray.length > 0){
        document.getElementById("title-work").innerHTML += myArray.shift();
      }
      else {
        clearTimeout(timeLooper);
      }
      setTimeout(loop, 200);
      
    }
    loop();
  }
  setTimeout(typewriter, 1500);
  
  
  // sert au clignotement de la bar ///////////////////
  var signe = -1; 
  
  var clignotementFading = function(){ 
  
     var obj = document.getElementById('strong-title'); 
  
     if (obj.style.opacity >= 1){ 
        signe = -1; 
     } 
     if (obj.style.opacity <= 0.02){ 
        signe = 1; 
     } 
     obj.style.opacity = (obj.style.opacity * 1) + (signe * 0.04); 
  }; 
  // mise en place de l appel de la fonction toutes les 0.085 secondes 
  // Pour arrêter le clignotement : clearInterval(periode); 
  periode = setInterval(clignotementFading, 25 ); 
  
  
  var scroll = window.requestAnimationFrame ||
               // IE Fallback
               function(callback){ window.setTimeout(callback, 1000/60)};
  var elementsToShow = document.querySelectorAll('.container-mini-icon'); 
  
  function loop() {
  
      Array.prototype.forEach.call(elementsToShow, function(element){
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });
  
      scroll(loop);
  }
  