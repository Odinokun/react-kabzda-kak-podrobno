import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div className='App'>
      <PageTitle title='React kabzda kak podrobno!' />
      Article 1
      <Rating value={3} />
      <Accordion title='Attordion #1' collapsed={false} />
      <Accordion title='Attordion #2' collapsed={true} />
      <OnOff status={true} />
      <OnOff status={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
