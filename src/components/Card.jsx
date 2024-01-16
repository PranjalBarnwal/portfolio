import React from 'react';


const Card = ({ img, name }) => {
 
  
  return (
    <div className='font-mario-hollow text-[1rem] m-3 flex flex-col  justify-center'>
      <img className="sm:w-[18rem] w-[8rem]" src={img} alt="" />
      <p className='flex m-2 flex '>{name}</p>
      <p>Github</p>
    </div>
  );
};

export default Card;