/* Console 
var console = {};
console.log = function(){};
window.console = console;
console.info
console.warn
console.error
*/

// console.log
(function () {
  let _log = console.log
  //let _error = console.error
  //let _warning = console.warning

  let output = document.getElementById('console')

  window.onerror = function (msg, url, lineNo, columnNo, error) {

    var string = msg.toLowerCase();
    var substring = "script error";

    if (string.indexOf(substring) > -1) {
        print('Script Error: See Browser Console for Detail')
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');

        print(message)
    }
    
    return false // surpress error in console
  }

  console.log = function (msg) {
    print(msg)
  }

  function print(msg) {
    if (typeof msg == 'object') {
      output.value += (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + '\n'
    } else {
      output.value += msg + '\n'
    }    
  }

})();

function runCode() {
  let logger = document.getElementById('console')  
  let src = document.getElementById('src').value
  logger.value = ''

  eval(src)
}


/* my code dictionary */
const keys = new Map([
  ['Tab', 'Tab'],
  ['\'', '\''],
  ['\"', '\"'],
  ['(', ')'], 
  ['[', ']'], 
  ['{', '}'], // trailing comma ignored
])

document.querySelector('textarea').addEventListener('keydown', function(e) {

  if (keys.has(e.key)) {
    // get caret pos
    let start   = this.selectionStart;
    let end     = this.selectionEnd;

    let target  = e.target;
    let value   = target.value;

    if (e.key === 'Tab') {
      // set textarea value to: text before caret + tab + text after caret
      target.value = `${value.substring(0, start)}  ${value.substring(end)}`
      // put caret at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 2;
    } else {
      target.value =  value.substring(0, start) +
                      e.key +
                      keys.get(e.key) +   
                      value.substring(end)

      // put caret at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 1;
    }

    // prevent the focus lose
    e.preventDefault();
  } 

}, false);

