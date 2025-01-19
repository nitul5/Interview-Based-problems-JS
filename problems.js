# Interview-Based-problems-JS
Here I'll try to post some important interview based problems with solution!

// Question 1:
//! Find the number of count of each character in the given string.

//? code:
const string = 'Hello, I am a developer and you?';

// store the character count in an empty object:
let obj = {};

//run a loop to get the character count:
 for(let r of string){
    if(obj[r]){
        obj[r] +=1;
    }
    else{
        obj[r]=1;
    }
 }
 console.log(obj);

