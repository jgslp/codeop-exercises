// 1. Print all even numbers in the numbers array below, but increment all odd numbers by 1. Push each incremented value into the incrementedNumbers array. Use a for...of loop.
// const numbers = [32, 65, 14, 88, 5, 73, 105, 521, 556];
// const incrementedNumbers = [];

// for (number of numbers) {
//     if (number % 2 === 0) {
//         incrementedNumbers.push(number);
//     } else {
//         incrementedNumbers.push(number + 1);
//     }
// }

// console.log({ incrementedNumbers });

// 2. Use a for...of loop to compute the year of birth of each user in the users array. 
// Then, add the following key-value pair to each object in the users array.
// yearOfBirth: computedValue

const users = [
	{
		name: "Vanya",
		age: 16,
		job: "student",
	},
	{
		name: "Carlos",
		age: 30,
		job: "developer",
	},
	{
		name: "Alex",
		age: 17,
		job: "student",
	},
	{
		name: "Laila",
		age: 33,
		job: "developer",
	},
	{
		name: "Julian",
		age: 22,
		job: "manager",
	},
];

let now = new Date ();
let year = now.getFullYear();
let birthYear;

for (const user of users) {
    birthYear = year - user.age;
    console.log(birthYear);
}

for (const user of users) {
    user.yearOfBirth = birthYear;
}
console.log(users);

// 3. Use a for...of loop to print the following sentence for only users who are not students.
// "<name> is <age> years old and is a <job>."