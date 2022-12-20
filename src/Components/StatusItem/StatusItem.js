import React from "react";
import style from "./StatusItem.module.css";
export default function StatusItem({ Image, Name }) {
  return (
    <div className={style.StatusBar}>
      <div className={style.StatusImage}>
        <div
          style={{
            background:
              "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={Image}
            alt=""
            width="75px"
            height="75px"
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              margin: "2px",
            }}
          />
        </div>
      </div>
      <div className={style.StatusName}>{Name}</div>
    </div>
  );
}
