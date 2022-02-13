const calcInput = document.getElementById('calc__input');
const numericBtn = document.getElementsByClassName('numeric__btn');
const opBtn = document.querySelectorAll('.op__btns button');
let value1, value2;

// one.addEventListener('click', function(){
//     calcInput.value = 1;
//     console.log(calcInput.value);
// });

for (const btn of numericBtn) {
    btn.addEventListener('click', function () {
        // calcInput.value = parseInt(btn.innerText);
        // console.log(parseInt(calcInput.value));
        // if(btn.innerText == '.')
        //     console.log('.');
        // value1 = btn.innerText;

        calcInput.value += btn.innerText;
    });
}

for (const btn of opBtn) {
    btn.addEventListener('click', function () {
        // calcInput.value = parseInt(btn.innerText);
        // console.log(parseInt(calcInput.value));
        // if(btn.innerText == '.')
        //     console.log('.');

        calcInput.value = btn.innerText;
    });
}

// for (const btn of numericBtn) {
//     btn.addEventListener('click', function () {
//         // calcInput.value = parseInt(btn.innerText);
//         // console.log(parseInt(calcInput.value));
//         // if(btn.innerText == '.')
//         //     console.log('.');

//         value2 = btn.innerText;
//         calcInput.value += value2;
//     });
// }
