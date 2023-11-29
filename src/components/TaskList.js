import React, { useState } from "react";
import Task from "./Task";

function TaskList({TASKS}) {
  const [tasks, setTasks] = useState(TASKS); 

  const deleteTask= (id)=>{
    const newTask = tasks.filter(task =>task.text !== id);
    setTasks(newTask)}
  
  const taskElement=tasks.map(task=> <Task key={task.text} tasks={task} deleteTheTask={deleteTask} />)
  return (
    <div className="tasks">
      {taskElement}
    </div>
  );
}

export default TaskList;
