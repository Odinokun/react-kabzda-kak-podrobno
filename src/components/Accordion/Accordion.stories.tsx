// Accordion.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

// BEGIN new sintaxis
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
  args: {
    title: 'Accordion Story',
    collapsed: false,
  },
};
// END new sintaxis

const onChangeCallback = action('Accordion mode change event fired');

export const AccordionExample = () => {
  return (
    <Accordion
      title='Accordion #1'
      collapsed={false}
      onClick={onChangeCallback}
    />
  );
};
