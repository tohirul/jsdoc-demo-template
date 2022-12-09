"use-strict";
import { add, divide, multiply, subtract } from "./calculator";
// const { add, divide, multiply, subtract } = require("./calculator");
/**
 * Data types.
 * Primitives and Objects
 ** 7 primitive Data Types Number Null String Symbol Boolean Bigint Undefined oiooooo
 */

/**
 * @file index.js is the root file of this app
 * @author "Tohir"
 * @copyright <a href="https://www.facebook.com/tohir.islam.noel/">Tohirul Islam</a>
 */

/**
 * First Name
 * @type {string}
 */
const firstName = "Tohirul";

/**
 * Array of ages
 * Array of Numbers
 * @type {Array<number>}
 */
const age = [26, 15, 9, 10];

/**
 * Object Describing Person
 * @type {{id:number,name:string}}
 */
const person = {
	id: 1,
	name: "Tohir",
};

/**
 * @type {function} - to count total amount
 * @param {number} amount - inserted amount
 * @param {number} taxPercentage - Percentage for tax
 * @returns {string} - return value of total amount
 */
const taxData = (amount, taxPercentage) => {
	return `$${amount + taxPercentage * amount}`;
};

console.log(
	`The total amount is {taxData(100004545, 0.5)}`
	// typeof taxData(1999, 0.5)
);

/**
 * @typedef {Object} User
 * @property {number} id - User ID
 * @property {string} name - User Name
 * @property {string|number} [age] - User age
 * @property {boolean} isActive - Is User active
 */

/**
 * @type {User}
 */
const user = {
	id: 234,
	name: "John Doe",
	age: 23,
	isActive: false,
};

/**
 * A Class to create a Person Object
 */
class Person {
	/**
	 * @param {Object} personInfo - Carries the information about a person
	 */
	constructor(personInfo) {
		/**
		 * @property {string} name - Persons Name
		 */
		(this.name = personInfo.name),
			/**
			 * @property {number} age - Persons Age
			 */
			(this.age = personInfo.age),
			/**
			 * @property {boolean} isMarried - Persons Marital Status
			 */
			(this.isMarried = personInfo.married);
	}
	/**
	 * @property {function} greet - An Introduction sentence
	 * @returns void
	 */
	greet() {
		console.log(
			`Hello my name is ${this.name}, I am ${this.age} and I am ${
				this.isMarried ? "married" : "not married"
			}.`
		);
	}
}

/**
 * See {@link Person}
 */
const tohir = new Person({
	name: "Jason Doe",
	age: 24,
	married: false,
});
tohir.greet();

/**
 * Invoking @type {function} - add
 * @param {number} param
 * @param {number} param
 * @returns {number}
 */
/** See {@link add} */
const addition = add(4, 4);
console.log(addition);

/**
 * Invoking @type {function} - subtract
 * @param {number} param 54
 * @param {number} param 4
 * @returns {number}
 */
/**
 * See {@link subtract}
 */
const subtraction = subtract(54, 4);

/**
 * Description
 * @param {number} param
 * @param {number}  param
 * @returns {number}
 */
/**
 * See {@link multiply}
 */
const multiplication = multiply(3, 8);

/**
 * Description
 * @param {number} param
 * @param {number} param
 * @returns {number}
 */
/**
 * See{@link divide}
 */
divide(77, 14);
