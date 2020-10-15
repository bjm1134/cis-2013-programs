//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
floatMidPts = parseFloat(prompt("Please enter Midterm grade (0-35):"));
floatFinPts = parseFloat(prompt("Please enter Final grade (0-35):"));

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

intGradeOption = parseInt(prompt("If the course is pass/fail enter (1), if it is letter grade enter (2):"));

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


alert("Your final grade is: " +stringFinalGrade);