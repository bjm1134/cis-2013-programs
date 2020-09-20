var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
     floatAge = parseFloat(prompt("Enter age in years"));
     floatDays = parseFloat(floatAge*365);
     floatMonths= parseFloat(floatAge*12);
     intWeeks= parseInt(floatDays/7);
     intFortnights= parseInt(floatDays/14);
     alert("Here is your age in years = " + floatAge + ". Here is your age in days= " + floatDays + ". Here is your age in months= " + floatMonths + ". Here is your age in weeks= " + intWeeks + ". Here is your age in fortnights= " + intFortnights);