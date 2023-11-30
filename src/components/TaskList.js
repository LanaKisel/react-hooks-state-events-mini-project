import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
 
  const taskElement=tasks.map(task=> <Task key={task.text} text={task.text} category={task.category} deleteTheTask={onDelete} />)
  return (
    <div className="tasks">
      {taskElement}
    </div>
  );
}

export default TaskList;
