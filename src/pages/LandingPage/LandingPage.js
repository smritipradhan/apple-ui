import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import Footer from "../../components/Footer/Footer";
import Tab from "../../components/Tab/Tab";
import { CONSTANT } from "../../constants/Constant";
import appleCard from "./../../assets/images/appleCard.svg";
import appleGiftLogo from "./../../assets/images/appleGiftLogo.svg";
import appleWatchLogo from "./../../assets/images/appleWatchLogo.svg";
import appleWatchUltra from "./../../assets/images/appleWatchUltra.svg";
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
          <div className={styles.iphone14}>iPhone 14 Pro</div>
          <div className={styles.proBeyond}>Pro. Beyond.</div>
          <div className={styles.learnMoreBuyContainer}>
            <div className={styles.learnMoreBuy}>Learn more</div>
            <div className={styles.learnMoreBuy}>Buy</div>
          </div>
        </div>
        <div className={`${styles.ipadAbout} ${styles.miniItemsContainer}`}>
          <div className={styles.ipadText}>ipad</div>
          <div className={styles.description}>Lovable. Drawable. Magical.</div>
          <div className={styles.learnMoreBuyContainer}>
            <div className={styles.learnMoreBuy}>Learn more</div>
            <div className={styles.learnMoreBuy}>Buy</div>
          </div>
        </div>
        <div className={`${styles.airpods} ${styles.miniItemsContainer}`}>
          <img src={appleGiftLogo} alt="appleGift"></img>
          <div className={styles.title}>Airpods</div>
          <div className={styles.description}>Share the joy</div>
          <div className={styles.learnMoreBuy}>Shop</div>
        </div>
        <div className={`${styles.iwatch} ${styles.miniItemsContainer}`}>
          <img src={appleWatchLogo} alt="appleWatch"></img>
          <div className={styles.description}>A healthy leap ahead.</div>
          <div className={styles.learnMoreBuyContainer}>
            <div className={styles.learnMoreBuy}>Learn more</div>
            <div className={styles.learnMoreBuy}>Buy</div>
          </div>
        </div>
        <div className={`${styles.iwatchAdvance} ${styles.miniItemsContainer}`}>
          <img src={appleWatchUltra} alt="appleWatchUltra"></img>
          <div className={`${styles.distance} ${styles.description}`}>
            Adventure awaits.
          </div>
          <div className={styles.learnMoreBuyContainer}>
            <div className={styles.learnMoreBuy}>Learn more</div>
            <div className={styles.learnMoreBuy}>Buy</div>
          </div>
        </div>
        <div className={`${styles.iboard} ${styles.miniItemsContainer}`}>
          <img src={appleCard} alt="appleCard"></img>
          <div className={styles.description}>
            <div>Get up to 3% Daily Cash back</div>
            <div> with every purchase.</div>
          </div>
          <div className={styles.learnMoreBuyContainer}>
            <div className={styles.learnMoreBuy}>Learn more</div>
            <div className={styles.learnMoreBuy}>Apply Now</div>
          </div>
        </div>
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
