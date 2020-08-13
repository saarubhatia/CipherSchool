class Stack { 
    constructor(){ 
        this.items = []; 
    } 
    push(element){ 
        this.items.push(element); 
    } 
    pop(){ 
        if(this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    isEmpty(){ 
        return this.items.length == 0; 
    } 
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
console.log(stack.pop());  
console.log(stack.display())