// -----------------Question 1 ---------------------------
function city(){
    var city = prompt("Enter your city");
    if (city == "Karachi") {
        document.getElementById("karachi").innerHTML = "Welcome to city of lights!";
    }
    else{
        document.getElementById("karachi").innerHTML = city;

    }
}

// ----------------------------Question 2 ---------------------

function gender(){
    var gender = prompt("Enter your gender");
    if (gender == "male"){
        document.getElementById("gender").innerHTML = "Good Morning Sir";
    }
    if (gender == "female") {
        document.getElementById("gender").innerHTML = "Good Morning Ma'am";
        
    }
}

// ----------------------------------------Question 3 ----------

function TrafficLights(){
    var status = prompt ("Enter status of traffic light signals in terms of colors");
    if (status == "Red"){
        document.getElementById("traffic-light").innerHTML = "Must Stop ";

    }
    if (status == "Yellow"){
        document.getElementById("traffic-light").innerHTML = "Ready to move ";
    }

    if (status == "Green" ){
        document.getElementById("traffic-light").innerHTML = "Move Now ";
    }
}

// ----------------------------------Question 4 ------------------ 

function fuel(){
    var FuelCapacity = +prompt("Enter the amount of fuel in litres currently in your tank");
    if (FuelCapacity < 0.25){
        document.getElementById("fuel").innerHTML = "Please refill your tank";
    }

    else{
        document.getElementById("fuel").innerHTML = "You are good to go";
    }
}

// ----------------------------Question 5 ---------------------------

function a(){
    var a = 4;
    if (++a === 5){
        alert("given condition for variable a is true");
    }
}

function b(){
    var b = 82;
    if (b++ === 83){
        alert("given condition for variable b is true");
    }
    else{
        alert("given condition for varaiable b is not true ")
    }
}

function c(){
    var c = 12;
    if (c++ === 13){
        alert("condition 1 is true");
    }

    if (c === 13){
        alert("condition 2 is true");
    }

    if (++c < 14){
        alert("condition 3 is true");
    }

    if(c === 14){
        alert("condition 4 is true");
    }
}

function d(){
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("The cost equals");
    }
}

function e(){
    if (true){
        alert("True");
    }
    if(false){
        alert("False");
    }
}

function f(){
    if("car" < "cat"){
        alert("car is smaller than cat");
    }
}

// ---------------------------- Question 6 ----------------------


function marksheet(){
    var TotalMarks = prompt("Enter total marks");
    var Sub1Marks = +prompt("Enter marks obtained in subject 1");
    var Sub2Marks = +prompt("Enter marks obtained in subject 2");
    var Sub3Marks = +prompt("Enter marks obtained in subject 3");

    var TotalObtainedMarks = Sub1Marks + Sub2Marks + Sub3Marks;
    var Percentage = (TotalObtainedMarks / TotalMarks) * 100;
    
    document.getElementById("heading").innerHTML = "Mark Sheet";
    document.getElementById("TotalMarks").innerHTML = TotalMarks;
    document.getElementById("MarksObtained").innerHTML = TotalObtainedMarks;
    document.getElementById("Percentage").innerHTML = Percentage;
    

    if (Percentage >= 80){
        var Remarks = "Excellent";
        var Grade = "A-one";
    }

    else if (Percentage >=70){
        Remarks = "Good";
        Grade  = "A";
    }

    else if (Percentage >= 60){
        Remarks = "You need to improve";
        Grade = "B";
    }

    else if(Percentage <= 60){
        Remarks = "Sorry";
        Grade = "Fail";
    }

    document.getElementById("Grade").innerHTML = Grade;
    document.getElementById("Remarks").innerHTML = Remarks;

}

// ------------------- Question 7 ---------------------------------

function guess(){
    var SecretNumber = 3;
    var guess = +prompt("Guess the number ranging from 1 to 10");
    if (guess == SecretNumber ){
        document.getElementById("guess").innerHTML = "Bingo!";
    }
    else if ((++guess) == SecretNumber) {
        document.getElementById("guess").innerHTML = "Close enough to the correct answer";
    }
    else{
        document.getElementById("guess").innerHTML = "Try again!";
    }
}


// ------------- Question 8 --------------

function divsilbe(){
    var number = +prompt("Enter a number");
    if (number % 3 == 0){
        document.getElementById("check").innerHTML = "Number is divisible by 3"
    }
}


// --------------- Question 9 -------------

function EvenOdd(){
    var number = +prompt("Enter a number");
    if (number % 2 == 0){
        document.getElementById("EvenOdd").innerHTML = "Number is Even";
    }
    else{
        document.getElementById("EvenOdd").innerHTML = "Number is Odd";
    }
    
}

// ----------------- Question 10 ------------------------------

function Temperature(){
    var temp = +prompt("Enter temperature");
    if (temp > 40){
        document.getElementById("temp").innerHTML  = "It is too hot outside";
    }
    else if (temp > 30){
        document.getElementById("temp").innerHTML  = "The Weather today is Normal";
    }
    else if (temp > 20){
        document.getElementById("temp").innerHTML  = "Today's Weather is cold";
    }
    else if (temp > 10){
        document.getElementById("temp").innerHTML  = "OMG! Today's weather is so Cool";
    }

}


// -------------------- Question 11 --------------------------

function calculator(){
    var FirstNumber = +prompt("Enter first number");
    var SecondNumber = +prompt("Enter second number");
    var operator = prompt("Enter operator");

    document.getElementById("FirstNumber").innerHTML = FirstNumber;
    document.getElementById("SecondNumber").innerHTML = SecondNumber;
    document.getElementById("operator").innerHTML = operator;
    

    if (operator == "*"){
        document.getElementById("result").innerHTML = "= " + ( FirstNumber * SecondNumber ) ;
    }

    if (operator == "-"){
        document.getElementById("result").innerHTML = "= " + ( FirstNumber - SecondNumber ) ;
    }

    if (operator == "+"){
        document.getElementById("result").innerHTML = "= " + ( FirstNumber + SecondNumber ) ;
    }

    if (operator == "/"){
        document.getElementById("result").innerHTML = "= " + ( FirstNumber / SecondNumber ) ;
    }

    if (operator == "%"){
        document.getElementById("result").innerHTML = "= " + ( FirstNumber % SecondNumber ) ;
    }
}