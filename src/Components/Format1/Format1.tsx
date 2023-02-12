import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ExperienceList from './ExperienceList';
import Education from './Education';

function Format1() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <Header/>
      <Skills/>
      <ExperienceList/>
      <Education/>
    </div>
  );
}

export default Format1;
