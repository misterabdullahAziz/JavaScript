// Stacks As JavaScript Array
// Function: Push, Pop, peek, length
// In the JavaScript array object already have all the functions we need for a stack

var stack = [];
var word = 'bobs';

var rWord = '';

//put letters of word in stack
for( var i =0 ; i< word.length ; i++){
    stack.push(word[i]);
}

//pop off the stack in rWord
for( var i =0 ; i< word.length ; i++){
    rWord += stack.pop();
}

if(rWord === word){
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " is not a palindrome");
}
