/*var btn = document.getElementById('btn');
var num = document.getElementById('num');


var btnVal = btn.textContent;
var numVal = num.textContent;

btn.addEventListener('click',
    function handleClick() {
        var tempNum = parseFloat(numVal) + parseFloat(btnVal) ;
        num.textContent = btn.textContent;
    }
)*/


let btn = document.querySelectorAll('#data-btn');

btn.addEventListener('click',
    function handleClick() {

        let numVal = document.getElementById('num').textContent
        let btnVal = parseFloat(btn.textContent);
        let tempNum = parseFloat(numVal) + parseFloat(btnVal);
        numVal.textContent = btn.textContent;
        }
    )