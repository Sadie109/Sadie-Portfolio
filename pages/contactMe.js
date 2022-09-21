import React from "react";
import styles from "../styles/contactMe.module.css";

function contactMe() {
  return (
    <div className={styles.ParentContainer}>
      <img
        className={styles.BackGroundContainer}
        src="https://c1.wallpaperflare.com/preview/77/255/802/wood-ivy-green-leaves.jpg"
      />
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div>Contact Me</div>
        </div>
        <div className={styles.Paragraph}>
          <p>
            Feel free to contact me via email or linkedIn. <br />
            As I'm open to many opportunities.
          </p>
        </div>
        <div className={styles.Photo}>
          <div style={{ width: 100, height: 100 }}>
            <a href="https://github.com/Sadie109">
              <img className={styles.img} src="/Github.png" />
            </a>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <a href="https://www.linkedin.com/in/sadie-goddard-227398237/">
              <img className={styles.img} src="/Linkedin.png" />
            </a>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <a href="https://puu.sh/JiZ1m/68ae3a9815.pdf">
              <img className={styles.img} src="/Download.png" />
            </a>
          </div>
          <div style={{ width: 100, height: 100 }}>
            <a href="mailto: sadie175212@gmail.com">
              <img className={styles.img} src="/Email.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactMe;
