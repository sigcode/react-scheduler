import { useAppState } from "../../hooks/useAppState";
import IconButton from "../basic/IconButton";
import { MouseEvent } from "react";
import React from "react";
import Icon from "../basic/Icon";
interface LocaleArrowProps {
  type: "prev" | "next";
  onClick?(e?: MouseEvent): void;
}
const LocaleArrow = ({ type, onClick }: LocaleArrowProps) => {
  const { direction } = useAppState();

  let Arrow = <Icon className="" />;
  if (type === "prev") {
    Arrow =
      direction === "rtl" ? (
        <Icon className="fa fa-chevron-right" />
      ) : (
        <Icon className="fa fa-chevron-left" />
      );
  } else if (type === "next") {
    Arrow =
      direction === "rtl" ? (
        <Icon className="fa fa-chevron-left" />
      ) : (
        <Icon className="fa fa-chevron-right" />
      );
  }

  return (
    <IconButton
      style={{ paddingTop: 5 }}
      onClick={onClick}
      onDragOver={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      {Arrow}
    </IconButton>
  );
};

export { LocaleArrow };
