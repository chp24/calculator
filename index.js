/*var btn = document.getElementById('btn');
var num = document.getElementById('num');
var btnVal = btn.textContent;
var numVal = num.textContent;
btn.addEventListener('click',
    function handleClick() {
        var tempNum = parseFloat(numVal) + parseFloat(btnVal) ;
        num.textContent = "3333";
    }
)*/

/*
let btn = document.querySelectorAll('#data-btn');

btn.addEventListener('click',
    function handleClick() {

        let numVal = document.getElementById('num').textContent
        let btnVal = parseFloat(btn.textContent);
        let tempNum = parseFloat(numVal) + parseFloat(btnVal);
        numVal.textContent = btn.textContent;
        }
    )*/
try{
        var btns = document.getElementsByClassName("button");
        for(var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function(event)
                    {

                            let num = document.getElementById('num');
                            let temp1 = event.target.innerHTML;
                            let numVal = parseFloat(num.textContent);
                            let btnVal = parseFloat(temp1);

                            if(num.textContent == "0"){
                                    num.textContent = temp1;
                            }else{num.textContent = numVal + temp1;}

                    }
                )
        }}catch(e){}

try{
        clear = document.getElementById("clearBtn");
        clear.addEventListener("click", function()
        {
                num.textContent = "0";
        })
}catch(e){}





