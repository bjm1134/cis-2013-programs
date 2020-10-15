var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat($("hw_pts").value);
floatMidPts = parseFloat($("mid_pts").value);
floatFinPts = parseFloat($("fin_pts").value);

if (floatHwPts > 30){
    alert("Error: HW pts must be between (0-30).");
}
if (floatHwPts < 0){
    alert("Error: HW pts must be between (0-30).");
}
if (floatMidPts > 35){
    alert("Error: Midterm grade must be between (0-35).");
}
if (floatMidPts < 0){
    alert("Error: Midterm grade must be between (0-35).");
}
if (floatFinPts < 0){
    alert("Error: Final grade must be between (0-35).");
}
if (floatFinPts > 35){
    alert("Error: Final grade must be between (0-35).");
}

floatTotalPts = parseFloat(floatHwPts + floatFinPts + floatMidPts);

intGradeOption = parseInt($("grade_option").value);

if (intGradeOption===1)
{
    if(floatTotalPts >= 80){
        stringFinalGrade = 'Pass';
    }
    if(floatTotalPts < 80){
        stringFinalGrade = 'Fail';
    }
}
if (intGradeOption===2)
{
    if(floatTotalPts >= 90){
        stringFinalGrade = 'A';
    }
    if(floatTotalPts >= 80 & floatTotalPts < 90){
        stringFinalGrade = 'B';
    }
        if(floatTotalPts >= 70 & floatTotalPts < 80){
        stringFinalGrade = 'C';
    }
        if(floatTotalPts >= 60 & floatTotalPts < 70){
        stringFinalGrade = 'D';
    }
    if(floatTotalPts < 60){
        stringFinalGrade = 'F';
    }
}

$("final_grade").value = stringFinalGrade;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};