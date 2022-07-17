try{
        var btns = document.getElementsByClassName("button");
        for(var i = 0; i < btns.length; i++)
        {
                btns[i].addEventListener("click", function(event)
                    {
                            let num = document.getElementById('num');
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
}catch(e){ console.error("oops",e)}
try{
        clear = document.getElementById("clearBtn");
        clear.addEventListener("click", function()
        {
                num.textContent = "0";
        })
}catch(e){console.error("oops",e)}




