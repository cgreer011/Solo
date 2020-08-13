function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {  
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) { // LinkedList.push(B)
// Head should be equal to the value of the first node
//

};
// Node.value = A
// Node.next(B)// B
// Node.next(LinkedList.tail)
// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {

};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {

};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
