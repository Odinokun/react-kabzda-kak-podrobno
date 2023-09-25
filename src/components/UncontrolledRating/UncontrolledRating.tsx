import { FC, useState } from 'react';
import { RatingPropsType } from '../../App';

type PropsType = {
  defaultValue?: RatingPropsType;
  onChange: (value: RatingPropsType) => void;
};

export const UncontrolledRating = (props: PropsType) => {
  
  const [value, setValue] = useState<RatingPropsType>(props.defaultValue ? props.defaultValue : 0);
  
  return (
    <div>
      <Star
        selected={value > 0} setValue={() => {
        setValue(1);
        props.onChange(1);
      }}
      />
      <Star
        selected={value > 1} setValue={() => {
        setValue(2);
        props.onChange(2);
      }}
      />
      <Star
        selected={value > 2} setValue={() => {
        setValue(3);
        props.onChange(3);
      }}
      />
      <Star
        selected={value > 3} setValue={() => {
        setValue(4);
        props.onChange(4);
      }}
      />
      <Star
        selected={value > 4} setValue={() => {
        setValue(5);
        props.onChange(5);
      }}
      />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void
};

const Star: FC<StarPropsType> = ({ selected, setValue }) => {
  return (
    <span onClick={setValue}>
      {selected ? <b>star </b> : 'star '}
    </span>
  );
};