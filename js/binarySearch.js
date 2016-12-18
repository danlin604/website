//Binary Search
document.write("Binary Search Algorithm<br><br>");

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
	var mid;

	while (max >= min) {
		mid = Math.floor((max+min)/2);

		if (primes[mid] < targetValue) {			// Search higher
			min = mid + 1;

		} else if (primes[mid] > targetValue) {		// Search lower
			max = mid - 1;

		} else if (primes[mid] === targetValue) {	// Found
			document.write("found=" + primes[mid] + " @" + mid + "<br>");
			return 1;

		} else {
			document.write("ERROR <br>");
		}
	}
	return -1;
}

//Test cases
document.write("#targetValue = 2 <br>");
binarySearch(primes,2);
document.write("<br>");

document.write("#targetValue = 41 <br>");
binarySearch(primes,41);
document.write("<br>");

document.write("#targetValue = 43 <br>");
binarySearch(primes,43);
document.write("<br>");

document.write("#targetValue = 97 <br>");
binarySearch(primes,97);
document.write("<br>");

document.write("#targetValue = invalid <br>");
binarySearch(primes,300);
document.write("<br>");
