function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto",1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Student(Grade, Gender, Age, GPA) {
    this.Student_Grade = Grade;
    this.Student_Gender = Gender;
    this.Student_Age = Age;
    this.Student_GPA = GPA;
}
var Bob = new Student(" Senior", "Male", 17, 3.3);
var Sarah = new Student("Freshman", "Female", 14, 3.8)
function myFunction2(){
    document.getElementById("New_and_This").innerHTML = "Bob is a " + Bob.Student_Gender + Bob.Student_Grade + " who is " + Bob.Student_Age + " years old and has a GPA of " + Bob.Student_GPA;

}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1}
        Plus_one();
        return Starting_point;

    }
}