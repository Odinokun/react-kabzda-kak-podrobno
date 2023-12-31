import React, { FC } from 'react';

interface IProps {
  status: boolean;
  onClick: (switchOn: boolean) => void;
}

export const OnOff: FC<IProps> = ({status, onClick}) => {

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: status ? 'green' : 'white',
  };

  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: status ? 'white' : 'red',
  };

  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: status ? 'green' : 'red',
  };

  return (
    <div>
      <button style={ onStyle } onClick={ () => onClick(true) }>
        On
      </button>
      <button style={ offStyle } onClick={ () => onClick(false) }>
        Off
      </button>
      <div style={ indicatorStyle }>{ status ? 'On' : 'Off' }</div>
    </div>
  );
};
