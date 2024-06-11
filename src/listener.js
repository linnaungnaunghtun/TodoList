import { addTaskBtnHandler, deleteAllHandler, listGroupHandler, taskInputHandler } from "./handler.js";
import { addTaskBtn, deleteAll, listGroup, taskInput } from "./selectors.js";

const listener = () => {

addTaskBtn.addEventListener("click", addTaskBtnHandler);
taskInput.addEventListener("keyup", taskInputHandler);
listGroup.addEventListener("click", listGroupHandler);
deleteAll.addEventListener("click", deleteAllHandler);
    
}


export default listener;