import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  //TaskList
  const displayedTasks = tasks.filter((task) => category === "All" || task.category === category);
  
  function deleteTask (taskText) {
    const newTask = tasks.filter(task => task.text !== taskText);
    setTasks(newTask)
  }

 function handleNewTask(newText) {
    setTasks([...tasks, newText]);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat={category} onSelect={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={displayedTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
