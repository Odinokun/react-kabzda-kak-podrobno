import { AccordionBody } from './AccordionBody/AccordionBody';
import { AccordionTitle } from './AccordionTitle/AccordionTitle';

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <>
      <AccordionTitle title={props.title} />
      {!props.collapsed && <AccordionBody />}
    </>
  );
};
