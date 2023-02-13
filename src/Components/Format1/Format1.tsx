import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ExperienceList from './ExperienceList';
import Education from './Education';
import PersonalProjects from './PersonalProjects';

function Format1() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <Header/>
      <ExperienceList/>
      <PersonalProjects/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default Format1;
