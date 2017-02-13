/* Console 
var console = {};
console.log = function(){};
window.console = console;
console.info
console.warn
console.error
*/

/* Overwrite console.log */
(function () {
  let old = console.log;
  let logger = document.getElementById('console')
  console.log = function (message) {
    if (typeof message == 'object') {
      logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '\n'
    } else {
      logger.value += message + '\n'
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

