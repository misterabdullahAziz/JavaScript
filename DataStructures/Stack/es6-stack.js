class Stack{
    constructor(){
        this.items =[];
        this.count =0;
    }
    getLength(){
        return this.count;
    }
    push(val){
        this.items.push(val);
        this.count++;
    }
    pop(){
        if (this.count === 0) {
            return undefined;
        }
        else{
            this.count--;
            return this.items.pop();
        }
    }
    peek(){
        return this.items.slice(-1)[0];
    }
    print(){
        console.log(this.items);
    }
}

// Execution
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.push(4);
stack.pop();
stack.push(5);
stack.print();