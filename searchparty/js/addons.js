// Returns a random integer between min (included) and max (excluded)
// example: getRandomInt(0, 20) will give you
// numbers between 0 (included) and 20 (excluded)
// or you could say numbers between 0 (included) and 19 (included)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}