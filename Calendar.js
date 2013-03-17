function calendar() {
	//Setting up calendar array
	var current = new Date();
	var month = current.getMonth();
	var day = current.getDate();
	var year = current.getFullYear();

	//Get correct month
	var tempMonth = month + 1;

	//Getting day
	var tempDate = new Date(month + ' 1,' + year);
	var tempweekday = tempDate.getDate();
	var tempweekday2 = tempweekday;

	//Check to see if it's a leap year
	var totalFeb = "0";
	if(month === 1){
		if((year%100 !== 0 && year%4 === 0) || (year%400 === 0)){
			totalFeb = 29;
		}
		else{
			totalFeb = 28;
		}
	}
	var totalDays = ["31", ""+totalFeb+"", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

	//Loop to add extra day
	var padding = "";
	while(tempweekday > 0){
		padding += "<td class = 'premonth'></td>";
		tempweekday--;
	}

	//Creating the calendar
	dayAmount = totalDays[month];
	i = "0";
	while(i <= dayAmount){
		if(tempweekday2 > 6){
			tempweekday2 = 0;
			padding += "</tr><tr>";
		}
	
		if(i === day){
			padding += "<td class = 'currentday'>"+i+"</td>";
		}
		else{
			padding += "td class = 'currentmonth'>"+i+"</td>";
		}
		tempweekday2++;
		i++;
	}

	//Creating body of the calendar
	var monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	var calendarTable = "<table class = 'calendar'> <tr class = 'currentmonth'> <th colspan = '7'>"+monthNames[month]+" "+year+"</th></tr>";
	calendarTable += "<tr class = 'weekdays'> <td>Sun</td> <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";

	calendarTable += "<tr>";
}