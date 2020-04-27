/*============================================
; Title: Assignment 1.3
; Author: Richard Krasso
; Date: 27 April 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; function class and object literal
===========================================
*/
var header = require('../Rivas-header.js');

/*
 Expected output:
Car added to the racetrack!
Truck added to the racetrack!
Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program
function Car(model)
{
    this.model = model;
}
Car.prototype.start = function()
{
    console.log("Car added to the racetrack!");
}
function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function()
{
    console.log("Truck added to the racetrack!");
}
function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function()
{
    console.log("Jeep added to racetrack!")
}
var racetrack = [];

function driveIt(vehicle)
    {
        vehicle.start();
        racetrack.push(vehicle);
    }
var fusion = new Car("Fusion");
var dodge = new Truck("Ram1500", "2010");
var cherokee = new Jeep("Cherokee", "2019", "Black");

console.log("");

driveIt(fusion);
driveIt(dodge);
driveIt(cherokee);

console.log('\n -- The following vechiles have been added to the racetrack --');
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
