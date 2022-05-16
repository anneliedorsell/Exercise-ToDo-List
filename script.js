
// In this exercise you get to practice using array methods and create and reuse functions . 
//You will create a simple ToDo list, only with plain JavaScript no need for a user 
//interface (that means no need for any DOM manipulation).

// These are the array methods you should use and what they should do:

// Add a ToDo to the last index of the array using Array.push()
// Add a ToDo to the first index of the array using Array.unshift()
// Remove a ToDo from the lastindex of the list using Array.pop()
// Remove a ToDo from the first index of the list using Array.shift()


// Step 1:
// Create a file called index.html and a file called todo.js. 
//Link the JavaScript file in the html document. 

// Step 2:
// Create a variable called todoList and declare it as an empty array.

// Step 3:
// Create a function called addTodo(). This function should add a ToDo to 
//the array and also return the whole array. Think about what array method you should use. 
// Test your function addTodo() to make sure it works by calling the function 
//and adding a ToDo to the array.  Log the result to the console.

// Step 5:
// Create a removeFromBottomOfList() function that deletes the item at the bottom 
//of the list and returns it.

// Step 4:
// Create a function addToTopOfList() that adds one thing to do at the top of the list, 
//and returns the entire list.
// Test your function by calling it and add a new ToDo. Log the result to the console.


// Again test your functions like you did in the previous step and log the 
//result to the console.

// Step 6:
// Create a removeFromTopOfList() function that deletes the item at the 
// top of the list and returns it.
// And by now you know the drill :) Test your function and log the result to the console.

// Step 5:
// Create a removeFromBottomOfList() function that deletes the item at the bottom 
//of the list and returns it.

// Step 6:
// Create a removeFromTopOfList() function that deletes the item at the 
// top of the list and returns it.
// And by now you know the drill :) Test your function and log the result to the console.


const todoList = [];

todoList.push("eat", "sleep");
console.log(todoList);

todoList.push("walk");
console.log(todoList);


function addToDo(todo) {
  const moredo = todoList.push(todo);
  return console.log(todoList);
}

addToDo("run");
addToDo("drink wine");
console.log(todoList);

function addToTopOfList(addtotop) {
  const addtop = todoList.unshift(addtotop);
  return console.log(todoList);
}

addToTopOfList("wake up");


function removeFromBottomOfList(removefrombottom) {
  const remove = todoList.pop(removefrombottom);
  return console.log(todoList);
}

removeFromBottomOfList();

function removeFromTopOfList(removefromtop) {
  const add = todoList.shift(removefromtop);
  return console.log(todoList);
}

removeFromTopOfList();


















 