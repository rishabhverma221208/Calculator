const input = document.getElementById("number-input");
const result = document.getElementById("result");
var exp="0";
function handleClickButton(el){
    console.log(el.innerText);
    exp = `${input.value}${el.innerText}`
    input.value = exp;
    if(["+","-","*","/","%"].includes(el.innerText)) return ; 
   // result.value = eval(exp);
}

function reset(){
    input.value = "";
    result.value = "";
    exp = "0";
}

function answer(){
    try {
        result.value = eval(exp);
    } catch (error) {
        result.value = "invalid exp"
    }
}