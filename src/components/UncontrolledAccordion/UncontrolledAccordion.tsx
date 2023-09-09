import { useState } from 'react';

type AccordionPropsType = {
  title: string;
};

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(true);

  const onClickHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <h3 onClick={onClickHandler}>{props.title}</h3>
      {!collapsed && (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
    </>
  );
};
