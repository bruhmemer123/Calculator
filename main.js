const display=document.getElementById("display");
function WritetoDisplay(input){
    display.value += input;
}
function ClearDisplay(){
    display.value = '';
}
function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }}