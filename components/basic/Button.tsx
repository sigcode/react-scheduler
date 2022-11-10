import React from "react";
interface ButtonProps {
  assignee?: any;
  children?: any;
  ref?: any;
  style?: any;
  fullWidth?: boolean;
  onClick?: any;
  onDragEnter?: any;
  onDragOver?: any;
  onDrop?: any;
}

export default function Button(props: ButtonProps) {
  let styles = props.fullWidth ? { ...props.style, width: "100%" } : { ...props.style };
  return (
    <div className="schedulerButton" {...props} style={styles}>
      {props.children}
    </div>
  );
}
