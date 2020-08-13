// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  //add value into storage with key of the current idx
  this.storage[this.index] = value; // 0:1 //1:2
  //increment idx
  this.index++; //1 //2
};



Stack.prototype.pop = function() {
  // create an empty variable poppy
  // set pop to the last property in the storage object
  let poppy = this.storage[this.index-1]  // 1:2 

  // delete that lasts property in the storage object
  delete this.storage[this.index-1] // 1:2
  
  //decrement this.storage

  this.index --; 

  // return poppy
  return poppy; 
};
  

const x = new Stack(); 
x.push(1)
x.push(2)
console.log(x.storage);
console.log(x.pop()); 
console.log(x.pop());

