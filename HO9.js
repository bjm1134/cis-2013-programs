var $ = function (id) 
{
    return document.getElementById(id);
};

var generate = function () 
{
    
    var i=0;
    var j=1;
    var stringOutput = i + " " + j;
    var k;
    
    var intCount = parseInt($("total_fib").value);
    
    
    
    if(isNaN(intCount)||intCount<1||intCount>100)
    {
        $("total_fib").value = "";
        $("output").value = "Please enter valid input";
        alert("You must enter a number between 1 and 100");
    }
    else
    {
        while(intCount>2)
        {
            k=i+j;
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " + k;
        }
        
        $("output").value = stringOutput;
    }
};

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};