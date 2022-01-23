//Grabbing the input element
const input = document.getElementById('input');

//Creating arrays that contain ALL upper letters, lower letters, numbers and special characters
const upperLetters = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", 
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerLetters = ["a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const specialChar =  `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`; 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//grabbing the remaining elements
const upperText = document.getElementById('upperText');
const lowerText = document.getElementById('lowerText');
const symbolsText = document.getElementById('symbolsText');
const numbersText = document.getElementById('numbersText');

//Once the user presses the input button something happens...
input.addEventListener("keyup", (e)=>{
    //set counter to 1 => counter allows us to determin if the password is "weak", "medium" or "great".
    let counter = 1;

    //simply grabbing the input value and assigning it to a local scope variable called ''password'
    let password = input.value;

    //check length of password (less than 5) => RED
    if(password.length < 5){
        counter = counter + 0;
        checker(counter)
    }



    //check length of password (less than 5) => AMBER
    if((password.length > 8) && (password.length < 10)){
        counter = counter + 2
        checker(counter)
    }



    //check length of password (less than 5) => GREEN
    if(password.length >= 13){
        counter = counter + 3;
        checker(counter)
    }



    //check for special characters
    if(specialChar.split('').some(char => password.includes(char))){
        counter = counter + 3;
        symbolsText.style.color = "green";
        symbolsText.style.transition = "2s";
        checker(counter);
    } else {
        symbolsText.style.color = "black";
        symbolsText.style.transition = "1s";
    }



    //check for upper case letters
    if(upperLetters.some(char => password.includes(char))){
        counter = counter + 2;
        upperText.style.color = "green";
        upperText.style.transition = "2s";
        checker(counter);
    } else {
        upperText.style.color = "black";
        upperText.style.transition = "1s";
    }




    //check if password has numbers
    if(numbers.some(char => password.includes(char))){
        counter = counter + 1;
        numbersText.style.color = "green";
        numbersText.style.transition = "2s";
        checker(counter);
    } else {
        numbersText.style.color = "black";
        numbersText.style.transition = "1s";
    }



    //check if password has lower case letters
    if(lowerLetters.some(char => password.includes(char))){
        counter = counter + 2;
        lowerText.style.color = "green";
        lowerText.style.transition = "2s";
        checker(counter);
    } else {
        lowerText.style.color = "black";
        lowerText.style.transition = "1s";
    }


});

/**
 * Checker funtion takes the 'counter' parameter and checks if it's less than 3, greater than 7 greater than 10.
 * Javascript effects the DOM by changing it to red,yellow or green, depending on the counter score
 */
function checker(counter){
    console.log(counter);
    if(counter < 3){
        const strength = document.getElementById('strength')
        strength.style.background = "red";
        strength.style.width = "100px";
        strength.style.transition = "2s";
        strength.innerHTML = "Weak";
        strength.style.border = "2px solid black";
        strength.style.borderRadius = "10px";
    }

    if(counter > 7){
        const strength = document.getElementById('strength')
        strength.style.background = "yellow";
        strength.style.width = "190px";
        strength.style.transition = "2s";
        strength.innerHTML = "Medium";
        strength.style.border = "2px solid black";
        strength.style.borderRadius = "10px";

    }

    if(counter > 10){
        const strength = document.getElementById('strength')
        strength.style.background = "green";
        strength.style.width = "300px";
        strength.style.transition = "2s";
        strength.innerHTML = "Great";
        strength.style.border = "2px solid black";
        strength.style.borderRadius = "10px";
    }
}

/**
 * showPassword grabs the input type and changes it from 'password' to 'text', vice versa, once the user presses a specifc button within the HTML
 */
function showPassword(){
    let show_hide = input
    if(show_hide.type === "password"){
        show_hide.type = "text";
    } else {
        show_hide.type = "password";
    }
}