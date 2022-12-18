window.onload = function() {loading()};


function loading(){
    document.getElementById("prnm_nm").innerHTML = "<div class='float-end'><div class='spinner-border text-light' style='width:3rem; height: 3rem;' role='status'><span class='visually-hidden'></span></div></div>";
    document.addEventListener('wheel', (event) => { // scroll up/down cancels loading spinner
        stoploading();
    });
    entete = document.getElementById("header"); 
    entete.addEventListener('mouseover', (event) => { // Mouse over Header cancels loading spinner
        stoploading();
    });

}

function stoploading(){ // replace spinner by Adrien Crico's header 1
    document.getElementById("entete").innerHTML = "<div class='jumbotron mt-4 text-light' id='entete'><h1 class='display-4' id='prnm_nm'>Adrien Crico</h1></div>";
}

