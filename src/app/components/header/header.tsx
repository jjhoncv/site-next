import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Cart } from "../cart";
import { Favorite } from "../favorite";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Searcher } from "../searcher";
import { User } from "../user";
import stylesBase from "./../../assets/scss/base.module.scss";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="bg-green-800 text-sm text-white">
        <div className={styles.container}>
          <div className={`${styles.leftNav} ${stylesBase.hiddenMobile}`}>
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
            <MenuOutlinedIcon
              stroke="white"
              strokeWidth={0.8}
              sx={{ fontSize: 30 }}
            />
          </div>

          <Logo />

          <Searcher />
          <div className={styles.right}>
            <Favorite />
            <User />
            <Cart />
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
