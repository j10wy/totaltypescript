const getUser = () => {
	return Promise.resolve({
		id: "123",
		name: "John",
		email: "john@example.com",
	});
};

type ReturnValueAsPromise = ReturnType<typeof getUser>;
// Use the Awaited type helper to get the return value from inside the Promise.
// Here we have two layers of nesting (Awaited>ReturnType). You can go as deep
// as you want. Think of this as functions that call other functions
// in JavaScript.
type ReturnValueAwaited = Awaited<ReturnValueAsPromise>;