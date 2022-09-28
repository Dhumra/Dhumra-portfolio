import React from 'react';
import  "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Skills Level</span>

        <div className="skills__container container grid">
           <Frontend/>

           <Backend/>

           <Design/>
        </div>

    </section>
  );
};

export default Skills