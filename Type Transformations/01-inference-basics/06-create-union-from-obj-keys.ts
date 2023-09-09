/**
 * Takeaway: the combination of keyof and typeof is really useful since since
 * you can grab the type off of the runtime construct instead of the extra step
 * of creating a type.
 * */

const testingFrameworks = {
	vitest: {
		label: 'Vitest',
	},
	jest: {
		label: 'Jest',
	},
	mocha: {
		label: 'Mocha',
	},
};

type Types = typeof testingFrameworks;
// To create a union type of only the keys of testingFramework object, we
// need to use the keyof operator to iterate over each of the top-level keys.
type TestingFramework = keyof Types;

// Order Matters!
// This won't work! 
//type TestingFramework = typeof keyof testingFrameworks;

// The reason this won’t work is because keyof only works on actual types,
// instead of working on runtime code like typeof does.

// Using keyof on its Own
type TestingFrameworks2 = {
	a: string;
	b: string;
	c: string;
};

//In this case, TestingFramework would be "a" | "b" | "c".
type TestingFramework2 = keyof TestingFrameworks2;
const c: TestingFramework2 = 'c';
// Err: Type "d" is not assignable to type 'keyof TestingFrameworks2'.
const d: TestingFramework2 = 'd';


