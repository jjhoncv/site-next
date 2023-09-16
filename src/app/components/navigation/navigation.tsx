import styles from "./navigation.module.scss";
import stylesBase from "./../../assets/scss/base.module.scss";

export const Navigation = () => {
  return (
    <>
      <div className={`${styles.mobileNav} ${stylesBase.hiddenDesktop}`}></div>
      <div className={`${styles.desktopNav} ${stylesBase.hiddenMobile}`}>
        <ul className={styles.container}>
          <li className="category">
            <a href="#">Fashion</a>
          </li>
          <li className="category">
            <a href="#">Backpacks</a>
          </li>
          <li className="category">
            <a href="#">Accesories</a>
          </li>
          <li className="category">
            <a href="#">Shoes Collection</a>
          </li>
          <li className="category">
            <a href="#">Sandles</a>
          </li>
          <li className="category">
            <a href="#">Sweaters</a>
          </li>
          <li className="category">
            <a href="#">Overcoat</a>
          </li>
          <li className="category">
            <a href="#">About Us</a>
          </li>
          <li className="category">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </>
  );
};
