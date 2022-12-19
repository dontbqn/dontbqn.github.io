/* Récupère l'URL, vérifie si c'est la même page que l'utilisateur a cliqué, et envoie une alerte js /
ou un modal bootstrap 5 (équivalent) 
> https://getbootstrap.com/docs/5.0/components/modal/


window.onload = function {isalready()};

const actual = document.getElement => récupère le lien ayan l'attribut : aria-current="page"

function isalready() {
    elt = document.getElementsByTagName("a");
    elt.addEventListener('click', function(x) {
        if (x.aria-current == page){                   => si le lien cliqué possede l'attribut ariacurrent:"page", c'est que l'utilisateur est deja sur la page
                                                        Autrement on on regarderait si l'attribut href == "#"
            alert("vous êtes déjà sur cette page");
        }
    });
}

*/