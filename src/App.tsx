import { useState } from 'react';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/OnOff';
import './App.css';

export type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
  const [ratingValue, setRatingValue] = useState<RatingPropsType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className="App">
      <PageTitle title="React kabzda kak podrobno!"/>

      <Accordion title="Accordion #1" collapsed={ accordionCollapsed } onClick={ setAccordionCollapsed }/>
      <UncontrolledAccordion title="Uncontrolled Accordion #1"/>

      <h3>OnOff</h3>
      <OnOff status={ switchOn } onClick={ setSwitchOn }/>
      <h3>UncontrolledOnOff</h3>
      <UncontrolledOnOff/>

      <Rating value={ ratingValue } onClick={ setRatingValue }/>
      <UncontrolledRating/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{ props.title }</h1>;
}

export default App;
