import { FC, useState } from 'react';
import { Star } from '../Rating/Star/Star';

export const UncontrolledRating: FC = () => {
  const [value, setValue] = useState(0);

  const onClickHandler = (value: 0 | 1 | 2 | 3 | 4 | 5) => {
    setValue(value);
  };

  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
    </div>
  );
};
