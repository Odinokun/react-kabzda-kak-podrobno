import { AccordionBody } from './AccordionBody/AccordionBody';
import { AccordionTitle } from './AccordionTitle/AccordionTitle';
import { FC } from 'react';

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  onClick: (collapsed: boolean) => void;
};

export const Accordion: FC<AccordionPropsType> = ({
  title,
  collapsed,
  onClick,
}) => {
  return (
    <>
      <AccordionTitle title={title} collapsed={collapsed} onClick={onClick} />
      {!collapsed && <AccordionBody />}
    </>
  );
};
