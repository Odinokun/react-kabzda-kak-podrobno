import { FC } from 'react';

interface IProps {
  title: string;
}

export const AccordionTitle: FC<IProps> = ({ title }) => {
  return <h3>{title}</h3>;
};
