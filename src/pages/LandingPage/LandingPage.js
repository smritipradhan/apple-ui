import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import Footer from "../../components/Footer/Footer";
import Tab from "../../components/Tab/Tab";
import { CONSTANT } from "../../constants/Constant";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <Tab tabBackgroundColor={"black"} />
      <section className={styles.landingPageContent}>
        <div className={`${styles.appleShoppingEvent} `}>
          {CONSTANT.APPLE_SHOPPING_EVENT}
        </div>
        <div className={styles.appleShoppingText}>{CONSTANT.OFFER_TEXT}</div>
        <div className={styles.getAnEarlyLook}>
          {CONSTANT.GET_AN_EARLY_LOOK}
        </div>
      </section>
      <section className={styles.heroesContainer}>
        <div className={styles.heroesName}>
          <div className={styles.name}>Will Ferrell</div>
          <div className={styles.name}>Ryan Reynolds</div>
        </div>
        <div className={styles.musicalText}>{CONSTANT.COMEDY_TEXT}</div>
        <div className={styles.nowStreaming}>Now Streaming</div>
      </section>
      <div className={styles.iphoneContainer}>
        <div className={styles.iphone14}>iPhone 14</div>
        <div className={styles.biggerAndBigger}>Big and bigger.</div>
        <div className={styles.learnMoreBuy}>
          <div>{CONSTANT.LEARNMORE}</div>
          <div>{CONSTANT.BUY}</div>
        </div>
      </div>
      <div className={styles.iphoneIpad}>
        <div className={`${styles.iphoneAbout} ${styles.miniItemsContainer}`}>
          wdw
        </div>
        <div className={`${styles.ipadAbout} ${styles.miniItemsContainer}`}>
          dw
        </div>
        <div className={`${styles.airpods} ${styles.miniItemsContainer}`}>
          wdw
        </div>
        <div className={`${styles.iwatch} ${styles.miniItemsContainer}`}></div>
        <div
          className={`${styles.iwatchAdvance} ${styles.miniItemsContainer}`}
        ></div>
        <div className={`${styles.iboard} ${styles.miniItemsContainer}`}></div>
      </div>
      <div className={styles.carousalContainer}>
        <Carousal />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
