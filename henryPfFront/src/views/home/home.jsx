import React from 'react';
import styles from "./home.module.css";

function Inicio() {
  return (
        <div className={styles.home}>
            <div className={styles.buildYourBodyContainer}>
                <span className={styles.buildYourBodyContainer1}>
                <p className={styles.buildYourBody}>
                    <span>BUILD YOUR</span>
                    <span className={styles.body}>BODY</span>
                </p>
                <p className={styles.buildYourMind}>
                    <span>BUILD YOUR </span>
                    <span className={styles.body}>MIND</span>
                </p>
                </span>
            </div>
            <div className={styles.loQueNecesitas}>Lo que necesitas, cuando lo necesites</div>
            <div className={styles.getStartedWrapper}>
                <div className={styles.getStarted}>Get started</div>
            </div>
            <img
                className={styles.gymBackground1Icon}
                alt=""
                src="/gymbackground-1@2x.png"
            />
        </div>
    );
}

export default Inicio;