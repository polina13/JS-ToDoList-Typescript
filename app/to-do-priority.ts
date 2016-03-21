/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {

  interface IPriority {
    export interface IPriority {
      priorityName: string;
      priorityId?: number;
    }

    var high: ToDoList.IPriority = {
      priorityName: "High",
      priorityId: 1
    }

    var medium: ToDoList.IPriority = {
      priorityName: "Medium",
      priorityId: 2

    }

    var low: ToDoList.IPriority = {
      priorityName: "Low",
      priorityId: 3
    }

    export var priority = {
      "high": high,
      "medium": medium,
      "low": low
    };
}
