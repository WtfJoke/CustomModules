const yoMamma = require('yo-mamma').default;

/**
 * Describes the function
 * @arg {CognigyScript} `name` An argument of type CognigyScript
 * @arg {CognigyScript} `store` Where to store the result
 */
async function getJokes(input: IFlowInput, args: { name: string, store: string }): Promise<IFlowInput | {}> {
	// Check if secret exists and contains correct parameters  
	if (!args.name) return Promise.reject("Please enter a valid name");

	// check if necessary arguments are present
	if (!args.store) return Promise.reject("Please provide a valid context");

	// Always return a Promise
	// A resolved Promise MUST return the input object
	// A rejected Promise will stop Flow execution and show an error in the UI, but not the channel
	return new Promise((resolve, reject) => {
		let joke = `${args.name} ${yoMamma()}`;
		input.actions.output(joke, {})
		resolve(input);
	});
}

// You have to export the function, otherwise it is not available
module.exports.getJokes = getJokes;