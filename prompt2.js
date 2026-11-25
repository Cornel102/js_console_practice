//Accept a input from the user. If it is a number print the multiplication table for the number. 

let user_input = prompt('Enter a number');

//Check if the user input is a number

if(!isNaN(user_input)) {

    //Using for loop for the repetitive statement

    for (let i=0; i<10; i++) {

        console.log(user_input, " X ", i, " = ", user_input*i)

    }

}