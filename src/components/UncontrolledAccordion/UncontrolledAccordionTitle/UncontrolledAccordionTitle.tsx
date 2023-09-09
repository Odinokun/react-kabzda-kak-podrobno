import React, { FC } from 'react';

interface IProps {
  title: string;
  onOffAccordion: () => void;
}

export const UncontrolledAccordionTitle: FC<IProps> = ({
  title,
  onOffAccordion,
}) => {
  return <h3 onClick={onOffAccordion}>{title}</h3>;
};
