"use strict";

class TodoItem {
  constructor(text, date) {
    this.text = text;
    this.date = date;
    this.id = Date.now().toString();
  }
}

const localKey = "todolist";

let todos = [];

todos = JSON.parse(localStorage.getItem(localKey));

let todoOutput = document.querySelector("[data-todo-list]");
let todoForm = document.querySelector("[data-todo-form]");
let todoTextInput = document.querySelector("[data-todo-text]");
let todoDateInput = document.querySelector("[data-todo-date]");

var timeZoneOffset = new Date().getTimezoneOffset() * 60000;
var isoTime = new Date(Date.now() - timeZoneOffset).toISOString().slice(0, -8);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let textInput = todoTextInput.value.trim();
  if (textInput === "") {
    return;
  }

  let dateInput = todoDateInput.value.replace("T", " ");

  todos.push(new TodoItem(textInput, dateInput));
  update();
  todoTextInput.value = "";
  resetDate();
});

function createList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = item.text + " " + item.date;
    listItem.classList.add("list-item");
    listItem.addEventListener("click", remove);
    listItem.setAttribute("data-id", item.id);
    list.append(listItem);
  });
  return list;
}

function remove(event) {
  let item = event.target.getAttribute("data-id");
  todos = todos.filter((e) => e.id !== item);
  update();
}

function update() {
  todos = todos.filter((e) => e.text !== "");
  save();
  todoOutput.innerHTML = "";
  todoOutput.append(createList(todos));
  todoDateInput.min = new Date(Date.now() - timeZoneOffset)
    .toISOString()
    .slice(0, -8);
}

function resetDate() {
  todoDateInput.value = "";
}

function save() {
  localStorage.setItem(localKey, JSON.stringify(todos));
}

update();

// "[{"text":"Test","date":"2021-02-26 17:00","id":"1614344780411"}]"
