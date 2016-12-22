//Palindrome
document.write("Population Peak<br><br>");

var birth = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000];
var death = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
var range;
var low;
var high;

function weighPopulation(birth, death) {
	low = 9999;
	high = 0;
	for (i = 0; i < birth.length; i++) {
		if (birth[i] < low) {
			low = birth[i];
		}
		if (death[i] > high) {
			high = death[i];
		}
	}

	range = new Array(high - low + 1);
	range.fill(0);
	for (j = 0; j < birth.length; j++) {
		var begin 	= birth[j] - low;
		var end 	= death[j] - low;
		for (k = begin; k <= end; k++) {
			range[k]++;
		}
	}
}

function populationPeak(range) {
	var max = 0;
	for (m = 0; m < range.length; m++) {
		if (range[m] > max) {
			max = range[m];
		}
	}

	for (n = 0; n < range.length; n++) {
		var date = low + n;
		if (range[n] === max) {
			document.write("Population peaked: " + date + ", " + range[n]);
			document.write("<br>");
		}
	}
}

//Test cases
weighPopulation(birth, death);
for (l = 0; l < range.length; l++) {
	var date = low + l;
	document.write("Year: " + date + ", " + range[l]);
	document.write("<br>");
}
populationPeak(range);

