function LinkedList() {
  this.head = null;
  this.tail = null;
}


// An object for storing a single node of a linked list.
// Models two attributes  - value and the link to the next node in the list

// const n1 = new Node (10)
// const n2 = new Node (20)
// const n3 = new Node (30)
//n1.next = n2; 
//n2.next = n3; 

// console.log(n1.next) // n2
// console.log(n2.next) // n3
// console.log(n1.next.next) //n3


function Node(val) {  
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) { // n1,n2,n3 value = n4
  
  //check if there is a head node
  if(!this.head) {  
    // if not then add a head node to the linked list
    this.head = value; 
  } 

  //declare a varibale,tail, assign to the value
  let newTail = this.head ; //newTail = n1; 
  //find the tail of the linked list
    while(newTail.next !== null) { //n1.next = n2
        // assign the newTail to the next node
        newTail = newTail.next; // newTail = n2, newTail = n3 
    }
      // assign value to the tail of the linkList
      newTail.next = value;
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
