#! /usr/bin/env node
import inquirer from 'inquirer';
let marks = await inquirer.prompt([
    { message: "Enter English numbers:",
        type: "number",
        name: "English" },
    { message: "Enter Urdu numbers:",
        type: "number",
        name: "Urdu" },
    { message: "Enter Islamiat numbers:",
        type: "number",
        name: "Islamiat" },
    { message: "Enter Maths numbers:",
        type: "number",
        name: "Maths" },
    { message: "Enter Biology numbers:",
        type: "number",
        name: "Biology" },
    { message: "Enter Chemistry numbers:",
        type: "number",
        name: "Chemistry" },
    { message: "Enter Physics numbers:",
        type: "number",
        name: "Physics" }
]);
const totalmarks = 550;
console.log('TotalMarks:', totalmarks);
const ObtainedMarks = marks.English + marks.Urdu + marks.Islamiat + marks.Maths +
    marks.Biology + marks.Chemistry + marks.Physics;
console.log('ObtainedMarks:', ObtainedMarks);
const Percentage = ObtainedMarks / totalmarks * 100;
console.log('Percentage:', Percentage);
if (Percentage >= 80) {
    console.log(`Your Obtained Percentage is ${Percentage}%
    Congratulations! you got Grade: "A+"`);
}
else if (Percentage >= 70) {
    console.log(`Your Obtained Percentage is ${Percentage}% 
    Congratulations! you got Grade: "A"`);
}
else if (Percentage >= 60) {
    console.log(`Your Obtained Percentage is ${Percentage}%
    Congratulations! you got Grade: "B"`);
}
else if (Percentage >= 50) {
    console.log(`Your Obtained Percentage is ${Percentage}%
    ! you got Grade: "C"`);
}
else if (Percentage >= 40) {
    console.log(`Your Obtained Percentage is ${Percentage}%
    Congratulations! you got Grade: "Pass"`);
}
else {
    console.log('Sorry! you are Fail');
}
;
