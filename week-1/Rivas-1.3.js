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

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
 Storage: <storage>


*/

// start program
function CellPhone(manufacturer, model, color, price,storage) 
{
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.price = price;
        this.storage = storage;

        //get price
        this.getPrice = function()
{
        return this.price;
}
        //get model
        this.getModel = function()
{
        return this.model;
}
        //get storage
        this.getStorage = function() 
 {
        return this.storage;
 }
        //get details
        this.getDetails = function()
{
        return "Manufacturer: " + this.manufacturer + "\nModel" + this.getModel() +
                "\nColor: " + this.color + "\nPrice: " + this.getPrice() + "\nStorage" + getStorage();
        };

var CellPhone = new CellPhone("Apple", "iPhone 11 Max Pro", "Space Gray", "1199.99", "256mb");
console.log(cellPhone.getDetails());
    }

// end program