import React, { FC } from 'react';

interface IProps {
  title: string;
  onClick: () => void;
}

export const UncontrolledAccordionTitle: FC<IProps> = ({
                                                         title,
                                                         onClick,
                                                       }) => {
  return <h3 onClick={ onClick }>{ title }</h3>;
};
