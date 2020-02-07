const memory = require("./memory");
const Array = require("./array");

function main() {
	Array.SIZE_RATIO = 3;

	// Create an instance of the Array class
	let arr = new Array();

	// Add an item to the array
	arr.push(3);
	console.log(arr);

	// 2. Explore the push() method
	console.log("push()");
	arr.push(5);
	arr.push(15);
	arr.push(19);
	arr.push(45);
	arr.push(10);
	console.log(arr);

	// 3. Exploring the pop() method
	console.log("pop()");
	arr.pop();
	arr.pop();
	arr.pop();
	console.log(arr);

	// 4. Understanding more about how arrays work
	console.log("Print the 1st item in the array");
	console.log(arr.get(0));
}

main();
