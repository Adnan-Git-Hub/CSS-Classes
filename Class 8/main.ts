// unary operators   jis main 1 number add hu raha hu ya phir kam hu raha hu usko unary operator bole ge
// post increment next step pr results show kre ga jabke pre increment usi step pr increment ker k results show kr de ga.
let a = 5;
let b = 6;
++a  // pre increment
--b   // pre decrement
let c = 5;
let d = 6;
c++  // post increment
d--   // post decrement

let e = 5;
let f = 2;
let g = ++e + e++ + --f + f-- + e + f++ + f;
//  6+6+7  1+1+0+1 = 22
console.log(g)

let h = 4;
let i = 7;
let j = ++h + --h + ++i + --h + ++h + ++i + i + ++h + h + --i + h + --h + i++;
// 5+4+3+4+5+5+5+4   8+9+9+8+8  = 77
console.log(j)

// combining operators    jis ma () square / * + - sab sath hun ya 2 ya 2 se zayada operators ak sath hun es main BODMAS lge ga
let results = 3 + 4 * 5;   
console.log(results);   // the result will be 23  not 35

// addition calculator
import inquirer from "inquirer";

const input1 = await inquirer.prompt({
  name: "num1",
  type: "number",
  message: "kindly enter your first no:"
});

const input2 = await inquirer.prompt({
  name: "num2",
  type: "number",
  message: "kindly enter your second no:"
});
let total:number = input1.num1 + input2.num2
console.log(total);


// Here's a simple BMI (Body Mass Index) calculator implemented in TypeScript:
// You can use it by providing the height in centimeters and the weight in kilograms. 
// Finally, it prints the calculated BMI along with its interpretation.
class BMICalculator {
    static calculateBMI(height: number, weight: number): number {
        // Formula: BMI = weight(kg) / (height(m))^2
        const heightInMeters = height / 100; // Convert height from cm to meters
        return weight / (heightInMeters * heightInMeters);
    }

    static interpretBMI(bmi: number): string {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
}

// Example usage
const height = 170; // in cm
const weight = 70; // in kg

const bmi = BMICalculator.calculateBMI(height, weight);
const interpretation = BMICalculator.interpretBMI(bmi);

console.log(`BMI: ${bmi.toFixed(2)} (${interpretation})`);

// asignment operator 
let abc = 5;      // = is a asignment operator
c += 5;
c= c+5;
// same as - / * % other operators 

// comparison operators   comparison operator ma results hamesha true ya false he aye ga yani k boolean
// 5 == 2 is false;    equel to
// 5 != 2 is true;    not equel to
// 5 > 2  is true;     greater then
// 5 < 2  is false;     less then

