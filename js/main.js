"use strict";

let todoOutput = document.querySelector("[data-todo-list]");
let todoForm = document.querySelector("[data-todo-form]");
let todoInput = document.querySelector("[data-todo-input]");
let todos = ["Äta", "Sova", "Dansa"];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = todoInput.value.trim();

  if (input === "") {
    return;
  }
  todos.push(input);
  update();
  todoInput.value = "";
});

function createList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = item;

    listItem.addEventListener("click", remove);
    list.append(listItem);
  });
  return list;
}

function remove(event) {
  let item = event.target.innerText;
  todos = todos.filter((e) => e !== item);
  update();
}

function update() {
  todoOutput.innerHTML = "";
  todoOutput.append(createList(todos));
}

update();
