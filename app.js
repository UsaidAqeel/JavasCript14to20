// Java Script 

// Chapter 13 to 15


// Question No 1


// var studentName = [];


// In this array store student names in future.

//////////////////////

// Question No 2

// var studentName = new Array();

/////////////////////

// Question No 3 

// String Array

// var string = ["Jaffar","Talha","Yousuf"];

//////////////////

// Question No 4

// Number Array

// var number = [1,3,2,4,5,6,7,8,9,10];

//////////////

// Question No 5

// Boolean Array

// var boolean = [true,false];

//////////////

// Question No 6

// MIxed Array

// var mixed = ["abcd",123,true,"xyz"];

//////////////

// Question No 7
 
// Some Qualification in pakistan

// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

// document.write("<h1> Qualifications <br /> </h1>")

// for(i = 0 ; i < qualifications.length ; i++){

//     document.write(i + 1 + " ) "+qualifications[i]+"<br />")

// }

////////////////////////


//Question No 8 

// var studentName = ["JAFFAR","YOUSUF","TALHA"];

// var studentper = [320,230,480];

// for(i = 0 ; i < studentper.length; i++){
// document.write("Score of "+studentName[i]+" is "+studentper[i]+". Percentage "+studentper[i]*100/500+" % "+"<br />")
// }

///////////////////  

// Question No 9

// var colorName = [];

// /////a

// var firstColor = prompt("What Color you want add He/She in beginning","Pink");

// colorName.unshift(firstColor);

// document.write("<h3>Add Color at Beginning</h3>a : "+colorName);

// /////b

// var secondColor = prompt("What Color you want to add He/She at last","Blue");

// colorName.push(secondColor);

// document.write("<h3>Add Color At Last</h3><br /> b : "+colorName);

// ///c
// //// Add two in beginning 

// colorName.unshift("Black","White");

// document.write("<h3>Add Two Color At beginning</h3><br /> c : "+colorName)


// ///d

// ////Delete the first value 

// colorName.shift();

// document.write("<h3>Delete beginning color</h3><br /> d : "+colorName)

// ///e

// //Delete the last one 

// colorName.pop();


// document.write("<h3>Delete Last color</h3><br /> e : "+colorName)


// //////////f
// ////Add value at index & color name

// var index = prompt("Enter the Index number");
// var add = prompt("Enter the color that you want to add")

// colorName.splice(index,0,add)

// document.write("<h3>Add value at the index number</h3> f : "+colorName);

// ////////j
// ////Remove the color & How many

// var index = prompt("Enter the Index number you want to delete the color");
// var remove= prompt("Enter the number How many you remove");

// colorName.splice(index,remove);


// document.write("<h3>Remove the color</h3> j : "+colorName)

/////////////////////////

// Question No  10


// var Arr = [320,230,480,120];

// document.write("Scores of the Student : "+Arr)

// Arr.sort()

// document.write("<br /> Ordered Scores of the student : "+Arr)

///////////////////

// Question No 11

// var cities = ["karachi","lahore","Islamabad","Quetta","Peshawar"];

// document.write("<br /> <h1> Cities List"+"<br /> </h1>"+cities+"<br />");

// var selectedCities = cities.slice(2,4);

// document.write("<h1> Selected Cities </h1>"+selectedCities);

///////////////////////

// Question No 12

// var arr = ["This "," is "," my ", " cat"];

// document.write(arr.join(""));

//////////////////////

// Question No 13

// var device = [];

// device.push("Keyboared");
// device.push("Mouse");
// device.push("Printer");
// device.push("Monitor");

// document.write("<h1>Device </h1>"+device);

// for(var i = 0 ; i < 4 ; i++){
//     document.write("<h3>Out</h3>"+device.shift()+"<br />");
// }

//////////////////

// Question No 14


// var devices = [];

// devices.unshift("Keyboared");
// devices.unshift("Mouse");
// devices.unshift("Printer");
// devices.unshift("Monitor");

// document.write("<h1>Device </h1>"+devices);

// for(var i = 0 ; i < 4 ; i++){
//     document.write("<br /> <h2>out</h2>"+devices.pop());
// }

//////////////////

// Question No 15

// var select = "Please Select the phone";
// var phones = ["Apple","Samsung", "Motorola","Nokia","Sony","Haier"];

// document.write("<select><option disable selected hidden>"+select+"</option>");
// document.write("<option>"+phones[0]+"</option> <br />");
// document.write("<option>"+phones[1]+"</option> <br />");
// document.write("<option>"+phones[2]+"</option> <br />");
// document.write("<option>"+phones[3]+"</option> <br />");
// document.write("<option>"+phones[4]+"</option> <br />");
// document.write("<option>"+phones[5]+"</option> <br /></select>");


///////////////////////////


// Chapter No 17 to 20 

// Question  No 1

// Multi dimensional Array

// var array = [
//     [1,2],
//     [3,4],
//     [5,6],
// ];


//////////////////////////////

///Question No 2

// var multi  = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];
// document.write("<b>"+multi.join("<br />"));


// Question No 3

// for(var i = 1 ; i <= 10 ; i++){
//         document.write(i+"<br /> ");
//     }

/////////////////

// Question No 4

// var tableNumber = prompt("Enter the Number to show the multiplication table");
// var tableLength = prompt("Enter the length of the multiplication table");

// for(var i = 1 ; i <= tableLength ; i++){
//     document.write(tableNumber+" x "+i+" = "+tableNumber*i+"<br />")
// }

//////////////////

// Question No 5

// var fruits = ["Apple","Banana","Orange","Mango","Strawberry"];

// document.write("<br />"+fruits.join("<br />")+"<br />");

// // this is loop


// for(var i = 0 ; i < fruits.length ; i++){


//     document.write("<br />"+"Element at Index "+i+" is "+fruits[i]);
// }

////////////////////////////////////

// Question No 6

////////Simple counting

// document.write("<h2>Counting</h2>")
// for(var i = 1 ; i <= 15 ; i++){
//     document.write(" "+i);
// }

// //////////Reverse counting

// document.write("<h2>Reverse Counting</h2>")
// for(var i = 10  ; i >= 1 ; i--){
//     document.write(" "+i);
// }


// ////////////////Even No

// document.write("<h2>Even No</h2>");

// for(var i = 2 ; i <= 20 ; i += 2){
//   document.write(" "+i);
// }

// ///////////////Odd No

// document.write("<h2>Odd No</h2>");

// for(var i = 1 ; i <=20 ; i +=2){
//     document.write(" "+i);
// }

// ///////////Series

// document.write("<h2>Series</h2>");


// for(var i = 2 ; i <= 20 ; i += 2){
//   document.write(" "+i+"k");
// }


////////////////////////////


// Question No 7

// var bakery = ["Cake","Apple Pie","Chips","Cookie","Patties"];
// var user = prompt("Wellcome to Anwer bakery. What Do you want to order sir/ma'am?");
// var temp;

// for(var i = 0 ; i < bakery.length ; i++){
//          if(bakery[i] == user){
//              document.write(bakery[i]+" is <b>Available</b> at  index "+i+" In over bakery");
//              temp = true;
//              break
//          }
// }
// if(!temp){
//      document.write("We are Sorry. "+user+" is <b> Not Available </b> In over Bakery");
// }

////////////////////

// Question No 8

// var number = [24,53,78,91,12];

// var large = 0;

// document.write("Array Item "+number)

// for(var i = 0 ; i <= large ; i++){
//     if(number[i] > large){
//         large = number[i]
//     }
// }
// document.write("<br /> Its is the largest number "+large)

//////////////////////////

// Question No 9

// var number = [24,53,78,91,12];
// var smaller = number[0];

// document.write("Array Item is "+number)

// for(var i = 0 ; i <= smaller ; i++){
//         if(number[i] < smaller){
//             smaller = number[i]
//         }
//     }


// document.write("<br /> Its is the Smaller number "+smaller)


//////////////////////


//Question No 10

// for(var i = 5 ; i <= 100 ; i += 5){
//     document.write(" "+i);
// }

///////////////////////////
