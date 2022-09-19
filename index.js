let result = document.querySelector("#result");
function myFunc(number) {
    result.value += number;
}

function calculation() {
   let eqation =  eval(result.value)
   result.value = eqation;
}

function clearInput() {
   result.value = "";

}