import React from "react";
interface IconProps {
  children?: JSX.Element;
  className?: string;
}

export default function Icon(props: IconProps) {
  return (
    <i className={props.className} {...props}>
      {props.children}
    </i>
  );
}
