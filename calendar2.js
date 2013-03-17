//Global variables
days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
daysMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

//Current date
current = new Date();

//Calendar function
function Calendar(month, year) {
	this.month = (isNaN(month) || month == null) ? current.getMonth() : month;
	this.year = (isNaN(year) || year == null) ? current.getFullYear() : year;
	this.html = '';
}

Calendar.prototype.generateHTML = function(){
	var firstDay = new Date(this.year, this.month, 1);
	var startingDay = firstDay.getDay();
	var monthLength = daysMonth[this.month];
	
	//Check for leap year
	if(this.month == 1) {	//February only
		if((this.year%4 == 0 && this.year%100 != 0) || (this.year%400 == 0)){
			monthLength = 29;
		}
	}
	
	//Constructing the HTML
	var monthName = months[this.month];
	var html = '<table class="calendar">';
	html += '<tr><th colspan="7">';
	html += monthName + "&nbsp;" + this.year;
	html += '</th></tr>';
	html += '<tr class="calendar-header">';
	for(var i=0; i<=6; i++) {
		html += '<td class="calendar-header-day">';
		html += days[i];
		html += '</td>';
	}
	html += '</tr><tr>';
	
	//Filling days in the calendar
	var month = 0;
	var day = 1;
	//This loop is for weeks (rows)
	for(var i = 0; i < 9; i++) {
		//This loop is for week days (cells)
		for(var j = 0; j <= 6; j++) {
			html += '<td class="calendar-day">';
			if(day <= monthLength && (i > 0 || j >= startingDay)) {
				html += day;
				day++;
			}
			html += '</td>';
		}
		//Stop making rows if we run out of days
		if(day > monthLength) {
			break;
		}
		else {
			html += '</tr><tr>';
		}
	}
	html += '</tr></table>';
	this.html = html;
}

Returning the html
Calendar.prototype.getHTML = function() {
	return this.html;
}
