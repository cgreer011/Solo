// do not use any native array methods
function Queue() {
    // create a storage
    this.storage = {}; 
    // create a index to keep track of size of queue and first in position
    this.index = 0;
    // create a lowestPosition to keep track of the first out position
    this.lowestIndex = 0; 

}
vaule = 10, 15, 20
Queue.prototype.enqueue = function(value) {
    // add the value into storage at the key of the current index
    this.storage[this.index] = value; 
    // increment the index
    this.index ++; 
};

Queue.prototype.dequeue = function() {
    // if the length of the queue is 0 return undefined
    if(this.index - this.lowestIndex === 0) return undefined; 
    
    //assign result to lowestIndex
    let result = this.storage[this.lowestIndex];  
    //delete the current lowest position storage 
    delete this.storage[this.lowestIndex];
    //increment lowest index value
    this.lowestIndex ++;
    //return result
    return result;
};
