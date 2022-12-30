import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({items, removeItem, editItem}) => {
  return <div className='grocery-list'>
    {items.map((item) => {
      const {id, title} = item;
      return <artcile key={id} className='groceryItem'>
        <p className='title'>{title}</p>
        <div className='btn-container'>
          <button type='button' className='edit-btn' onClick={() => editItem(id)}>
            <FaEdit />
          </button>
          <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
            <FaTrash />
          </button>
        </div>
      </artcile>
    })}
  </div>
}
export default List
