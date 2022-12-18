window.onscroll = function() {NavigState()};

    function NavigState(){
        if (document.documentElement.scrollTop > 250){
            document.getElementById("header").style.visibility = "hidden";
        }
        else{
            document.getElementById("header").style.visibility = "visible";

        }
    }