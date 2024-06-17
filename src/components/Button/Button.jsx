import React from "react";

import styles from './Button.module.scss'

const Button = ({ text }) => {
  return (
    <a href="https://www.instagram.com/shy__cakes/" rel="noreferrer noopener nofollow" target="_blank">
      <button className={styles.btn} type="button">
        <strong className={styles.strong}>{text}</strong>
        <div className={styles.container_stars}>
          <div className={styles.stars} />
        </div>
        <div className={styles.glow}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </button>
    </a>
  );
};

export default Button;
