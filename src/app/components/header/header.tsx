import Image from "next/image";
import styles from "./header.module.scss";
import stylesBase from "./../../assets/scss/base.module.scss";
import { Navigation } from "../navigation";
import { Searcher } from "../searcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Cart } from "../cart";
import { Favorite } from "../favorite";
import { User } from "../user";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerNav}>
        <div className={styles.container}>
          <div className={styles.leftNav}>
            <div className={styles.headerBlock}>
              Summer sale for all fashion clothes - off 50%! Shop Now
            </div>
          </div>
          <div className={styles.rightNav}>
            <ul className={styles.headerBlock}>
              <li>
                <a href="http://">Need Help?</a>
              </li>
              <li>
                <a href="http://">Track Your Order</a>
              </li>
              <li>
                <a href="http://">Gift Cards</a>
              </li>
              <li>
                <a href="http://">Discount Zone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.headerTop}>
        <div className={styles.containerTop}>
          <div
            className={`${styles.mobileHambuger} ${stylesBase.hiddenDesktop}`}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#222222", width: 20 }}
            />
          </div>
          <div className={stylesBase.logo}>
            <a href="http://">
              <Image
                src="/next.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={35}
                priority
              />
            </a>
          </div>
          <div className={styles.right}>
            <Favorite />
            <User />
            <Cart />
          </div>
          <div className={styles.search}>
            <Searcher />
          </div>
        </div>
      </div>

      <div className={styles.headerTopInner}>
        <div className={styles.container}>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
