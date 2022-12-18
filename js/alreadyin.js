window.onload = function {isalready()};


function isalready() {
    elt = document.getElementsByTagName("a");
    elt.addEventListener('click', function(x) {
        if (x.href == actual){
            alert("vous êtes déjà sur cette page");
        }
    });
}
     