import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }


  const newCat=categories.map((categ) => (
    <option key={categ}>{categ}</option>
  ))

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      </label>
      <label>
        Category
        <select  value={category} onChange={(e)=>setCategory(e.target.value)}>
          {newCat}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
