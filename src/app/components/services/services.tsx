import stylesBase from "./../../assets/scss/base.module.scss";
import styles from "./services.module.scss";
import { data } from "./data";
import React from "react";

export const Services = () => {
  return (
    <div className={styles.block}>
      <div className={stylesBase.container}>
        <div className={styles.inner}>
          {data.map((item, key) => (
            <div key={key} className={styles.item}>
              {item.icon}
              <div className={styles.content}>
                <div className={styles.heading}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
