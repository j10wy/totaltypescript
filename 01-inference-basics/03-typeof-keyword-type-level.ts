const makeQuery = (
	url: string,
	opts?: {
		method?: string;
		headers?: {
			[key: string]: string;
		};
		body?: string;
	},
) => { };

// Useful for extracting types from functions in third party libraries or code
// that you don't own. Hovering over MakeQueryParameters, you can see that it
// returns a tuple with "url: string" and the optional "opts?"" object.
type MakeQueryParameters = Parameters<typeof makeQuery>;
type MakeQueryParametersFirstArg = Parameters<typeof makeQuery>[0];
type MakeQueryParametersSecondArg = Parameters<typeof makeQuery>[1];