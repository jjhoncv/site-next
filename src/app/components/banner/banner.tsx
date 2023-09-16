import Image from "next/image";
import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <a href="http://">
        <Image
          src="/imgs/banner-sample-1.jpg"
          alt="Vercel Logo"
          className="dark:invert"
          layout="fill"
          objectFit="contain"
        />
      </a>
    </div>
  );
};
