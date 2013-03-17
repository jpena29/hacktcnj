//Global variables
function displayCalendar(){
var daysMonth = ['31', ''+febtotal+'', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var html = "";

//Current date
var current = new Date();
var year = current.getFullYear();
var month = current.getMonth();
var day = current.getDate();
var nextmonth = month + 1;
var prevmonth = month - 1;

//Check for leap year
var febtotal = "";
if(months == 1){
   if((year%4 == 0 && year%100 != 0) || year%400 == 0){
	febtotal = 29;
   }
   else{
	febtotal = 28;
   }
}
//Next date
var nextDate = new Date(nextmonth+' 1,'+year);
var weekdays = nextDate.getDay();
var weekdays2 = weekdays;
var numOfDays = daysMonth[month];

//Loop for white spaces for previous month
while(weekdays > 0){
   html += '<td class="monthPre"></td>';
   weekdays--;
}
//Loop for days in calendar
var counter = 1;
while(counter <= daysMonth){
   if(weekdays2 > 6){
	weekdays2 = 0;
	html =+ '</tr><tr>';
   }
   if(couter == day){
	html += '<td class="dayNow" onMouseOver="this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\";" "+"onMouseOut='this.style.background=\"FFFFFF\"; this.style.color=\"#00FF00\"'>'"+counter+"</td>
   }
   else{
	html +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
        " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";
   }
   weekdays2++;
   counter++;
}
//HTML body
var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
 +monthNames[month]+" "+ year +"</th></tr>";
 calendarBody +="<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>"+
 "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
 calendarBody += "<tr>";
 calendarBody += htmlContent;
 calendarBody += "</tr></table>";
 // set the content of div .
 document.getElementById("calendar").innerHTML=calendarBody;
}	
	
	
