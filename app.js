let numbersOfQuestion = 10;
let qCounter = 0;
let theStory = '';

let sol = `Please enter`;
let questionsArray = [
    `${sol} your name `,
    `${sol} your age `,
    `${sol} place that you live now `,
    `${sol} your school where you are studying or where you graduated `,
    `${sol} a number of your cat(if you have) `,
    `${sol} a number of your dog(if you have) `,
    `${sol} a behavior of your pet(s) (Friendly or Not Friendly) `,
    `${sol} your favorite color `,
    `${sol} your favorite desert `,
    `${sol} your favorite place `
]



let inputOfUser = [];
const res = document.querySelector(".res");
const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    if (res.innerHTML === "") {
        for (let i = numbersOfQuestion; i > 0; i--) {
            console.log(questionsArray[qCounter] + `... (${numbersOfQuestion} questions left)`);
    
            inputOfUser.push(prompt(questionsArray[qCounter] + `... (${numbersOfQuestion} questions left)`))

            console.log(inputOfUser);
            qCounter++;
                numbersOfQuestion--;
        }
        
        theStory += `<h2>My name is <span>${inputOfUser[0]}</span>, I am ${inputOfUser[1]} years old and I'm from <span>${inputOfUser[2]}</span>. I studied in <span>${inputOfUser[3]}</span>. I am a owner of <span>${inputOfUser[4]}</span> cat(s) and <span>${inputOfUser[5]}</span> dog(s), cat(s) and dog(s) are <span>${inputOfUser[6]}</span> to other people. My favorite color is <span>${inputOfUser[7]}</span> and my favorite desert is <span>${inputOfUser[8]}</span> and favorite place is <span>${inputOfUser[9]}</span>, thats all thank you.</h2>`;
    
        console.log(theStory);
        res.innerHTML = theStory;
        btn.innerHTML = "Reload";
    } else {
        location.reload();
    }
});



// lets debug
/*let inputOfUser = [
    "Edward",
    "23",
    "Lucena City",
    "College University",
    "2",
    "1",
    "Friendly",
    "Black",
    "Ice Cream",
    "park"
];*/