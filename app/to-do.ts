interface IPerson {
  name: string;
  email: string;
}

// first need to set up of the objects with interface and their variables to it. Then I can create with VAR SOMETHING : IPERSON = { VARIABLE WHICH WERE DEFINED UP TOP: FOR EXAMPLE: NAME, EMAIL}

interface ITask {
  description: string;
  done: boolean;
  priority: IPriority;
  markDone(): void;
  assignedTo?: IPerson;
}


class Task implements ITask {
  done: boolean = false;
  constructor (public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone() {
    this.done = true;
  }
}


class HomeTask extends Task {
  constructor (public description: string, public priority: string, public assignedTo?:IPerson) {
    super(description, priority);
  }
}
// the ? mark is an optional parameter on a constructor like an OPTIONAL property on a class or interface. I dont have to include the assignedTo in the super since it is optional if there will be assigned or not

class WorkTask extends Task {
  constructor (public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson) {
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor (public description: string) {
    super(description, "low");
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"

// because name and email are set up as string up top; use ""
}

var thor: IPerson = {
  name: "God of mischief",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "Thor Son of Odin",
  email: "loki@geocities.com"
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate", "Low", diane));
// this means assigning the HomeTask buy chocolate to diane
tasks.push(new HomeTask("Wash the laundry", "High"));

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie"));


var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Update website.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));

console.log(tasks);
