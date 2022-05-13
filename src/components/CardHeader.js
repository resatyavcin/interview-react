import React from "react";
import "../styles/CardHeader.css";
import { useData } from "../context/DataContext";

function CardHeader() {
  const { on, setOn, setFilter } = useData();
  return (
    <div className="wrapperHeader">
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <input
        type="checkbox"
        value="active"
        onChange={() => {
          setOn(!on);
        }}
      />
    </div>
  );
}

export default CardHeader;
