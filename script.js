//your JS code here. If required.
function daysofAYear(const valinput) {
	if(valinput%366==0)
	{
		return 366;
	}
	else{
		return 365;
	}
}
const valinput=prompt("Enter value");
alert(daysofAYear(valinput));
