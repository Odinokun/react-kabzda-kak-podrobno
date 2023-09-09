import React, { FC } from 'react';

interface IProps {
  selected: boolean;
}

export const Star: FC<IProps> = ({ selected }) => {
  return selected === true ? (
    <span>
      <b>star </b>
    </span>
  ) : (
    <span>star </span>
  );
};
