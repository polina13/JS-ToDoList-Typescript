/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
/// <reference path="to-do-priority.ts" />

var people = ToDoList.people;
var priority = ToDoList.priority;
var tasks = [];

tasks.push(new ToDoList.HomeTask("Do the dishes.", priority.high));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", priority.low, people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", priority.low));

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));


var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", priority.high, people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow,"Go to meeting.", priority.medium, people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", priority.high, people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", priority.low, people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", priority.low, people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for (var task of thorTasks) {

  $('#resultTask').append('<li>' + task +  '</li>');
}




// with this code the console.log in the browser shows Thor's three tasks listed : Here are Thors tasks: Go to meeeting, Save the world, buy a new shirt
