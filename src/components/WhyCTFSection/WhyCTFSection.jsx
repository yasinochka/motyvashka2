import React from 'react';
import './WhyCTFSection.css';
import capturedImg from './captured.jpg';
const WhyCTFSection = () => {
    return (
        <div className="why-ctf">
            <div className="why-ctf-header"> 
            <h2 className='flying-header'>Чому CTF?</h2>
            </div>
                <div className='why-ctf-left'> 
                    <p>Одним з перших івентів, про які я почула прийшовши в BEST був
CTF. Мені дуже сподобався задум проєкту, тож ще на МВ я вирішила, що
хочу стати його частинкою. Зараз потрапити в цю кортіму — мій перший бестівський пріоритет. Справа в тому, що моє життя стало тісно повязане з ІТ, і твій івент — це проєкт, який якнайкраще підходить мені за духом і вайбом. Крім професійного розвитку це шанс урізноманітнити своє бестівське життя новими людьми, враженннями, унікальним досвідом і першою в житті кортімою. Також CTF — це можливість здійснити свою мрію, організувавши змагання, які ще й проходять у формі гри( ну прікол, нє ?)</p>
                   </div>
                   <div className='why-ctf-right'> 
                   <div className="image-with-caption">
                   <img src={capturedImg} alt="YaIFlag" className="responsive-img" />
                   <p className="caption">! Реально Captured The Flag !</p>
                    </div> 
                    </div>
    </div>
    );
  };
  
  export default WhyCTFSection;