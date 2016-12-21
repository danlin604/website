//Palindrome
document.write("Palindrome Algorithm<br><br>");

var test1 = "Anna";
var test2 = "AnaNa";
var test3 = "H e   nr   y";
var test4 = "Eva Can I Stab Bats In A Cave";

function palindrome(s) {
	s = s.toLowerCase();
	s = s.replace(/\s/g,'');
	var mid = Math.floor(s.length/2);

	for (count = 0; count <= mid; count++) {
		if (s.charAt(count) !== s.charAt(s.length - 1 - count)) {
			return -1;	// Is not palindrome
		}
	}
	return 1;			// Is palindrome
}

//Test cases
document.write("Test: " + test1 + "<br>");
document.write(palindrome(test1));
document.write("<br>");
document.write("Test: " + test2 + "<br>");
document.write(palindrome(test2));
document.write("<br>");
document.write("Test: " + test3 + "<br>");
document.write(palindrome(test3));
document.write("<br>");
document.write("Test: " + test4 + "<br>");
document.write(palindrome(test4));
document.write("<br>");