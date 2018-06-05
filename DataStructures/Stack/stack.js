// Creating Stack as an Example

var Stack = function(){
    this.count = 0;
    this.storage = {};

    //Add value at the end of stack
    this.push = function(val){
        this.storage[this.count]= val;
        this.count++;
    }

    //Remove and return value from the end of stack
    this.pop = function(){
        if(this.count===0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    //Return the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());