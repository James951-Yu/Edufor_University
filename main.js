
function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.opacity = "1";
    navLinks.style.width = "200px"; // Set the height to 'auto' to accommodate dynamic content
    navLinks.style.transition = "opacity 1s, width 1s";

}

function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.opacity = "0";
    navLinks.style.width = "0";
    navLinks.style.transition = "opacity 1s, width 1s";

}




// if statementsamples


let num = 10
if (num > 0) { console.log("it is positive") }
else { console.log("it is negative") }


let nuM = -42
if (nuM % 2 === 0) { console.log("it is even") }
else { console.log("it is odd") }


if (num > nuM) { console.log("num is greater") }
else { console.log("nuM is bigger") }



var score = 75
var grade
if (score >= 85) {
    grade = "A"
}
else if (score >= 75) { grade = "B" }
else if (score >= 60) { grade = "C" }
else { grade = D }

console.log("grade: " + grade)


let age = 35
let ticket
if (age <= 5) {
    ticket = "5 dollars"
}
else if (age <= 18) { ticket = "10 dollars" }
else if (age <= 60) { ticket = "20 dollars" }
else { ticket = "15 dollars" }
console.log("the price of the Ticket is " + ticket)



let year = 2348
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) { console.log(year + " is a leap year") }
else { console.log(year + " is not a leap year") }


var price = 181;
var discount;

if (price >= 100) {
    discount = 20
}
else if (price >= 50) {
    discount = 10
}
else { discount = 0 }

console.log("Discount: $" + discount)


var currentTime = new Date();
var currentHour = currentTime.getHours();
var greeting;
if (currentHour <= 10) { greeting = "good Morning" }
else if (currentHour <= 18) { greeting = "Good afternoon" }
else { greeting = "good night" }
console.log(greeting)



let weight = 62;
let height = 1.78;
var bmi = weight / (height * height);
var catagory;
if (bmi >= 10) { catagory = "B" }
else if (bmi >= 15) { catagory = "A" }
else { catagory = "A++" }
console.log(catagory)
console.log(bmi.toFixed(2))



var secretNumber = 7;
var guess = 10;
if (guess === secretNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else if (guess < secretNumber) {
    console.log("Try a higher number.");
} else {
    console.log("Try a lower number.");
}


// loop exercise 

for (var i = 7; i <= 31; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
for (var i = 12; i <= 24; i++) {
    console.log("Value of i is: " + i);
}



let array1 = [1, 1, 2, 2, 2, 3, 3, 4];
var removeDuplicates = function (data) {
    // function removeDuplicates(data) {
    return [...new Set(data)]
}
console.log(removeDuplicates(array1))


for (let num = 1; num <= 10; num += 2) {
    console.log(num)
}

for (let num = 100; num >= 0; num -= 13) {
    console.log(num)
}

for (let num = 1; num <= 100; num *= 10) {
    console.log(num)
}

for (let num = 100; num >= 1; num /= 10) {
    console.log(num)
}

const animals = ["dog", "cat", "lion", "tiger"]

for (i = 1; i < animals.length; i++) {
    console.log(i, animals[i])
}

for (i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i])
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i += 1) { console.log(i + 1, people[i].toUpperCase()) }



const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanite", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]
console.log(seatingChart);

for (let i = 0; i < seatingChart.length; i++) {
    console.log(seatingChart[i])
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

