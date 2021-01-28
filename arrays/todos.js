// 1. Convert the array of strings to an array of objects -> text -> completed
// 2. Create a function to remove a todo by text value

const todos = [
  {
    text: "study code",
    completed: true,
  },
  {
    text: "go to work",
    completed: false,
  },
  {
    text: "do work",
    completed: true,
  },
  {
    text: "drink water",
    completed: false,
  },
  {
    text: "take technical interview",
    completed: true,
  },
];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};
deleteTodo(todos, "do work");
// console.log(todos);

// Create a function that returns the todos with a completed value of false

const getThingsToDo = function (todos) {
  return todos.filter(function (todo, index) {
    return !todo.completed;
  });
};
console.log(getThingsToDo(todos));
