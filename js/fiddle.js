/* Init */
(function () { // Overwrite onerror and console.log
  let _log = console.log
  let _console = document.getElementById('console')

  window.onerror = function (msg, url, lineNo, columnNo, error) {
    let string = msg.toLowerCase()

    let message = [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error)
    ].join(' - ')

    print(message)
    
    return false // enable error in console 
  }

  // print console.log to textarea
  console.log = function (msg) {
    print(msg)
  }

  // print to textarea
  function print(msg) {
    if (typeof msg == 'object') {
      _console.value += (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + '\n'
    } else {
      _console.value += msg + '\n'
    }    
  }
})()

/* code helper */
const keys = new Map([
  ['Tab', 'Tab'],
  ['\'', '\''],
  ['\"', '\"'],
  ['(', ')'], 
  ['[', ']'], 
  ['{', '}'], // trailing comma ignored
])

function runCode() {
  let logger = document.getElementById('console')  
  let src = document.getElementById('src').value
  logger.value = ''
  eval(src)
}

// read textarea input
document.querySelector('textarea').addEventListener('keydown', function(e) {

  if (keys.has(e.key)) {
    // get caret pos
    let start   = this.selectionStart
    let end     = this.selectionEnd

    let target  = e.target
    let value   = target.value

    if (e.key === 'Tab') {
      // set textarea value to: text before caret + tab + text after caret
      target.value = `${value.substring(0, start)}  ${value.substring(end)}`
      // put caret at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 2
    } else {
      target.value =  value.substring(0, start) +
                      e.key +
                      keys.get(e.key) +   
                      value.substring(end)

      // put caret at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 1
    }

    // prevent the focus lose
    e.preventDefault()
  } 

}, false)

