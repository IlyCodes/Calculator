// calc pop-up:

$(document).ready(function(){

    $('#calcPop').hide();

    $(".popBtn").click(function(){

        $('#calcPop').show();

        $(".popBtn").hide();

    });

});


let display = document.getElementById("dis");

let result = document.getElementById("result");

let buttons = Array.from(document.getElementsByClassName('btn'));

let supp = document.getElementById("ac");

buttons.map( btn => {

    btn.addEventListener('click', (e) => {

        switch(e.target.innerText){

            case 'AC':

                display.innerText='';

                result.innerText='';

                break;
            
            case "C":

                display.innerText = display.innerText.slice(0, -1);

                break;

            case "=":
                
                try {

                    result.innerText = eval(display.innerText);
                
                }catch {

                    result.innerText = "Error:(";

                };

                result.innerText = "= " + eval(display.innerText);

                break;

            default:

                display.innerText+=e.target.innerText;

        };

    });

});
