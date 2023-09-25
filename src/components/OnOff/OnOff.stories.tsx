import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { OnOff } from './OnOff';

export default {
  title: 'OnOff',
  component: OnOff,
};

const callback = action('on or off clicked');

export const OnMode = () => <OnOff status={true} onClick={callback} />;
export const OffMode = () => <OnOff status={false} onClick={callback} />;
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff status={value} onClick={setValue} />;
};
