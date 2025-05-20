import React from 'react';
import './QaSection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const qaData = [
  {
    question: 'Чому саме ця посада? Чи маєш дотичний досвід?',
    answer:
      'Насправді просто хочу поглибити свої знання по фронтенду і вперше в житті написати бота (звучить ого як). Давніше цим всім цікавилася, але коли робила все для себе(сайтики), то не отримувала такого кайфу. Аж під час написання мотивашки зрозуміла, що мені це дійсно подобається і вже дізналася БАГАТО чого нового.',
  },
  {
    question: 'На скільки ти оцінюєш свій вільний час по шкалі від 1 до 10?',
    answer:
      'На тверду 8, бо готова виділяти стільки часу, скільки буде найкраще, щоб зробити таски до дедлайнів і підлаштувати все під майбутні потреби. Тим паче, буде літо, яке я планую провести у Львові, тому буду мати дуже багато вільного часу.',
  },
  {
    question: 'В який пріоритет поставиш проєкт, якщо потрапиш в команду?',
    answer:
      'Якщо я потраплю в кортіму, то вона автоматично стане моїм головним пріоритетом. Я готова виділяти їй всі свої сили, адже одразу після подачі в бест знала, що зразу подамся й сюди.',
  },
  {
    question: 'Твої плани на найближчі 5 місяців?',
    answer:
      'Як я вже казала: все літо планую бути у Львові, час від часу буду їздити до батьків додому (живу в Тернополі, тому добиратися поїздом буду не довго). Також я думала про те, щоб знайти дистанційну роботу, але впевнена, що нічого не стане перешкодою моєму житті в кортімі і я зможу заменеджити все найкращим чином.',
  },
];

const QaSection = () => {
  const [index, setIndex] = React.useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? qaData.length - 1 : prev - 1));
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % qaData.length);

  return (
    <div className="QaSection">
      <h2 className="qa-title">Q&A</h2>
      <div className="qa-box">
        <FaChevronLeft className="arrow arrow-left" onClick={prevSlide} />
        <div className="qa-content">
          <h3 className="qa-question">{qaData[index].question}</h3>
          <p className="qa-answer">{qaData[index].answer}</p>
        </div>
        <FaChevronRight className="arrow arrow-right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default QaSection;
