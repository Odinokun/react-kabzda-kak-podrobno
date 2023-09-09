import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div className='App'>
      <PageTitle title='React kabzda kak podrobno!' />
      <Accordion title='Accordion #1' collapsed={true} />
      <UncontrolledAccordion title='Uncontrolled Accordion #1' />
      <OnOff />
      <Rating value={4} />
      <UncontrolledRating />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
