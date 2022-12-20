import React from "react";
import style from "./home.module.css";
import name from "../../images/name.PNG";
import home from "../../images/Home.png";
import search from "../../images/search.png";
import explore from "../../images/explore.png";
import reels from "../../images/reels.png";
import message from "../../images/Messenger.png";
import heart from "../../images/heart.png";
import create from "../../images/plus.png";
import profile2 from "../../images/profile2.jpg";
import more from "../../images/more.png";

import NavbarItem from "../../Components/NavbarItem/NavbarItem";
import StatusItem from "../../Components/StatusItem/StatusItem";
export default function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.LeftSection}>
        <div className={style.gap}>
          <div className={style.name}>
            <img src={name} alt="" width="110px" height="40px" />
          </div>
          <div className={style.ItemList}>
            <NavbarItem Name="HOME" Image={home} />
            <NavbarItem Name="Search" Image={search} />
            <NavbarItem Name="Explore" Image={explore} />
            <NavbarItem Name="Reels" Image={reels} />
            <NavbarItem Name="Message" Image={message} />
            <NavbarItem Name="Notification" Image={heart} />
            <NavbarItem Name="Create" Image={create} />
            <NavbarItem Name="Profile" profile={profile2} />
          </div>
        </div>
        <div className={style.gapMore}>
          <NavbarItem Name="More" Image={more} />
        </div>
      </div>
      <div className={style.MidSection}>
        <div className={style.upperSection}>
          <StatusItem Image={profile2} Name="Waji" />
        </div>
      </div>
      <div className={style.RightSection}>switch</div>
    </div>
  );
}
