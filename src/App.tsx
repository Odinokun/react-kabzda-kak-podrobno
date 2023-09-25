import { useState } from 'react';
import { Accordion, OnOff, Rating } from './components';
import './App.css';

export type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  const [ratingValue, setRatingValue] = useState<RatingPropsType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  
  return (
    <div className="App">
      <h1>React kabzda kak podrobno!</h1>
      
      <Accordion title="Accordion #1" collapsed={accordionCollapsed} onClick={setAccordionCollapsed} />
      <OnOff status={switchOn} onClick={setSwitchOn} />
      <Rating value={ratingValue} onClick={setRatingValue} />
    </div>
  );
}

export default App;
