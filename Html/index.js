const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value="";
}
function calculator(){
    try{
        display.value=evalue(display.value);
    }
    catch(error);{
    display.value ="Error";
    }
}