// ------------date method----------------

// ----------question1

// var date = new Date()
// console.log(date)

// ----------question2


// var month = ["January","February","March","April","May","June","July",
// "August","September","October","November","December"];

// var d = new Date()
// var newMonth = month[d.getMonth()]

// console.log(newMonth)

// ----------question3

// var days = ["Sun" , "Sat" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" ]

// var n = new Date()
// var newDay = days[n.getDay()]

// alert(newDay)


// ----------question4

// var arr = ["Sun" , "Sat" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" ]

// var checkDay = new Date()
// var day  = checkDay.getDay()
// day = arr[day]

// if(day =="Sunday" || day =="Saturday"){
//     alert("tis Fun day")
// }else{
//     day = false

//     alert("its not Fun day")
// }
      
// ----------question5

// var a = new Date()

// if(a.getDate() <= 15){
//     document.write("First fifteen days of the month")
// }
// else if(a.getDate() >=16){
//     document.write("Last fifteen days of the month")
// }

// ----------question6

// var todayDate = new Date();
// var todayTime = todayDate.getTime();
// var todayMint = todayDate.getMinutes();
// var diff = todayTime - todayMint

// // console.log(diff)

// var diifMin = diff/(1000*60*60);
// // console.log(diifMin)

// var accMint = Math.floor(diifMin);

// document.write("Current Date : " +  todayDate)
// document.write("<br> Elapsed milliseconds since midnoght , jan 1, 1970 : "  +  todayTime)
// document.write("<br> Elapsed minutes since midnoght , jan 1, 1970 : "  +  accMint)

// ----------question7

// var hours = new Date();
// hours = hours.getHours()

// if(hours>=0 && hours<12){
//     alert("its AM")
// }else{
//     alert("its PM")

// }

// ----------question8

// var date = new Date("Thu Dec 21 2020")

// document.write("Later date : " + date)

// ----------question9

// var ramadanDate = new Date("04/24/2020");
// var todayDate = new Date("08/20/2020");

// var daysPass = todayDate.getTime() - ramadanDate.getTime();

// var daysPass = daysPass/(1000*3600*24);

// document.write("Total number of days since ramadan passed : " + daysPass);

// ----------question10

// var date = new Date();
// var refrenDate = new Date("1/1/2015");
// var elapsedSec = date.getTime() - refrenDate.getTime();

// document.write("Second passed since 1 jan 2015 : " + elapsedSec/1);

// ----------question11

// var dateTime = new Date();

// var date = dateTime.getDate();
// var month = dateTime.getMonth();
// var hours = dateTime.getHours() - 1;
// var year = dateTime.getFullYear();
// var day = dateTime.getDate();
// var day_a = dateTime.getDay();
// var getm = dateTime.getMonth();

// var days = ["Sat" , "Sun" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" ]
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var d = days[day_a];
// var m = months[month];

// document.write("Current time : " + dateTime + "<br>");
// document.write("1 hour ago :" +d+" "+m+" "+day +" "+year+" "+hours+":"+dateTime.getMinutes()+":"+dateTime.getSeconds()+" "+ "GMT+0500 (Pakistan Standard Time)");

// ----------question12

// var date = new Date();
// var yearBack = new Date("6/5/1915");

// document.write("Current date is : "+ date + "<br> 100 years back, it was : " + yearBack);


// ----------question13

// var userAge = prompt("enter your age in year");
// var d = new Date();
// var year  = d.getFullYear();
// var userBorn = year - userAge;
// document.write("Your age is " + userAge + "<br>");
// document.write("Your birth year is " + userBorn);


// ----------question14

// var name = "Saad";
// var date = new Date();
// var month = date.getMonth();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var currentMonth = months[month];
// var no_of_unit = 410;
// var charges_per_month = 16;
// var net_ammount = no_of_unit*charges_per_month;
// var late_charges_payment = 350;
// var g_amount_payable = net_ammount + late_charges_payment;

// document.write("Customer Name : "+ name +"<br>");
// document.write("Month : " +currentMonth+"<br>");
// document.write("Number of units : " + no_of_unit + "<br>");
// document.write("Charges per month : " + charges_per_month+"<br>");
// document.write("Net amount payable (within due date) : "+net_ammount+"<br>");
// document.write("Late payment surcharge : " +late_charges_payment+"<br>");
// document.write("Gross amount payable (after due date) : "+ g_amount_payable);

