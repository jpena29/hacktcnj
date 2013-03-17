var mydate = new Date();  
var day = mydate.getDate();
var year = mydate.getFullYear();
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"]; //array of month names.

//////////////////////////////////////////
// Function builds the calendar based 	//
// on the month that the user selects	//
// if nothing is choosen then uses	//
// the current month.			//
//**************************************//
// Included in the function are some 	//
// additional "functions" that will	//
// determine what month the user has	//
// choosen and how many days are in 	//
// Feb.					//
//////////////////////////////////////////

function calendar(month){

var daysinWeek = 7; //Used to create a loop for the days in the week.
var calendarbuild;  //Variable used later to create the calendar.

// Setting the value of the date if user has choosen a different month.
if (month){
 mynewdate = new Date(month + day + year);
}else{
 mynewdate = new Date();
}

 var tempyear = mynewdate.getFullYear();  //Getting the year based on the month and year the user is on
 var tempdate = new Date((mynewdate.getMonth()+1) +' 1 ,'+tempyear);  //Finding what day the first day of the month is
 var startday = tempdate.getDay();
 var w = startday; //copying startday value for use in while loop to build the calendar.
 var tempmonth = tempdate.getMonth();
 var mynewmonth = mynewdate.getMonth();
 var mynewyear = mynewdate.getFullYear();

 //Determing if Feb has 28 or 29 days in it for the year.  
if ((tempyear%100!=0) && (tempyear%4==0) || (tempyear%400==0)){
  var totalFeb = 29;
 }else{
  var totalFeb = 28;
 }
 var totalDays = ["31", ""+totalFeb+"","31","30","31","30","31","31","30","31","30","31"]  //Array of the days in each month.

calendarbuild = "<table class='calendar'>";
calendarbuild += "<tr class='currentmonth'><th class='month'><span onclick='calendar(mydate.setMonth(mydate.getMonth()-1))' title='Previous Month' alt='Previous Month'>&lt;&lt;&nbsp;</span></th>";
calendarbuild += "<th class='calendar_month' colspan='5'>"+monthNames[mynewmonth]+" "+mynewyear+"</th>";
calendarbuild += "<th><span onclick='calendar(mydate.setMonth(mydate.getMonth()+1))'>&nbsp;&gt;&gt;</span></th></tr>";
calendarbuild += "<tr class='startdays'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thur</td> <td>Fri</td> <td>Sat</td> </tr>";
calendarbuild += "<tr>";

//Getting the total amount of days in the previous month
var prevMonth = (mynewdate.getMonth()-1);
var prevMonthdays = totalDays[prevMonth];

//////////////////////////////////////////
// If the previous month is December of //
// the following year, setting the 	//
// number of days for December.  Used	//
// for padding the previous month's days//
// to fill in the start of the table	//
//////////////////////////////////////////
 
if (prevMonth < 0){
 var prevMonthreverse = 31 - startday +1;
}else{
var prevMonthreverse = prevMonthdays - startday + 1;
}
var nextMonth = 1;

//Padding the extra cells before the month's first day.
if (startday != 0){
 while (startday > 0){
  calendarbuild += "<td class='prevmonth'>"+prevMonthreverse+"&nbsp;</td>";
  prevMonthreverse++;
  startday --;
 }
}

var d = 1 //Setting the counter to 1 to loop through the days of the month.

while (d <=totalDays[mynewdate.getMonth()]){
  //Checking to see what day of the week it is.  If Saturday, then create a new row.
  if (w > 6){
   w = 0;
   calendarbuild += "</tr><tr>";
  }
 // If the d is the day value as the day of the month, then the a different CSS class is applied.
 if (d == day){
 calendarbuild += "<td class='currentday' onMouseover='this.style.background=\"#00FF00\"; this.style.color=\"#0000FF\"' onMouseOut='this.style.background=\"#0000FF\"; this.style.color=\"#00FF00\"'>"+d+"</td>";
 }else{
 calendarbuild += "<td class='currentmonth' onMouseOver='this.style.background=\"#0000FF\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#0000FF\"'>"+d+"</td>";
 }
 d++;
 w++;
}

//Finish padding the month with the start of the following month
while (w <= 6){
 calendarbuild += "<td class='prevmonth'>"+nextMonth+"</td>";
 nextMonth++;
 w ++;
}

//Closing the table cleanly.
 calendarbuild += "</tr></table>";

document.getElementById('calendar').innerHTML = calendarbuild;
}