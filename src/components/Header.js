import React from "react";
import HeaderRow from "./HeaderRow";

const Header = () => (
  <div className="dayRow header">
    <div className="rowCell" />
    <div className="rowCell day-point"> ALL DAY </div>
    {[...Array(8)].map((x, i) => <HeaderRow x={i} key={i} />)}
  </div>
);

export default Header;
