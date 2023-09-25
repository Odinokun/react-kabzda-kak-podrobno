import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('accordion mode change event fired');

export const CollapsedMode = () => (
  <Accordion
    title={'Collapsed Accordion'}
    collapsed={true}
    onClick={callback}
  />
);

export const UncollapsedMode = () => (
  <Accordion
    title={'Uncollapsed Accordion'}
    collapsed={false}
    onClick={callback}
  />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <Accordion
      title={'ModeChanging Accordion'}
      collapsed={value}
      onClick={setValue}
    />
  );
};
