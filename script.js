//Simple BMI Calculation
//Height is in "meters" and Weight is in "KG"

const userOneHeight = 1.69;
const userOneWeight = 78;
const userOneBmi = userOneWeight / (userOneHeight * 2);

const userTwoHeight = 1.95;
const userTwoWeight = 92;
const userTwoBmi = userTwoWeight / (userTwoHeight * 2);
console.log(userOneBmi, userTwoBmi);

if(userOneBmi > userTwoBmi) {
    console.log(`User ONE has higher BMI`);
} else {
    console.log(`User TWO has higher BMI`);
}