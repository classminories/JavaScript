var tax_free = 11000, net = 0, tax40 = 0,tax20 = 0 , net40 = 0 ,net20 = 0;


function calculate(salary){

	if (salary > 11000){

		 var rest1 = salary - 11000;
		 //console.log(rest1);
			if(rest1 <= 32000){
				tax20 = rest1 * 0.2;
				net = 11000 + (rest1 - tax20);
			}
			else {

				var rest2 = rest1 - 32000;
				tax40 = rest2 * 0.4;
				tax20 = 32000 * 0.2;
				var net_tmp = 32000 - tax20;
				net = 11000 + (rest2 - tax40) + net_tmp;

			}

	}
	else {
        
		net = salary;
	}


//console.log(tax_free);

document.getElementById("grossSalaryOutput").innerHTML = salary;

document.getElementById("taxFreeOutput").innerHTML = tax_free;
    console.log(tax_free);
document.getElementById("taxedAtBasicRateOutput").innerHTML = tax20;
document.getElementById("taxedAtHigherRateOutput").innerHTML = tax40;
document.getElementById("netSalaryOutput").innerHTML = net;
}

