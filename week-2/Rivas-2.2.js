
/*============================================
; Title: Assignment 2.3
; Author: Richard Krasso
; Date: 4 May 2020
; Modified By: Rhonda Rivas
; Description:  This program demonstrates the
; prototypes
===========================================
*/
// start program
var person =
{
    getAge: function ()
    {
        return this.age;
    }
};

var luke = Object.create(person, {
    "age":
    {
        "value": "20"
    },
    "fullname": 
    {
        "value": "Luke Skywalker"
    }
});

console.log("Luke's full name is: '%s'",luke.fullname);
console.log("Luke's age is '%s'", luke.age);


// end program