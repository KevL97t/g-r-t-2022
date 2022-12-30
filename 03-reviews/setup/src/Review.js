import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const handleReviewToShow = (indicator) => {
    if(indicator === 'left'){
      setIndex(index - 1)
    } else if(indicator === 'right') {
      setIndex(index + 1)
    } else if(indicator === 'randomize') {
      setIndex(Math.round(Math.random() * 3))
    }
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button disabled={index === 0} onClick={() => handleReviewToShow('left')} id='left-btn' className='prev-btn disabled'>
          <FaChevronLeft />
        </button>
        <button disabled={index === people.length - 1} onClick={() => handleReviewToShow('right')} className='next-btn' id={'right-btn'}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => handleReviewToShow('randomize')} className='random-btn'>
          Surprise me!
      </button>
    </article>
  );
};

export default Review;
