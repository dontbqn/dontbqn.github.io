//Petite animation de la Toyota Trueno AE86 V12 extrait de la série Inital D 

trueno.onclick = function() {
  let start = Date.now(); // returns the number of milliseconds since January 1, 1970

  let timer = setInterval(function() {
    let timePassed = Date.now() - start; // pointeur de temps
    trueno.style.left = timePassed / 5 + 'px';

    if (timePassed > 6000){
        document.getElementById("trueno").classList.add("visually-hidden");
        clearInterval(timer); // stop au bout de 6 secondes
    }
  }, 10); // vitesse de 10ms
}