import React from 'react';
import Card from './Card';
import foodhunt from './../assets/img/foodhunt.jpeg';

const Projects = () => {
  return (
   <div>
    <p className='font-mario-filled text-[#3B3B3B] text-lg'>Projects 101</p>
    <div className='flex flex-col font-mario-hollow overflow-scroll max-h-[60vh] sm:overflow-hidden sm:max-h-[100vh]'>
      <br />
      <div className="dabba1 flex flex-col sm:flex-row flex-wrap gap-10 m-4">
        <Card img={foodhunt} name="Swiggy Clone" />
        <Card img={foodhunt} name="Swiggy Clone" />        
      </div>
      <div className="dabba1 flex flex-col sm:flex-row  flex-wrap gap-10 m-4">
        <Card img={foodhunt} name="Swiggy Clone" />
        <Card img={foodhunt} name="Swiggy Clone" />        
      </div>
    </div>
   </div>
   
  );
};

export default Projects;