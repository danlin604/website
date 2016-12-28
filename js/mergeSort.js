//Merge Sort
document.write("Merge Sort<br><br>");

var list = generateRandomList(100);
list = mergeSort(list);

function mergeSort(ls) {
    if (ls.length < 2) { return ls; }    
   
    var midIdx  = Math.floor(ls.length / 2),
        lhs     = mergeSort(ls.slice(0, midIdx)),
        rhs     = mergeSort(ls.slice(midIdx));

    return merge(lhs, rhs);
}

function merge(lhs, rhs) {
    var merged  = [];
    lIdx        = 0;
    rIdx        = 0;

    while(true) {
        if (rIdx >= rhs.length) {
            return merged.concat(lhs.slice(lIdx));           
        } else if (lIdx >= lhs.length) {
            return merged.concat(rhs.slice(rIdx));            
        } else if (lhs[lIdx] < rhs[rIdx]) {
            merged.push(lhs[lIdx++]);
        } else {
            merged.push(rhs[rIdx++]);
        }        
    }
}

function generateRandomList(length) {    
    list = new Array();
    for (var i = 0; i < length; i++) {
        list.push(getRandomIntInclusive(1, length * 5));        
    }
    return list;
}

// Returns a random integer between min (included) and max (included)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Print
document.write("Length: " + list.length + "<br>");
for (let value of list) {    
    document.write("Value: " + value + "<br>");
}
