import { UncontrolledAccordion } from './UncontrolledAccordion';

export default {
  title: 'Accordion uncontrolled',
  component: UncontrolledAccordion,
};

export const ModeChanging = () => {
  return (
    <UncontrolledAccordion
      title={'ModeChanging Accordion'}
    />
  );
};
