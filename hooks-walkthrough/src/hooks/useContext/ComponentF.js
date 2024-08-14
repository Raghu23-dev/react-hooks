
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export default function ComponentF() {
  const theme = useContext(ThemeContext);

  return <div>ComponentF {theme}</div>;
}
