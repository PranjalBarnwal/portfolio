import React from 'react'

const Sidebar = () => {
  return (
    <div className=' flex list-none font-mario-hollow font-semibold sm:text-xl text-[0.8rem] sm:leading-[3.2rem]  sm:pt-[17vh] pt-4 pl-[3vw] sm:w-1/4 sm:flex-col justify-around'>
      <li className='text-red-200'>Home</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>About</li>
    </div>
  )
}

export default Sidebar;
