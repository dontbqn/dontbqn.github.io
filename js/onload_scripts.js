

window.onload = function() {NavbarAnimState(),loading(),NoSearch()};


//NavigationBar Animation
function NavbarAnimState() {
    BtnNav = document.getElementById("btnNav");
    BtnNav.addEventListener("mouseover", (e) => {
        NavigBarOver();
    });
    BtnNav.addEventListener("click", (e) => {
        NavigBarClick();
    });

    BtnNav.addEventListener("mouseleave", (e) => {
        NavigBarOut();
    });
}

let collapsed = false;
function NavigBarOver() {
    if (collapsed){
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-up-square' viewBox='0 0 16 16'><path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/><path d='M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z'/></svg>";
    }else{
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-square' viewBox='0 0 16 16'><path d='M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z'/><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z'/><span class='visually-hidden'>O</span></svg>";
    }
}

function NavigBarClick() {
    if (collapsed){
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/><span class='visually-hidden'>O</span></svg>";
        collapsed = false;
    }else{
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-up-fill' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/><span class='visually-hidden'>O</span></svg>";
        collapsed = true;
    }
}
function NavigBarOut() {
    if (collapsed == false){
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down-fill' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/><span class='visually-hidden'>O</span></svg>";
    }else{
        document.getElementById("btnNav").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-up-fill' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/><span class='visually-hidden'>O</span></svg>";
    }
}

//loading spinner when loading the window
function loading(){
    document.getElementById("prnm_nm").innerHTML = "<div class='float-end'><div class='spinner-border text-light' style='width:3rem; height: 3rem;' role='status'><span class='visually-hidden'></span></div></div>";

    document.addEventListener('wheel', (event) => { // scroll up/down cancels loading spinner
        stoploading();
    });
    entete = document.getElementById("header"); 
    entete.addEventListener('mouseover', (event) => { // Mouse over the Header cancels loading spinner
        stoploading();
    });
}

function stoploading(){ // replace spinner by Adrien Crico's header 1
    document.getElementById("entete").innerHTML = "<div class='jumbotron mt-4 text-light' id='entete'><h1 class='display-4' id='prnm_nm'>Adrien Crico</h1></div>";
}
/*
    When the user switch to another application, loading function is called back
*/
window.addEventListener("blur", () => {
    loading();
});
// when the user is back to the website
window.addEventListener("focus", () => {
    stoploading();
});



//still no search..
function NoSearch(){
    sinput = document.getElementById("searchbar");
    sinput.addEventListener("change", (event)=> {
        ShowMowCow();
    });
}
function ShowMowCow() {
    document.getElementById("cow").classList.remove("visually-hidden");
    cowbtn = document.getElementById("byecow");
    cowbtn.addEventListener("click", (event)=> {
        ByeCow();
    });
}
function ByeCow(){
    document.getElementById("cow").innerHTML = "";
}