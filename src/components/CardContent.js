import React, { Fragment } from "react";
import { useData } from "../context/DataContext";
import "../styles/CardContent.css";

function CardContent() {
  const { data } = useData();

  return (
    <Fragment>
      {data.length > 0 ? (
        data.map((item, i) => (
          <div key={i} className="wrapperCardContent">
            <div className="cardContent">{item.content}</div>
            <div className="cardAction">
              <button
                className="active"
                disabled={item.isActive && true}
                onClick={() => {
                  console.log("active", item.id);
                }}
              >
                active
              </button>
              <button
                className="inactive"
                disabled={!item.isActive && true}
                onClick={() => {
                  console.log("inactive", item.id);
                }}
              >
                inactive
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Can't not find card</p>
      )}
    </Fragment>
  );
}

export default CardContent;
