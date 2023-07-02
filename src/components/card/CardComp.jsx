import React, { useState } from 'react';

import john from '../../assests/img/image-john.jpg';
import tanya from '../../assests/img/image-tanya.jpg';

const CardComp = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <div>
        {isActive ? (
          <div>
            <p>
              “ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now
              in the job of my dreams and so excited about the future. ”
            </p>
            <div>
              <p>Tanya Sinclair</p>
              <p> UX Engineer</p>
            </div>
          </div>
        ) : (
          <div>
            <p>
              “ If you want to lay the best foundation possible I’d recommend
              taking this course. The depth the instructors go into is
              incredible. I now feel so confident about starting up as a
              professional developer. ”
            </p>
            <div>
              <p>John Tarkpor</p>
              <p>Junior Front-end Developer</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {isActive ? <img src={tanya} alt='' /> : <img src={john} alt='' />}

        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
