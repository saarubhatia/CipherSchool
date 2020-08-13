class Stack { 
    constructor(){ 
        this.items = []; 
    } 
    //add elements in the stack
    push(element){ 
        this.items.push(element); 
    } 
    //deletes elements from the stack
    pop(){ 
        if(this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    //Checks If the Stack Is Empty
    isEmpty(){ 
        return this.items.length == 0; 
    } 
    //returns the top element of the stack
    peek(){
         return this.items[this.items.length - 1]; 
    } 
    //print the elements
    display(){ 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
} 

var stack = new Stack();
console.log(stack.isEmpty());  
stack.push(10); 
stack.push(20); 
stack.push(30); 
console.log(stack.peek());
console.log(stack.pop());  
console.log(stack.display())