const courseList = [
    {code: "ACIT 1420", name: "Introduction to Systems Administrator"},
    {code: "ACIT 1620", name: "Fundamental Web Technologies"},
    {code: "ACIT 1630", name: "Database Systems"}
]



// Do while loop that asks the user for a 4 digit number and makes sure the entered number isn't and a string and has a length greater than 3 //

let userInput;
do{
    userInput = prompt("Enter a 4 digit number:");
    console.log(userInput);

} while (isNaN(userInput) || userInput.length < 4);
