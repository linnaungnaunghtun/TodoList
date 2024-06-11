import { addList, deleteList, doneList, editList } from "./list.js";
import { taskInput } from "./selectors.js";

export const listGroupHandler = (event) => {
    const list = event.target.closest(".list");
    if (event.target.classList.contains("list-del-btn")) {
      deleteList(event.target.closest(".list").id);
    }
    if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
    }
    if (event.target.classList.contains("list-done-check")) {
      doneList(event.target.closest(".list").id);
    }
  };
  
  export const addTaskBtnHandler = () => {
    // console.log(taskInput.value.trim() ? true : false);
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    } else {
      alert("U must input task");
    }
  };
  
  export const taskInputHandler = (event) => {
    // console.clear();
    // console.log(event);
    if (event.key === "Enter") {
      addList(taskInput.value);
    }
  };
  
  
  export const deleteAllHandler = () => {
    const list=document.querySelectorAll(".list")
    list.forEach((list) => list.remove())
    
  }