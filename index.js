 let num = document.getElementById('num');
        var btns = document.getElementsByClassName("button");
        for(var i = 0; i < btns.length; i++)
        {
                btns[i].addEventListener("click", function(event)
                    {

                            let temp1 = event.target.innerHTML;
                            let numVal = num.textContent;
                            if(numVal == "0")
                            {
                                num.textContent = temp1;
                            }
                                else
                                {
                                    num.textContent = numVal + temp1;
                                }
                    }
                )
        }
    add = document.getElementById('addBtn');
    let currentNum = 0;
        add.addEventListener("click", function()
            {
                currentNum = currentNum + parseFloat(num.textContent);
                num.textContent = 0;
            }
        )
    eq = document.getElementById("eqBtn");
        eq.addEventListener('click', function ()
            {
                num.textContent = currentNum + parseFloat(num.textContent);
            }
        )
    clear = document.getElementById("clearBtn");
        clear.addEventListener("click", function()
        {
            num.textContent = "0";
            currentNum = 0;
        })




