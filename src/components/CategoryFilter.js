import React from "react";

function CategoryFilter({categories, selectedCat, onSelect}) {

  const categoriesButtons = categories.map((category)=> { 
    const className = category === selectedCat ? "selected" : null;
    return <button 
    id ={category} 
    key={category} 
    onClick={()=>onSelect(category)} 
    className={className} 
    >{category}</button>})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButtons}
    </div>
  );
}

export default CategoryFilter;
