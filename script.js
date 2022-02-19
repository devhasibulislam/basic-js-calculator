let number1, number2, tempNum, result, operator, flag = false;
function myCalculator(number1, number2, operator) {
    if(operator == '+'){
        result = number1 + number2;
    }
    else if(operator == '-'){
        result = number1 - number2;
    }
    else if(operator == '*'){
        result = number1 * number2;
    }
    else if(operator == '/'){
        result = number1 / number2;
    }
    else{
        window.alert('Wrong Input');
    }
    document.querySelector('.calculator-scrn').innerText = result;
}
document.querySelector('.calculator-btn').addEventListener('click', (event) => {
    if(flag == true){
        document.querySelector('.calculator-scrn').innerText = '';
        flag = false;
    }
    if ((isNaN(event.target.innerText) == false && flag == false) || event.target.innerText == '.') {
        document.querySelector('.calculator-scrn').innerText += event.target.innerText;
        tempNum = (parseFloat(document.querySelector('.calculator-scrn').innerText));
    }
    else if(event.target.innerText == '='){
        number2 = tempNum;
        myCalculator(number1, number2, operator);
        result = tempNum;
    }
    else{
        operator = event.target.innerText;
        number1 = tempNum;
        document.querySelector('.calculator-scrn').innerText = '';
        document.querySelector('.calculator-scrn').innerText = event.target.innerText;
        flag = true;
    }
});

document.querySelector('.calculator-scrn').onclick = function(){
    document.querySelector('.calculator-scrn').innerText = '';
}
