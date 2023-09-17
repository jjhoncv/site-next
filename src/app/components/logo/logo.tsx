import styles from "./logo.module.scss";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className={styles.wrapperLogo}>
      <a className={styles.innerLogo} href="http://">
        <Image
          src="/shopee.svg"
          alt="Vercel Logo"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </a>
    </div>
  );
};
