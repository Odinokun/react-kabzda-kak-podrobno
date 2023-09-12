import { FC, useState } from 'react';
import { RatingPropsType } from '../../App';

export const UncontrolledRating: FC = () => {
  const [value, setValue] = useState<RatingPropsType>(0);

  return (
    <div>
      <Star setValue={ () => setValue(1) } selected={ value > 0 }/>
      <Star setValue={ () => setValue(2) } selected={ value > 1 }/>
      <Star setValue={ () => setValue(3) } selected={ value > 2 }/>
      <Star setValue={ () => setValue(4) } selected={ value > 3 }/>
      <Star setValue={ () => setValue(5) } selected={ value > 4 }/>
    </div>
  );
};

type StarPropsType = {
  selected: boolean
  setValue: (value: RatingPropsType) => void
}

const Star: FC<StarPropsType> = ({selected, setValue}) => {
  const onClickHandler = () => {
    setValue(3);
  };

  return (
    <span onClick={ onClickHandler }>
      { selected ? <b>star </b> : 'star ' }
    </span>
  );
};