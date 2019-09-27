function addition_Function () {
    var addition = 2 + 9;
    document.getElementById("Math").innerHTML = "2 + 9 =" + addition;
}

function subtraction_Function () {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction
}

function multiplication () {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division () {
    var simple_Math = 40/6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math () {
    var math_stuff = (1+2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + math_stuff;
}

function mod_op () {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function neg_op(){
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var x = 5;
x++;
document.write(x);

var a = 5.25;
a--;
document.write(a);

window.alert(Math.random() + 100)

function stuff() {
    var b = Math.round(132.654);
    document.getElementById("Math").innerHTML = "Rounded numbers" + b;
}