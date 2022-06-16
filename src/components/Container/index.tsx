import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div className="wrapper">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
