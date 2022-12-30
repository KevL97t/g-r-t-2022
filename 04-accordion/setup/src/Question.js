import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  const [isInfoShown, setIsInfoShown] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={() => setIsInfoShown(!isInfoShown)} className='btn'>
        {isInfoShown ? <AiOutlineMinus /> : <AiOutlinePlus/>}
      </button>
    </header>
    {isInfoShown && (<p>{info}</p>)}
  </article>;
};

export default Question;
