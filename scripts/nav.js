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
    console.log(component)
    let main = document.getElementById('main')
    
    // clear innerHTML
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }

    let element = document.createElement(component)
    main.appendChild(element)
}
