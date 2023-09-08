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

type MakeQueryParameters = Parameters<typeof makeQuery>;
// Useful for extracting types from functions in third party libraries or code that you don't own
type MakeQueryParametersFirstArg = Parameters<typeof makeQuery>[0];
type MakeQueryParametersSecondArg = Parameters<typeof makeQuery>[1];