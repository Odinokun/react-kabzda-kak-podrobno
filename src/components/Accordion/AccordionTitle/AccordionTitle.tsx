import { FC } from 'react';

interface IProps {
  title: string;
  collapsed: boolean;
  onClick: (collapsed: boolean) => void;
}

export const AccordionTitle: FC<IProps> = ({title, collapsed, onClick}) => {
  return <h3 onClick={ () => onClick(!collapsed) }>{ title }</h3>;
};
