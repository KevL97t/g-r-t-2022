import React from 'react';

const Categories = ({filterItems, categories}) => {
  return <div className='btn-container'>
    {categories.map((category,i) => {
      return <button onClick={() => filterItems(category)} type='button' className='filter-btn' key={i}>
        {category}
      </button>
    })}
  </div>;
};

export default Categories;
