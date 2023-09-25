import React, { FC } from 'react';

interface IProps {
}

export const UncontrolledOnOff: FC<IProps> = () => {
  const [on, setOn] = React.useState<boolean>(true);
  
  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: on ? 'green' : 'white',
  };
  
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: on ? 'white' : 'red',
  };
  
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? 'green' : 'red',
  };
  
  return (
    <div>
      <button style={onStyle} onClick={() => setOn(true)}>
        On
      </button>
      <button style={offStyle} onClick={() => setOn(false)}>
        Off
      </button>
      <div style={indicatorStyle}>{on ? 'On' : 'Off'}</div>
    </div>
  );
};
