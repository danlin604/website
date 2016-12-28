/* Tree Traversal & Creation
 * Credits go to Cho S. Kim for his tutorial:
 * https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393 
 * /

/* Functions are declared here */

// Tree ctor
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

// DFS
Tree.prototype.traverseDF = function(callback) {
    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        } 
        // step 4
        callback(currentNode);         
        // step 1
    })(this._root);
};

// BFS
Tree.prototype.traverseBF = function(callback) {
    var queue = [];
    queue.push(this._root);
    currentNode = queue.shift();

    while(currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            queue.push(currentNode.children[i]);
        }
        callback(currentNode);
        currentNode = queue.shift();
    }
};

// Add node to tree
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }

};

// Remove node from tree 
Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    } 
    return childToRemove;
};

function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}


/* Executer code here */

/* 
creates this tree:

 one (depth: 0)
 ├── two (depth: 1)
 │   ├── five (depth: 2)
 │   └── six (depth: 2)
 ├── three (depth: 1)
 └── four (depth: 1)
     └── seven (depth: 2)
*/

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];


/* Execution output appears here */

// DFS
document.write("<br>traverseDF<br>");
tree.traverseDF(function(node) {
    document.write(node.data + "<br>");
});

// BFS
document.write("<br>traverseBF<br>");
tree.traverseBF(function(node) {
    document.write(node.data + "<br>");
});

// Add
var tree = new Tree('CEO');
 
tree.add('VP of Happiness', 'CEO', tree.traverseBF);
tree.add('VP of Finance', 'CEO', tree.traverseBF);
tree.add('VP of Sadness', 'CEO', tree.traverseBF);
 
tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF); 
/* 
 tree:
 
 'CEO'
 ├── 'VP of Happiness'
 ├── 'VP of Finance'
 │   ├── 'Director of Puppies'
 │   └── 'Manager of Puppies'
 └── 'VP of Sadness' 
 */
document.write("<br>Add nodes to tree<br>");
tree.traverseBF(function(node) {
    document.write(node.data + "<br>");
});


// Remove node

tree.remove('Director of Puppies', 'VP of Finance', tree.traverseBF);
document.write("<br>Remove a node<br>");

tree.traverseBF(function(node) {
    document.write(node.data + "<br>");
});



 
