// jlowy: found solution at https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype

const myFunc = () => {
	return 12;
}

function myFunc2() {
	return "12";
}

type MyFuncType = typeof myFunc;
type MyFuncReturnType = ReturnType<MyFuncType>;

type MyFuncType2 = typeof myFunc2;
type MyFuncReturnType2 = ReturnType<MyFuncType2>;