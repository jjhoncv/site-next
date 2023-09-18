import styles from "./navigation.module.scss";
import stylesBase from "./../../assets/scss/base.module.scss";
import { data } from "./data";

export const Navigation = () => {
  return (
    <>
      <div className={`${styles.mobileNav} ${stylesBase.hiddenDesktop}`}></div>
      <div className={`${styles.desktopNav} ${stylesBase.hiddenMobile}`}>
        <ul className={styles.container}>
          {data.map((item, key) => (
            <li key={key}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
