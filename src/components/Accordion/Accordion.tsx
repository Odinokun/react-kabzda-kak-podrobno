type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <>
      <h3>title={props.title}</h3>
      {!props.collapsed && (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
    </>
  );
};
