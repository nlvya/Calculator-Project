var x = document.getElementById("item0");//simplifies code when changing the display
var input = [""];//where values are stored before the answer is calculated
var display = "";//the string that is displayed so the user knows what they are calculating

function one() {pushNumber("1"); display += "1"; x.value = display;} //when someone clicks the buttons it adds it to an array and displays it
function two() {pushNumber("2"); display += "2"; x.value = display;}
function three() {pushNumber("3"); display += "3"; x.value = display;}
function four() {pushNumber("4"); display += "4"; x.value = display;}
function five() {pushNumber("5"); display += "5"; x.value = display;}
function six() {pushNumber("6"); display += "6"; x.value = display;}
function seven() {pushNumber("7"); display += "7"; x.value = display;}
function eight() {pushNumber("8"); display += "8"; x.value = display;}
function nine() {pushNumber("9"); display += "9"; x.value = display;}
function zero() {pushNumber("0"); display += "0"; x.value = display;}

function pushNumber(a) { //if the last value isnt a number it adds it as a new value, otherwise it adds it to make muti-digit numbers
    if (input.length > 0 && input[input.length - 1] == "*" || input[input.length - 1] == "÷" || input[input.length - 1] == "-" || input[input.length - 1] == "+") {
        input.push(a);
    } else {
        input[input.length - 1] += a;
    }
    console.log(input);
}

function getTypedAnswer() {//if someone types in the input instead of using the buttons
    var temp = x.value;
    var letters = /^[A-Za-z]+$/; //btw i found this here https://www.w3resource.com/javascript/form/all-letters-field.php
    if (x.value.match(letters)) {//checks if there are any letters in the input
        alert("Please don't put letters in my calculator.");
    } else {
        console.log(temp);
        temp = temp.split("");
        console.log(temp);
        for (var i = 0; i < temp.length; i ++) {
            if (temp[i] == " ") {
                temp.splice(i,1);
            }
        }
        console.log(temp);
        for (var i = 0; i < temp.length; i ++) {
            if (i != 0 && temp[i - 1] != "+" && temp[i] != "+" && temp[i - 1] != "-" && temp[i] != "-" && temp[i - 1] != "*" && temp[i] != "*" && temp[i - 1] != "÷" && temp[i] != "÷") {
                temp[i - 1] += temp[i];
                temp.splice(i,1);
                i--;
            }
        }
        console.log(temp);
        input = temp;
        calculate();
    }
}

function multiply() {//pushes "*" to the array and displays the multiplication sign
    input.push("*");
    display += " * ";
    x.value = display;
    console.log(input);
}
function divide() {//pushes "÷" to the array and displays the division sign
    input.push("÷");
    display += " ÷ ";
    x.value = display;
    console.log(input);
}
function add() {//pushes "+" to the array and displays the addition sign
    input.push("+");
    display += " + ";
    x.value = display;
    console.log(input);
}
function subtract() {//pushes "-" to the array and displays the subtraction sign
    input.push("-");
    display += " - ";
    x.value = display;
    console.log(input);
}
function decimal() {//adds a decimal with the last value in the array and displays it
    input[input.length - 1] += ".";
    display += ".";
    x.value = display;
    console.log(input);
}
function calculate() {//calculates each value based on what sign is around it
    console.log(input);
    if (input[0] == "") {
        getTypedAnswer();
    } else {
        for (var i = 0; i < input.length; i ++) {
            if (input[i] == "*") {
                temp = parseFloat(input[i - 1]) * parseFloat(input[i + 1]);
                input[i] = temp;
                input.splice(i-1,1);
                input.splice(i,1);
                console.log(input);
                if (input.length > 1) { calculate(); }
            } else if (input[i] == "÷") {
                temp = parseFloat(input[i - 1]) / parseFloat(input[i + 1]);
                input[i] = temp;
                input.splice(i-1,1);
                input.splice(i,1);
                console.log(input);
                if (input.length > 1) { calculate(); }
            } else if (input[i] == "-") {
                temp = parseFloat(input[i - 1]) - parseFloat(input[i + 1]);
                input[i] = temp;
                input.splice(i-1,1);
                input.splice(i,1);
                console.log(input);
                if (input.length > 1) { calculate(); }
            } else if (input[i] == "+") {
                temp = parseFloat(input[i - 1]) + parseFloat(input[i + 1]);
                input[i] = temp;
                input.splice(i-1,1);
                input.splice(i,1);
                console.log(input);
                if (input.length > 1) { calculate(); }
            }
        }
        x.value = input[0];//displays the answer
        //allClear();//clears it so the next problem isnt messed up
    }
}

function allClear() {//resets global variables
    input = [""];
    display = "";
    x.value = display;
    console.log(input);
}