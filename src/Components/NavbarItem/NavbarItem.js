import React from "react";
import style from "./navbarItem.module.css";
import home from "../../images/Home.png";

export default function NavbarItem({ Name, Image, profile }) {
  return (
    <div className={style.NavItems}>
      <div className={style.NavImg}>
        <img
          src={profile ? profile : Image}
          alt=""
          width="24px"
          height="24px"
          style={{ borderRadius: `${profile ? "50%" : ""}` }}
        />
      </div>

      <div className={style.NavName} style={{ fontSize: "15px" }}>
        {Name}
      </div>
    </div>
  );
}
