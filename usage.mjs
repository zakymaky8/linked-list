import { LinkedList } from "./linkedlist.mjs";

const linkedlist = new LinkedList();
// append method
linkedlist.append(0)
linkedlist.append(1)

// pop method
linkedlist.pop()
linkedlist.pop()
linkedlist.pop()

// prepend method

linkedlist.prepend(9)
linkedlist.prepend(10)
linkedlist.prepend({name: 'john', age: 30})

// size
// console.log('size: ',linkedlist.size);

// at(index)

console.log(linkedlist.at(0))
console.log(linkedlist.at(1))
console.log(linkedlist.at(2))


// contains(value)

console.log(linkedlist.contains(9))
console.log(linkedlist.contains(119))

// find(vaue)
console.log(linkedlist.find(9))
console.log(linkedlist.find(111))

// toString()

console.log(linkedlist.toString());


// insertAt(value, index)

linkedlist.insertAt(7, 1)
console.log(linkedlist.toString());

//  removeAt(index)
linkedlist.removeAt(1);
console.log(linkedlist.toString())

// there you go
