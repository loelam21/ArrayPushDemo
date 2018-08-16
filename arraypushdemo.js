//build an array that stores first and last names. The default value of the array wil be empty.
var firstName = [];
var lastName = [];
//ask user for a first name and store it in the first names array
var askFirst = prompt("Enter your first name");
firstName.push(askFirst);
//ask user for a last name and store it in the last names array
var askLast = prompt("Enter your last name");
lastName.push(askLast);
//display to the window both first and last name from the array with the length of the both arrays.
window.alert(firstName[0] + " " + lastName[0] + " " + firstName.length + "," + lastName.length); //write [0] b/c u want to display the first things first