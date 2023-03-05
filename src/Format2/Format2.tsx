import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ExperienceList from './ExperienceList';
import Education from './Education';
import PersonalProjects from './PersonalProjects';
import Certificate from './Certificates';

function Format2() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Header />
      <Certificate />
      <Skills />
      <ExperienceList />
      <PersonalProjects />
      <Education />
    </div>
  );
}

export default Format2;
