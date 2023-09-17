import Image from "next/image";
import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <a href="http://">
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
  );
};
