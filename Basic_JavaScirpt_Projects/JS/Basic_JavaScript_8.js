function concat_ex() {
    var part1 = "My all time ";
    var part2 = "favorite video game ";
    var part3 = "is Skyrim, ";
    var part4 = "though RDR2 is a close second.";
    var whole_sent = part1.concat(part2, part3, part4);
    document.getElementById("id_1").innerHTML = whole_sent;
}
function slice_Method(){
    var sentence = "This one time at band camp..";
    var section = sentence.slice(17,29);
    document.getElementById("Slice").innerHTML = section;
}

function uppercase() {
    var str = "and it is a Great Day to be alive!";
    var string = str.toUpperCase();
    document.write(string);
}
function search() {
    var string1= "mississippi queeeeeeeeeeen";
    var re1 = /n/;
    var re2 = /m/;
    var re3 = /q/;
    document.write(string1.search(re1) + "<br>");
    document.write(string1.search(re2) + "<br>");
    document.write(string1.search(re3));
}
function str_method() {
    var X =852;
    document.getElementById("num_to_str").innerHTML = X.toString();
}
function precision_method() {
    var M = 1456.789054;
    document.getElementById("pre").innerHTML = M.toPrecision(10);
}

/*tofixed function is used to format a number using fixed point notation.
it can be used to format a number with a specific number of digits to the right of the decimal.*/
/*used with a number as shown in syntax using the .dot operator. func will 
format a number using the fixed point notation*/ 
function fixed_method() {
    var test = 165.654794151;
    document.write(test.toFixed(3))
}
/*The valueof() method in JavaScript is used to return the primitive value of a number.
This method is usually called internally by JavaScript and not explicitly in web code.*/
function valueof_method() {
    var num = 64546;
    document.write("Output : " + num.valueOf());
}
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}