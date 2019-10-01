var X = 500
function Add_numbers1() {
    document.write(30 + X + "<br>");
}
function Add_numbers2() {
    document.write(X + 95 + "<br>");
}
Add_numbers1();
Add_numbers2();

function Add_numbers3(){
    var B = 124;
    document.write(123 + B + "<br>");
}
function Add_numbers4(){
    console.log(B + 2390);
}
Add_numbers3();
Add_numbers4();

function get_Date() {
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "Working hard or hardly working?";
    }
}
function example(){
    var A = 5;
    if (A < 10) {
        document.getElementById("math").innerHTML = "5 is less than 10";
    }
}

function Age_Function() {
    Age = document.getElementById("age").value;
    if (Age >= 21){
        drink = "You are old enough to drink!";
    }
    else {
        drink = "You are not old enough to drink!";
    }
    document.getElementById("age").innerHTML = drink;

}