import React from "react";


function Task({tasks, deleteTheTask}) {

  function handleClick(e) {
    deleteTheTask(e.target.id)    
  }

  return (
    <div className="task" key={tasks.text}>
      <div className="label">{tasks.category}</div>
      <div className="text">{tasks.text}</div>
      <button className="delete" id={tasks.text} onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
