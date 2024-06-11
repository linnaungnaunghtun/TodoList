import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const ovservber=()=>{


const job=()=>{
    updateDoneTaskTotal()
    updateTaskTotal()

}

    const observerOptions = {
        childList: true,
        subtree: true,
        attributes: true,
      };
      
      const observer = new MutationObserver(job);
      observer.observe(listGroup, observerOptions);


    
}

export default ovservber;