
function getPin(){
    const random = Math.random()*10000 ;
    const pin = (random + ' ').split('.')[0];
    if(pin.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}

document.getElementById("digit-container").addEventListener("click",function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle backspace
         //handle clear
     if(digit==='C'){
        const typeInput=document.getElementById("typed-pin");
        typeInput.value = ' ';
     }
    }
    else{
        const typeInput=document.getElementById("typed-pin");
        typeInput.value = typeInput.value + digit ;
    }
})

function verifyPin(){
    const pin = document.getElementById("pin").value;
    const typePin=document.getElementById("typed-pin").value;
if(pin === typePin){
displayMatchResult('block','none');
}else{
   displayMatchResult('none','block'); 
}
}
function displayMatchResult(isCorrect,isIncorrect){
    const correct = document.getElementById("correct-pin");
    correct.style.display = isCorrect;
    const incorrect = document.getElementById("incorrect-pin");
    incorrect.style.display = isIncorrect;
}