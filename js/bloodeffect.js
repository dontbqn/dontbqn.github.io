//Blood Effect on link clicked
//https://xyezawr.itch.io/gif-free-pixel-effects-pack-5-blood-effects
//author : https://twitter.com/XYEzawr

yeswhack.onclick = function() {
    link = document.getElementById('yeswhack');
    let start = Date.now(); // returns the number of milliseconds since January 1, 1970

    let timer = setInterval(function() {
    let timePassed = Date.now() - start; // pointeur de temps
    link.innerHTML = "<img src='img/7o5Opw.gif';>";
    
    if (timePassed > 1000){
        link.innerHTML = "<a target='_blank' class='link-danger' href='https://www.yeswehack.com/fr/' id='yeswhack'>YesWeHack</a>  ";
        clearInterval(timer); // stop au bout de 6 secondes
    }
    }, 10); // vitesse de 10ms
  }

