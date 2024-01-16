import React from 'react';
import Card from './Card';
import foodhunt from './../assets/img/foodhunt.jpeg';

const Projects = () => {
  return (
    <div className='flex flex-col font-mario-hollow'>
      <p>Projects 101</p>
      <br />
      <div className="dabba flex flex-wrap">
        <Card img={foodhunt} name="Swiggy Clone" />
        <Card img={foodhunt} name="Swiggy Clone" />
        <Card img={foodhunt} name="Swiggy Clone" />
        <Card img={foodhunt} name="Swiggy Clone" />
        
      </div>
    </div>
  );
};

export default Projects;