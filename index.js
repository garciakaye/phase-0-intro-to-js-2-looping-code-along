// Code your solutions in this file


function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
    }
    return messages;
    
}

// To get more acquainted with `while`, your task is to write a function,
// `countDown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. Note that this means that running
// `countdown(10);` would actually log _11_ times:

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }

}