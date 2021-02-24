"use strict";

let todos = ["Äta", "Sova", "Dansa"];
let todoOutput = document.querySelector("[data-todo-list]");
let todoForm = document.querySelector("[data-todo-form]");
let todoTextInput = document.querySelector("[data-todo-text]");
let todoDateInput = document.querySelector("[data-todo-date]");

var timeZoneOffset = new Date().getTimezoneOffset() * 60000;
var isoTime = new Date(Date.now() - timeZoneOffset).toISOString().slice(0, -8);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = todoTextInput.value.trim();

  if (input === "") {
    return;
  }
  todos.push(input);
  update();
  todoTextInput.value = "";
});

function createList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    listItem.classList.add("list-item");
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
  todoDateInput.min = new Date(Date.now() - timeZoneOffset).toISOString().slice(0, -8);
}

function resetDate() {
  todoDateInput.value = "";
}

update();
