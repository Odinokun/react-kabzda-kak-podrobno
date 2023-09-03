import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

function Accordion(props: any) {
  return (
    <>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </>
  );
}

export default Accordion;
