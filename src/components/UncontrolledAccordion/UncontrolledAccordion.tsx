import { useState, FC } from 'react';
import { UncontrolledAccordionBody } from './UncontrolledAccordionBody/UncontrolledAccordionBody';
import { UncontrolledAccordionTitle } from './UncontrolledAccordionTitle/UncontrolledAccordionTitle';

interface IProps {
  title: string;
}

export const UncontrolledAccordion: FC<IProps> = ({ title }) => {
  const [collapsed, setCollapsed] = useState(true);
  const onOffAccordion = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <UncontrolledAccordionTitle
        title={title}
        onOffAccordion={onOffAccordion}
      />
      {!collapsed && <UncontrolledAccordionBody />}
    </>
  );
};
