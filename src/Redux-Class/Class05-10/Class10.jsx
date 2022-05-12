import deepFreeze from "deep-freeze";
import React from "react";

export default function Class10() {
  const toggleTodo = (todo) => {
    // This Method will change the modify the source object, since is sets
    // one of the fields (completed) equal to uncompleted. This will mutate
    // the orignal Object (todo)
    todo.completed = !todo.completed;
    // return todo;

    // With Object.assign() you can pass a target and a source from which the
    // data will pass and saved in an new Object (target). This helps to not mutate
    // Object Values but creates a new Object.
    return Object.assign({}, todo, {
      completed: !todo.completed,
    });
    // Object.assign( is not compatible for all browser). It's recommended to use
    // the spreaoperator
    return { ...todo, completed: !todo.completed };
  };
  const testToggleTodo = () => {
    const todoBefore = {
      id: 0,
      text: "Text",
      completed: false,
    };
    const todoAfter = {
      id: 0,
      text: "Text",
      completed: true,
    };
    console.log(deepFreeze(todoBefore));
    console.log(deepFreeze(todoAfter));
  };
  testToggleTodo();
  return <div>Class10</div>;
}
