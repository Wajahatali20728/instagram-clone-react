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
import profile1 from "../../images/profile1.jpg";
import more from "../../images/more.png";
import dots from "../../images/dots.png";
import post from "../../images/post.PNG";

import NavbarItem from "../../Components/NavbarItem/NavbarItem";
import StatusItem from "../../Components/StatusItem/StatusItem";
import ProfileItems from "../../Components/ProfileItems/ProfileItems";
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
          <StatusItem Image={profile1} Name="Hamza" />
          <StatusItem Image={profile2} Name="Ali" />
          <StatusItem Image={profile1} Name="Umer" />
          <StatusItem Image={profile2} Name="Umer" />
        </div>
        <div className={style.lowerSection}>
          <div className={style.postHeader}>
            <div className={style.postHeaderLeft}>
              <div className={style.newsFeedImg}>
                <img
                  src={profile2}
                  alt=""
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className={style.feedName}>Waji-Coding</div>
            </div>
            <div className={style.postHeaderRight}>
              <img src={dots} alt="" width="20px" height="20px" />
            </div>
          </div>
        </div>
        <div className={style.feedimg}>
          <img src={post} alt="" height="440px" width="625px" />
        </div>
      </div>
      <div className={style.RightSection}>
        <ProfileItems HAHA={profile2} HEHE="Wajahat Ali" HUHU="Switch" />
        <div className={style.MidLine}>
          <div className={style.suggest}>Suggestion For You</div>
          <div className={style.seeAll}>See All</div>
        </div>
        <div className={style.rightLowerList}>
          <ProfileItems
            HAHA={profile1}
            HEHE="Suggested for you"
            HUHU="Follow"
          />
          <ProfileItems HAHA={profile2} HEHE="Follows you" HUHU="Follow" />
          <ProfileItems HAHA={profile1} HEHE="Followed by iiui" HUHU="Follow" />
          <ProfileItems
            HAHA={profile2}
            HEHE="Followed by me_hadi18"
            HUHU="Follow"
          />
          <ProfileItems
            HAHA={profile1}
            HEHE="Suggested for you"
            HUHU="Follow"
          />
        </div>
      </div>
    </div>
  );
}
