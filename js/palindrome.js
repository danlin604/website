//Palindrome
document.write("Palindrome Algorithm<br><br>");

var test1 = "Anna", 
    test2 = "AnaNa",
    test3 = "H e   nr   y",
    test4 = "Eva Can I Stab Bats In A Cave";


function palindrome(s) {
    
	s = s.toLowerCase();
	s = s.replace(/\s/g,'');            // Ignore white-space

	var len = Math.floor(s.length / 2);

	for ( var i = 0; i < len; i++) {
		if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
			return false;
		}
	}
	return true;
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