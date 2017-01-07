function FirstReverse(str) { 

  var strTmp = "";    
    
  for (var i = 1, length = str.length; i <= length; i++) {
      strTmp += str.charAt(length - i);
  }  
  str = strTmp;
  
  return str;         
}