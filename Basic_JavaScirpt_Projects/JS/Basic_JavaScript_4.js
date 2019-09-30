function my_Dictionary() {
    var Car = {
        body:"truck",
        color:"black",
        manufacturer:"Ford",
        year: 2019,
        model:"F-150"
    };
    delete Car.body;
    document.getElementById("Dictionary").innerHTML = Car.body;
}
