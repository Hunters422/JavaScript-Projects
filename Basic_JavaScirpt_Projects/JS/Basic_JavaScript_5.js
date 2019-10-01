document.write(typeof "What\'s up fam?");
document.write(10 > 2);
document.write(10 < 2);
function my_function() {
    document.getElementById("test").innerHTML = 0/0;
}
function my_function2(){
    document.getElementById("test_2").innerHTML = isNaN('This is a string');
}
function my_function3(){
    document.getElementById("test_3").innerHTML = isNaN('007');
}
function my_num() {
    document.getElementById("test_4").innerHTML = document.write(-3E310);   
}
function my_num2() {
    document.getElementById("test_5").innerHTML = document.write(2E310);   
}
console.log(3+5);
document.write("10" + 5);
document.write(10==10);
document.write(10==124);
x = 10;
y = 10;
document.write(x === y);
a = 124;
b = 345;
document.write(a === b);
document.write(5 > 2 && 10 > 4);
document.write(5 > 2 && 10 > 3542);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);
function not_function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}
function not_function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}