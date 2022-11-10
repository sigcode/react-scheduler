import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useAppState } from "../../hooks/useAppState";

import React from "react";
interface AuxProps {
  children: React.ReactNode;
}
const DateProvider = ({ children }: AuxProps) => {
  const { locale } = useAppState();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      {children}
    </LocalizationProvider>
  );
};

export default DateProvider;
