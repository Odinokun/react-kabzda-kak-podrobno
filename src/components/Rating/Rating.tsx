import { FC } from 'react';
import { RatingPropsType } from '../../App';

type PropsType = {
  value: RatingPropsType
  onClick: (value: RatingPropsType) => void
};

export const Rating = (props: PropsType) => {
  return (
    <div>
      <Star onClick={ props.onClick } value={ 1 } selected={ props.value > 0 }/>
      <Star onClick={ props.onClick } value={ 2 } selected={ props.value > 1 }/>
      <Star onClick={ props.onClick } value={ 3 } selected={ props.value > 2 }/>
      <Star onClick={ props.onClick } value={ 4 } selected={ props.value > 3 }/>
      <Star onClick={ props.onClick } value={ 5 } selected={ props.value > 4 }/>
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  onClick: (value: RatingPropsType) => void
  value: RatingPropsType
};

const Star: FC<StarPropsType> = ({selected, onClick, value}) => {
  return (
    <span onClick={ () => {
      onClick(value);
    } }>
      { selected ? <b>star </b> : 'star ' }
    </span>
  );
};