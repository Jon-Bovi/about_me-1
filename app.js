"use strict";
/*var live = prompt('Do I live in seattle? Yes or No').toUpperCase();
if (live ==='YES'||live ==="Y") {
    alert('Correct!');
} else if (live ==='NO'||live ==='N') {
      alert('Sorry you got it wrong!');
    }
      else {
           alert('Wrong Input!');
};

console.log('the user \'s answer is ' + live);

var gold = prompt('Is my favorite color Gold? Yes or No').toUpperCase();
if (gold ==='YES'||gold ==='Y') {
    alert('Correct!');
} else if (gold ==='NO'|| gold ==='N') {
      alert('Sorry you got it wrong!');
    }
      else {
           alert('Wrong Input!');
};
console.log('the user \'s answer is ' + gold);

var sing = prompt('Can I sing? Yes or No').toUpperCase();
if (sing ==='NO'|| sing === 'N') {
    alert('Correct!');
} else if (sing ==='Yes' || sing === 'Y') {
      alert('Sorry you got it wrong!');
    }
      else {
           alert('Wrong Input!');
};
console.log('the user \'s answer is ' + sing);

var pizza = prompt('Do I dislike pizza? Yes or No').toUpperCase();
if (pizza ==='YES'|| pizza === 'Y') {
    alert('Correct!');
} else if (pizza ==='NO'||pizza ==='N') {
      alert('Sorry you got it wrong!');
    }
      else {
           alert('Wrong Input!');
};
console.log('the user \'s answer is ' + pizza);

var dancing = prompt('Do I like  to dance? Yes or No').toUpperCase();
if (dancing ==='YES'|| dancing ==="Y") {
    alert('Correct!');
} else if (dancing ==='NO'|| dancing ==="N") {
      alert('Sorry you got it wrong!');
    }
      else {
           alert('Wrong Input!');
};
console.log('the user \'s answer is ' + dancing);*/


var counter = 0;
while (counter < 4){
  var input = parseInt(prompt('Can you guess how many mini hershey chocolates I ate today?'));
  if (input === 4) {
    alert ('Correct!')
  } else if (input < 4) {
    alert(' You guessed too low!');
  } else {
    alert('You guessed too high');
  }
counter++;
}
