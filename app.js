let numbersOfQuestion = 10;
let qCounter = 0;


let solicitation = `Please enter`;
let questionsArray = [
    `${solicitation} your name `,
    `${solicitation} your age `,
    `${solicitation} your city do you live `,
    `${solicitation} your school where you are studying or where you graduated `,
    `${solicitation} a number of your cat(if you have) `,
    `${solicitation} a number of your dog(if you have) `,
    `${solicitation} a behavior of your pet(s) (Friendly or Not Friendly) `,
    `${solicitation} your favorite color `,
    `${solicitation} your favorite desert `,
    `${solicitation} your favorite place `
]

let userInputs = [];
for (let i = numbersOfQuestion; i > 0; i--) {
    console.log(questionsArray[qCounter] + `... (${numbersOfQuestion} questions left)`);
    userInputs.push(prompt(questionsArray[qCounter] + `... (${numbersOfQuestion} questions left)`))

    console.log(userInputs);
    qCounter++;
    numbersOfQuestion--;
}

let theStory = `<h2>My name is ${userInputs[0]}, I am ${userInputs[1]} years old and I'm from ${userInputs[2]} city. I studied in ${userInputs[3]}. I am a owner of ${userInputs[4]} cat(s) and ${userInputs[5]} dog(s), cat(s) and dog(s) are ${userInputs[6]} to other people. My favorite color is ${userInputs[7]} and my favorite desert is ${userInputs[8]} and favorite place is ${userInputs[9]} thats all thank you.</h2>`;

console.log(theStory);

alert("All done thank you!");