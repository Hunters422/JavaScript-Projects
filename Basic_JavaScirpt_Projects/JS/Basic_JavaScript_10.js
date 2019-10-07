function Call_loop() {
    var digit = "";
    var x = 1;
    while (x < 5) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}
function function1() {
    var str = "I would like to know how many characters are in this string.";
    var n = str.length;
    document.getElementById("function").innerHTML = n;
}
    var music = ["guitar", "drums", "piano", "bass", "violin", "flute"];
    var content = "";
    var Y;
function function2 () {
    for (Y = 0; Y < music.length; Y++) {
        content += music[Y] + "<br>";
    }
    document.getElementById("music").innerHTML = content;
}
function cat_picture() {
    var Cat_picture = [];
    Cat_picture[0] = "sleeping";
    Cat_picture[1] = "playing";
    Cat_picture[2] = "eating";
    Cat_picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_picture[3] + ".";
}
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}
var x = 100;
document.write(x);
{
    let x = 124;
    document.write("<br>" + x);
}
document.write("<br>" + x);


var p = hard(4);
function hard(a) {
    return a;
}
document.getElementById("demo").innerHTML = p;

let car = {
    make: "Dodge ",
    model: "Viper ",
    year:"2021 ",
    color: "red ",
    description : function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if(i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("example1").innerHTML = text;

for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }

