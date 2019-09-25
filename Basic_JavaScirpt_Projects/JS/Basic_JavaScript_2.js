function function1 () {
    var str = "The sky is blue.";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

function function2 () {
    var sentence = "I am not the biggest fan"
    sentence += " of JavaScript lol";
    document.getElementById("Concatenate").innerHTML = sentence;
}