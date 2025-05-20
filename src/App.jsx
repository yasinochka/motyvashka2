import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import AboutSection from './components/AboutSection/AboutSection';
import WhyMeSection from './components/WhyMeSection/WhyMeSection';
import WhyCTFSection from './components/WhyCTFSection/WhyCTFSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import QaSection from './components/QaSection/QaSection';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="welcome">
        <Welcome />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="why-me">
        <WhyMeSection />
      </section>

       <section id="why-ctf">
        <WhyCTFSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="qa">
        <QaSection />
      </section>  
    </div>
  );
};

export default App;
