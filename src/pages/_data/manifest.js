const fsPromises = require("fs/promises");

module.exports = async () => {
	let result = null;

	if (process.env.ELEVENTY_ENV === "production") {
		result = JSON.parse(await fsPromises.readFile("docs/manifest.json"));
	}

	return result;
};
