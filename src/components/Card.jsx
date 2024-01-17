import React from 'react';


const Card = ({ img, name }) => {
 
  
  return (
    <div className='font-mario-hollow text-[1rem] sm:m-3 flex flex-col '>
      <img className="sm:w-[18rem] w-[18rem]" src={img} alt="" />
      <p className='flex m-2 font-mario-filled text-[#3B3B3B]'>{name}</p>
      <p>Github</p>
    </div>
  );
};

export default Card;