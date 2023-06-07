import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerDetails}>
        <p className={`${styles.termsAndConditions} ${styles.footerCommon}`}>
          1. Offer valid on qualifying purchases of eligible Apple products from
          November 25, 2022, to November 28, 2022, at a qualifying location.
          Offer subject to availability. While supplies last. Customers shall
          receive a discount equal to the value of the Promotion Product
          (depending on their purchase) off the price of the Eligible Product,
          but will be charged for all items in their cart. Important notice
          regarding the checkout receipt and monthly statement for Apple Card
          Monthly Installment (ACMI) purchases with this promotion: A purchase
          of an Eligible Product made when selecting ACMI (a 0% APR payment
          option available only in the U.S.) as the payment type at checkout
          will receive an instant credit equal to the cost of the Promotion
          Product (Apple Gift Card) deducted from the price of the Eligible
          Product at the time of purchase. You will be charged one ACMI
          installment plan for the Eligible Product discounted by the instant
          credit. The value of the Promotion Product (i.e. the value of the
          Apple Gift Card) will also be charged in a separate second ACMI
          installment plan for the same number of months as the discounted
          Eligible Product. The total combined amount charged over the 2
          separate ACMI installment plans will reflect the original full retail
          price of the Eligible Product. Separately, you will receive and be
          charged for the Promotion Product (Apple Gift Card) in the amount of
          the applicable instant credit. ACMI is subject to credit approval and
          credit limit. Variable APRs for Apple Card other than ACMI range from
          13.99% to 24.99% based on creditworthiness. Rates as of October 1,
          2022. If you choose the pay-in-full or one-time-payment option for an
          ACMI-eligible purchase instead of choosing ACMI as the payment option
          at checkout, that purchase will be subject to the variable APR
          assigned to your Apple Card. Taxes and shipping are not included in
          ACMI transactions and are subject to your standard purchase APR. See
          the Apple Card Customer Agreement at
          https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf
          for more information. ACMI is not available for purchases made online
          at the following special stores: Apple Employee Purchase Plan;
          participating corporate Employee Purchase Programs; Apple at Work for
          small businesses; Government, and Veterans and Military Purchase
          Programs, or on refurbished devices. iPhone activation required on
          iPhone purchases made at an Apple Store with one of these national
          carriers: AT&T, Sprint, Verizon, or T-Mobile. Apple Card is issued by
          Goldman Sachs Bank USA, Salt Lake City Branch. Available for
          qualifying applicants in the United States. If you reside in the U.S.
          territories, please call Goldman Sachs at 877-255-5923 with questions
          about accessing this offer or applying for Apple Card. Except for
          ACMI, this offer cannot be combined with other Apple promotion(s) or
          financing offers that are directed to individual end-user customers in
          the qualifying location. This offer also cannot be combined with the
          Apple Employee Purchase Plan or business loyalty pricing. Some method
          of payment types are not accepted under this offer. See checkout for
          details. Availability of in-store promotion offerings may be limited
          by Apple Store location closures as a result of COVID-19. Additional
          restrictions apply. View full terms and conditions of offer here.
        </p>
        <p className={`${styles.termsAndConditions} ${styles.footerCommon}`}>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings General
          Software Update. Tap Download and Install.
        </p>
        <p className={`${styles.termsAndConditions} ${styles.footerCommon}`}>
          Available for qualifying applicants in the United States.
        </p>
        <p className={`${styles.termsAndConditions} ${styles.footerCommon}`}>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className={`${styles.termsAndConditions} ${styles.footerCommon}`}>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
