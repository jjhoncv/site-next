import stylesBase from "./../../assets/scss/base.module.scss";
import styles from "./widgets.module.scss";

export const Widgets = () => {
  return (
    <div className={styles.block}>
      <div className={stylesBase.container}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.heading}>Easy Online Support</div>
              <div className={styles.description}>Any Time Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
