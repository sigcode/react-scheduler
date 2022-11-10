import { useState } from "react";
import DateProvider from "../hoc/DateProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "../basic/Button";
import { format, addDays } from "date-fns";
import { LocaleArrow } from "../common/LocaleArrow";
import { useAppState } from "../../hooks/useAppState";

import React from "react";
interface DayDateBtnProps {
  selectedDate: Date;
  onChange(value: Date, key: "selectedDate"): void;
}

const DayDateBtn = ({ selectedDate, onChange }: DayDateBtnProps) => {
  const { locale } = useAppState();
  const [open, setOpen] = useState(false);
  const toggleDialog = () => setOpen(!open);

  const handleChange = (e: Date | null) => {
    onChange(e || new Date(), "selectedDate");
  };

  const handlePrev = () => {
    const prevDay = addDays(selectedDate, -1);
    onChange(prevDay, "selectedDate");
  };
  const handleNext = () => {
    const nexDay = addDays(selectedDate, 1);
    onChange(nexDay, "selectedDate");
  };
  return (
    <>
      <LocaleArrow type="prev" onClick={handlePrev} />
      <DateProvider>
        <DatePicker
          open={open}
          onClose={toggleDialog}
          openTo="day"
          views={["month", "day"]}
          value={selectedDate}
          onChange={handleChange}
          renderInput={(params) => (
            <Button ref={params.inputRef} style={{ padding: 4 }} onClick={toggleDialog}>
              {`${format(selectedDate, "dd, MMMM yyyy", {
                locale: locale,
              })}`}
            </Button>
          )}
        />
      </DateProvider>
      <LocaleArrow type="next" onClick={handleNext} />
    </>
  );
};

export { DayDateBtn };
