
// Gestion d'apparitions et disparitions des différentes Timeline

var r = document.getElementById('myRange');
r.addEventListener('change', () => {
    if(r.valueAsNumber != 0){
        document.getElementById("trueno").classList.add("visually-hidden");
    }
    if( r.valueAsNumber == 1 ){ // selon la valeur du range, une des 3 timeline s'affiche
        document.getElementById("life").classList.add("visually-hidden");
        document.getElementById("other").classList.add("visually-hidden");
        document.getElementById("school").classList.remove("visually-hidden");

    }
    else if( r.valueAsNumber == 2 ){
        document.getElementById("school").classList.add("visually-hidden");
        document.getElementById("other").classList.add("visually-hidden");
        document.getElementById("life").classList.remove("visually-hidden");
    }
    else if( r.valueAsNumber == 3 ){
        document.getElementById("school").classList.add("visually-hidden");
        document.getElementById("life").classList.add("visually-hidden");
        document.getElementById("other").classList.remove("visually-hidden");
    }
    else{
        document.getElementById("school").classList.add("visually-hidden");
        document.getElementById("life").classList.add("visually-hidden");
        document.getElementById("other").classList.add("visually-hidden");
        }
    });

    