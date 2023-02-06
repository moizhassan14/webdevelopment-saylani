// swal({
//     title: "Moiz the king!",
//     text: "You clicked the button!",
//     icon: "success",
//     button: "wellcome!",
//   });
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )
// var num=1;
// console.log(num,"Moiz Hasan");
//used to remember which console we are using
// var num=1;
// console.log("test1--->",num);
// var num=1;
// console.log(++num,num--,num);
// 2 2 1
// "a"=="A";
// false
// var lang1=prompt("Enter language 1:");
// var lang2=prompt("Enter language 2:");
// if(lang1=="HTML"){
//     alert("Enter second langauge")
//     if (lang2=="CSS") {
//         alert("hired")

// }
// } else {
//     alert("Not Hired")
// }
// var lang1=prompt("Enter language 1:");
// var lang2=prompt("Enter language 2:");
// if (lang1=="HTML") {
//     if (lang2=="CSS") {
//         alert("congrats")
//     } else {
//         alert("Apply after learning CSS")
//     }
// }else{
//     alert("not hired")
// }
// var abc=true&&true||"ahmed";
// console.log(abc);
//  true
// var abc=true&&false||"ahmed"; 
// console.log(abc);
//  ahmed
// var char="a";
// window.alert(char.toUpperCase());

//--------------------------------------------------------------------------------------------------------//
// Program to give the Top 3Rankings of sportsmans in the world.
// var sports=prompt("Enter Your Favourite Sports.Your Option include (Football,Cricket,Snooker)","Football,Cricket,Snooker");
// if(sports=="Football"){
//     var favPlayer=prompt("Enter Your Favourite Player In Football","Messi,Ronaldo,Neymar");
//     if(favPlayer=="Messi"){
//         document.write("1st");
//     }
//     else if(favPlayer=="Ronaldo"){
//         document.write("2nd");
//     }
//     else if(favPlayer=="Neymar"){
//         document.write("3rd");
//     }
//     else{
//         alert("Player didnt match")
//     }
// }
// else if(sports=="Cricket"){
//     var favPlayer=prompt("Enter Your Favourite Player In Cricket","Babar,Vohli,Buttler");
//     if(favPlayer=="Babar"){
//         document.write("1st");
//     }
//     else if(favPlayer=="Kohli"){
//         document.write("2nd");
//     }
//     else if(favPlayer=="Buttler"){
//         document.write("3rd");
//     }
//     else{
//         alert("Player didnt match");
//     }
// }
// else if(sports=="Snooker"){
//     var favPlayer=prompt("Enter Your Favourite Player In Snooker","Ronnie O,salovien,Trump,Mark Salby");
//     if(favPlayer=="Ronnie O,salovien"){
//         document.write("1st");
//     }
//     else if(favPlayer=="Trump"){
//         document.write("2nd");
//     }
//     else if(favPlayer=="Mark Salby"){
//         document.write("3rd");
//     }
//     else{
//         alert("Player didnt match");
//     }
// }
// else{
//     alert("Sports didn't Match");
// }
//----------------------------------------------------------------------------------------------------------//
//-----------------------------------ASSIGNMENT CHAPTER 9-11------------------------------------------------//
//-----------------------------------USER INPUT & CONDITIONAL STATEMENT-------------------------------------//
//QUESTION NO 1:
//ANSWER:
// var city=prompt("Enter City");
// if(city=="karachi"){
//     alert("Welcome to city of lights")
// }
//QUESTION NO 2:
//ANSWER:
// var gender=prompt("Enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir")
// }
// if(gender=="female"){
//     alert("Good Morning Ma'am")
// }
// else{
//     alert("Wrong input")
// }
//QUESTION NO 3:
//ANSWER:
// var color=prompt("Enter Road Traffic Signal Colour");
// if(color=="Red"){
//     alert("Must Stop");
// }
// else if(color=="Yellow"){
//     alert("Ready to move")
// }
// else if(color=="Green"){
//     alert("Move now")
// }
// else{
//     alert("wrong color")
// }
//QUESTION NO 4:
//ANSWER:
// var cFuel=+prompt("Enter car's remaining fuel");
// if(cFuel<0.25){
//     alert("“Please refill the fuel in your car")
// }
// else{
//     alert("Enough fuel to travelling somewhere but for safety refill the car fuel atleast 80% of your car tank.")
// }
//QUESTION NO 5:
//ANSWER:
//a:true//
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b:false//
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c:true-condion2and4//
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//d:true//
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e:true-->true//
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }
//f:True--> bcz t is greater than r//
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//QUESTION NO 6:
//ANSWER:
// document.write("<h1><b>Marks Sheet</b></h1>")
// var s1m=100;
// var s2m=100;
// var s3m=100;
// var tm=s1m+s2m+s3m;
// document.write("Total Marks:"+tm+"<br>");
// var s1o=+prompt("Enter Marks obtained in subject 1");
// var s2o=+prompt("Enter Marks obtained in subject 2");
// var s3o=+prompt("Enter Marks obtained in subject 3");
// var tO=s1o+s2o+s3o;
// document.write("Obtained Marks:"+tO+"<br>");
// var per=(tO*100)/tm;
// document.write("Percentage:"+per+"%"+"<br>");
// if(per>=80){
//     document.write("Grade:A-one"+"<br>");
//     document.write("Remarks:Excellent")
// }
// else if(per>=70){
//     document.write("Grade:A"+"<br>");
//     document.write("Remarks:Good")
// }
// else if(per>=60){
//     document.write("Grade:B"+"<br>");
//     document.write("Remarks:You need to improve")
// }
// else{
//     document.write("Grade:Fail"+"<br>");
//     document.write("Remarks:Sorry")
// }
//QUESTION NO 7:
//ANSWER:
// var sNo=6;
// var gNo=+prompt("Guessed a Number Between 1-10");
// if(gNo==sNo){
//     alert("Bingo! Correct answer”");
// }
// else if(++gNo==sNo){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("wrong number");
// }
//QUESTION NO 8:
//ANSWER:
// alert("Hint about a number");
// if(sNo%3==0){
//     alert("The number is divisible by 3");
// }else{
//     alert("No its not divisble by 3");
// }
//QUESTION NO 9:
//ANSWER:
// alert("Hint about a number");
// if(sNo%2==0){
//     alert("The number is EVen")
// }
// else{
//     alert("The number is ODD")
// }
//QUESTION NO 10:
//ANSWER:
// var temp=+prompt("Enter temperature");
// if(temp>40){
//     alert("It is too hot outside");
// }
// else if(temp>30){
//     alert("The Weather today is Normal");
// }
// else if(temp>20){
//     alert("“Today's Weather is cool");
// }
// else if(temp>10){
//     alert("OMG! Today’s weather is so Cool");
// }
//QUESTION NO 11:
//ANSWER:
// document.write("<h1><b>Calculator</b></h1>");
// var fNo=+prompt("Enter First Number");
// document.write("First Number:"+fNo+"<br>");
// var sNo=+prompt("Enter First Number");
// document.write("Second Number:"+sNo+"<br>");
// var operant=prompt("Enter operant");
// document.write("Operant is:"+operant+"<br>");
// var result;
// if(operant=="+"){
//     result=fNo+sNo;
// }
// else if(operant=="-"){
//     result=fNo-sNo;
// }
// else if(operant=="*"){
//     result=fNo*sNo;
// }
// else if(operant=="/"){
//     result=fNo/sNo;
// }
// else if(operant=="%"){
//     result=fNo%sNo;
// }
// document.write("Result:"+result);
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------ASSIGNMENT CHAPTER 12-13------------------------------------------------//
//------------------------IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS----------------------------//
//QUESTION NO 1:
//ANSWER:
// var char=prompt("Enter the Character(Number or String)");
// if(char==char.toUpperCase()){
//     alert("UpperCase");
// }
// else if(char==char.toLowerCase()){
//     alert("Lower Case")
// }
// else if(char==+char){
//     alert("Number");
// }
//QUESTION NO 2:
//ANSWER:
// var fNo=+prompt("Enter First Number");
// var sNo=+prompt("Enter Second Number");
// if(fNo>sNo){
//     alert(fNo+" is greater than "+sNo)
// }
// else if(fNo<sNo){
//     alert(fNo+" is lower than "+sNo);
// }
// else{
//     alert(fNo+" is equal to "+sNo);
// }
//QUESTION NO 3:
//ANSWER:
// var n=+prompt("Enter any number");
// if(Math.sign(n)==+1){
//     alert("positive number")
// }
// else if(Math.sign(n)==-1){
//     alert("negative")
// }
// else{
//     alert("zero")
// }
//QUESTION NO 4:
//ANSWER:
// var v=prompt("Enter a Single Character");
// if(v=="a"){
//     alert("Vowel");
// }
// else if(v=="e"){
//     alert("Vowel");
// }
// else if(v=="i"){
//     alert("Vowel");
// }
// else if(v=="o"){
//     alert("Vowel");
// }
// else if(v=="u"){
//     alert("Vowel");
// }
// else{
//     alert("Not a Vowel")
// }

//QUESTION NO 5:
//ANSWER:
// var pass="pakistan12";
// var uPass=prompt("Enter Password");
// if(!uPass){
//     alert("Please Enter the Password");
// }
// else if(uPass==pass){
//     alert("Correct");
// }
// else{
//     alert("Incorrect");
// }
//QUESTION NO 6:
//ANSWER:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);}
// else{
// greeting = "Good evening";
// alert(greeting);
// }
//QUESTION NO 7:
//ANSWER:
// var  time = prompt("Enter the time in 24-hour format (e.g. 1900 for 7pm):");

// if (time >= 0000 && time < 1200) {
//   console.log("Good morning");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good afternoon");
// } else if (time >= 1700 && time < 2100) {
//   console.log("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//   console.log("Good night");
// } else {
//   console.log("Invalid time input");
// }

//-----------------------------------------------------------------------------------------------------------//
