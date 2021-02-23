"use strict";

let todoOutput = document.querySelector("[data-todo-list]");
let todoForm = document.querySelector("[data-todo-form]");
let todoInput = document.querySelector("[data-todo-input]");
let todos = ["Äta", "Sova", "Dansa"];


// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let input = todoInput.value.trim();

//     if (input === "")
//     {
//         return;
//     }
//     todoList.push(input);
//     update();
//     todoInput.value = "";
// });

// function createList(items) {
//     let list = document.createElement("ul");
//     items.forEach((item) => {
//         let listItem = document.createElement("li");
//         listItem.innerText = item;
        
//         listItem.addEventListener("click", remove());
//         list.append(listItem);
//     })
//     return list;
// }

// function remove(event) {
//     let item = event.target.innerText;
//     todoList = todoList.filter((e) => e !== item);
//     update();
// }

// function update() {
//     todoOutput.innerHTML = "";
//     todoOutput.append(createList(todoList));
// }

// update();

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() === "") {
      return;
    }
    todos.push(todoInput.value.trim());
    updateList();
    todoInput.value = "";
  });
  
  function todoList(items) {
    let list = document.createElement("ul");
    items.forEach((item) => {
      let todoListItem = document.createElement("li");
      todoListItem.innerText = item;
      todoListItem.classList.add("todo-list-item");
      todoListItem.addEventListener("click", removeItem);
      list.append(todoListItem);
    });
    return list;
  }
  
  function removeItem(event) {
    let itemToRemove = event.target.innerText;
    todos = todos.filter((item) => item !== itemToRemove);
    updateList();
  }
  
  function updateList() {
    listOutput.innerHTML = "";
    listOutput.append(todoList(todos));
  }
  
  updateList();