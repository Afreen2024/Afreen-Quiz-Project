import { log } from "console";
import inquirer from "inquirer"

const quiz:{
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string; 
}=await inquirer.prompt([
    {
name: "question_1",
type: "list",
message:"what is typescript",
choices:["language","apps","website"]
},
{
    name: "question_2",
    type: "list",
    message:"______ is similar to 'any', but a safer alternative when uncertain about the type.",
    choices:["unkown","similar","never"]
    },

    {
        name: "question_3",
        type: "list",
        message:"True or False: TypeScript can always correctly infer a variables type.",
        choices:["true","false"]
        },
        {
            name: "question_4",
            type: "list",
            message:"What are the three main 'simple types' in TypeScript?",
            choices:["array. object .function","S.N.B","O.S.N","O.A.symbol"]
            },
            {
                name: "question_5",
                type: "list",
                message:"What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
                choices:["implicit", "explicit"]
                },
]);
let score:number=0;
switch(quiz.question_1){
    case"unkown":
    console.log("1.correct!")
    ++score;
    break;
    default;
    console.log("1.incorrect");
}
    switch(quiz.question_2){
        case"false":
        console.log("2.correct!")
        ++score;
        break;default;
        console.log("2.incorrect");
    }
        switch(quiz.question_3){
            case"language":
            console.log("3.correct!")
            ++score;
            break;
            default;
        }
            console.log("3.incorrect");
            switch(quiz.question_4){
                case"S.N.O":
                console.log("4.correct!")
                ++score;
                break;default;
                console.log("4.incorrect");
            }
                switch(quiz.question_5){
                    case"expilict":
                    console.log("5.correct!")
                    ++score;
                    break;
                    default;
                    console.log("5.incorrect");
                }

        
console.log(`Score:${score}`)