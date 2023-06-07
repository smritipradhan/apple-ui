import React from "react";
import { CONSTANT } from "../../constants/Constant";
import styles from "./Tab.module.scss";
import appleLogo from "./../../assets/images/appleLogo.svg";
import searchIcon from "./../../assets/images/searchIcon.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";

const Tab = ({ tabBackgroundColor = "black" }) => {
  return (
    <div
      className={styles.tabContainer}
      style={{ backgroundColor: `${tabBackgroundColor}` }}
    >
      <div className={styles.tabImage}>
        <img src={appleLogo} alt="appleLogo" />
      </div>
      {CONSTANT.tabData.map((tabElement) => {
        return <div className={styles.tabElement}>{tabElement?.name}</div>;
      })}
      <div className={styles.tabImage}>
        <img src={searchIcon} alt="searhIcon" />
      </div>
      <div className={styles.tabImage}>
        <img src={cartIcon} alt="cartIcon" />
      </div>
    </div>
  );
};

export default Tab;
