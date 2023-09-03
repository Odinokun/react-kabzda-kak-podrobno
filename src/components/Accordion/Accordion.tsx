import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={props.title} />
      {!props.collapsed && <AccordionBody />}
    </>
  );
}

export default Accordion;
