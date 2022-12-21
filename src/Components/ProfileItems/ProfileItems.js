import React from "react";
import style from "./ProfileItem.module.css";
import profile1 from "../../images/profile1.jpg";
import profile2 from "../../images/profile2.jpg";

export default function ProfileItems({ HAHA, HEHE, HUHU }) {
  return (
    <div className={style.profileMain}>
      <div className={style.leftSideProfile}>
        <div className={style.leftSideImage}>
          <img
            src={HAHA}
            alt=""
            width="65px"
            width="65px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={style.ProfileName}>
          <div className={style.upSideName}>waji-9119</div>
          <div className={style.downSideName}>{HEHE}</div>
        </div>
      </div>
      <div className={style.rightSideProfile}>{HUHU}</div>
    </div>
  );
}
