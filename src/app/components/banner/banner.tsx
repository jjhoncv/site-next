import Image from "next/image";
import styles from "./banner.module.scss";
import stylesBase from "./../../assets/scss/base.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.figure}>
        <a className={styles.link} href="http://">
          <Image
            src="/imgs/banner-sample-1.jpg"
            alt="banner"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              100vw"
            style={{ height: "100%", width: "100%" }}
            width={1903}
            height={650}
          />
        </a>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>Up To 50% Discount</div>
          <div className={styles.subheading}>
            Leather Backpack <span>& Sunglasses</span>
          </div>
          <a className={styles.btn} href="http://">
            shop now
          </a>
        </div>
      </div>
    </div>
  );
};
