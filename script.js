function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= (rateval + "%");
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>" +principal+ "</mark>,\<br\> at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

function principalChecker() 
{
		var principalValue = document.getElementById('principal');
		if (principalValue.value =="0") {
			alert("Please enter a positive number")
      document.getElementById('principal').focus();
			}  // if the value set on the field is 0 then show alert and focus on the field
      if (principalValue.value < 0) {
				alert("Please enter a positive number");
        document.getElementById('principal').focus();
		}	// same as before but if value is less than 0, meaning a negative number
}
     