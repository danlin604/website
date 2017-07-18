function expandMenu() {
    let nav = document.getElementById('menu')
    
    if (nav.className === 'horizontalNav') {
        nav.className = 'verticalNav'
    } 
    else {
        nav.className = 'horizontalNav'
    }
}

function loadComponent(component) {
    let main = document.getElementById('main')
    
    // clear innerHTML
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }

    let element = document.createElement(component)
    main.appendChild(element)
}

/* Contact Email - Reduce Email Spam */
const decode = function(str) {
    str = str.replace(/[a-z]/gi, function(char) {
        return String.fromCharCode(char.charCodeAt() - 1)
    })
    return str
}

const generateEmailList = function(str) {
    let list = []
    for(let i = 0; i < 16; i++) {
        str = decode(str)
        list.push(str + '@gmail.com')
    }
    list.push('mailto:')
    return list
}

const insertEmail = function(str) {
    let list = generateEmailList(str)    
    let contact = document.getElementById('contact')
    contact.innerText = list[3]
    contact.onclick = function() {
        window.location.href = list[16] + list[3]
    }
}