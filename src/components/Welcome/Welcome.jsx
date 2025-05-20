import React from 'react';
import './Welcome.css';
import fon from './redplanet2.png';
const Welcome = () => {
    return (
      <div className="fon">
        <div className="fon-content">
        <h1 className="glitch">
      {"Привіт , MO найбільш кібербезпечного івенту!!!"
        .split("")
        .map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char}
          </span>
        ))}
    </h1>
  </div>
  
          <div className="text-block">
            <p>Я Ліза, а це мій мотиваційний лист на посаду ІТ Responsible</p>
            </div>
  
              <div className="under-block">
              <p>
              Як знає кожен, CTF — це не просто змагання, а таємничий світ, сповнений загадок,
              пасток і цифрових тіней, де лише найспритніші здатні розгадати приховане, де кожен байт має свою історію,
              а кожен біт ховає підказку.
            </p>
          </div>
          </div>
    );
  };
  
  export default Welcome;