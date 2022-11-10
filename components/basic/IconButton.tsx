import React from "react";
interface IconButtonProps {
  assignee?: any;
  children?: JSX.Element;
  onClick?: any;
  onDragEnter?: any;
  onDragOver?: any;
  onDrop?: any;
  style?: any;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <div className="iconButton" {...props}>
      {props.children}
    </div>
  );
}
