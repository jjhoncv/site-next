import stylesBase from "./../../assets/scss/base.module.scss";
import styles from "./widgets.module.scss";
import Image from "next/image";

export const Widgets = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.inner}>
              <div className={styles.figure}>
                <a href="http://" className={styles.link}>
                  <Image
                    src="/imgs/sub-banner-1.jpg"
                    alt="banner"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              100vw"
                    width={685}
                    height={300}
                  />
                </a>
              </div>
              <div className={styles.content}>
                <div className={styles.heading}>Flat 20% Discount</div>
                <div className={styles.description}>
                  Stylish Women
                  <span>Bags</span>
                </div>
                <a href="http://" className={styles.btn}>
                  shop now
                </a>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.inner}>
              <div className={styles.figure}>
                <a href="http://" className={styles.link}>
                  <Image
                    src="/imgs/sub-banner-2.jpg"
                    alt="banner"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              100vw"
                    width={685}
                    height={300}
                  />
                </a>
              </div>
              <div className={styles.content}>
                <div className={styles.heading}>Flat 30% Discount</div>
                <div className={styles.description}>
                  Stylish Quartz <span>Watch</span>
                </div>
                <a href="http://" className={styles.btn}>
                  shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
