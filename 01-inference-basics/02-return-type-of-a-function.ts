/**
 * The pattern here is a really powerful, as it allows us to extract types from
 * runtime code instead of declaring them manually. Anything we add to to our
 * function myFunc will then be reflected in the type.
 * 
 * Found solution at
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
 */

const myFunc = () => {
	return 12;
}

function myFunc2() {
	return "12";
}

type MyFuncType = typeof myFunc;
// Return type is a utility type that is globally available in TS.
type MyFuncReturnType = ReturnType<MyFuncType>;

type MyFuncType2 = typeof myFunc2;
type MyFuncReturnType2 = ReturnType<MyFuncType2>;