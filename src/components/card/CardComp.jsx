import React, { useState } from 'react';

import john from '../../assests/img/image-john.jpg';
import tanya from '../../assests/img/image-tanya.jpg';

import './cardStyle.css';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CardComp = () => {
  const [isActive, setIsActive] = useState(true);

  const handleRightClick = () => {
    setIsActive(false);
  };

  const handleLeftClick = () => {
    setIsActive(true);
  };
  return (
    <div className='card-cnt'>
      <div className='card-first-cnt'>
        {isActive ? (
          <div className='card-txt-cnt'>
            <p className='card-txt'>
              “ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”
            </p>
            <div className='card-sub-cnt'>
              <p className='card-name'>Tanya Sinclair</p>
              <p className='card-profession'> UX Engineer</p>
            </div>
          </div>
        ) : (
          <div className='card-txt-cnt'>
            <p className='card-txt'>
              “ If you want to lay the best foundation possible I’d recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”
            </p>
            <div className='card-sub-cnt'>
              <p className='card-name'>John Tarkpor</p>
              <p className='card-profession'>Junior Front-end Developer</p>
            </div>
          </div>
        )}
      </div>
      <div className='card-img-cnt'>
        {isActive ? (
          <div className='img-cnt'>
            <img className='img' src={tanya} alt='' />
          </div>
        ) : (
          <div className='img-cnt'>
            <img className='img' src={john} alt='' />
          </div>
        )}{' '}
        <div className='card-btn-cnt'>
          <button onClick={handleLeftClick}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button onClick={handleRightClick}>
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
