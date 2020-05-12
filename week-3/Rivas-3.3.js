/*============================================
; Title: Assignment 3.3
; Author: Richard Krasso
; Date: 11 May 2020
; Modified By: Rhonda Rivas
; Description: This program demonstrates the
; Singleton Pattern
===========================================
*/
var header = require('../header.js');
/*
 Expected output:

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function() {
    var instance;
     function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
            instance = createInstance();
    }
        return instance;
        }
    }
   })();
   
function databaseSingletonTest()
{
   var testInstance1 = DatabaseSingleton.getInstance();
   var testInstance2 = DatabaseSingleton.getInstance();

   console.log("same database instance? %s ", testInstance1 === testInstance2);
}   databaseSingletonTest();


// end program