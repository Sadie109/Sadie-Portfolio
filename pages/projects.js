import React from "react";
import styles from "../styles/project.module.css";

function projects() {
  return (
    <div className={styles.ParentContainer}>
      <div className={styles.Title}>Project ShowCase</div>

      <div className={styles.WorkContainer}>
        <div className={styles.InfoContainer}>
          <p>filler</p>
        </div>
        <div>
          <img className={styles.ImgContainer} src="/image.jpg" />
          <a>text</a>
          <a>text</a>
        </div>
      </div>

      {/* <div className={styles.SecondInfoContainer}>
        <p>filler</p>
      </div>
      <div className={styles.SecondImgContainer}>
      <img/>
        <a>text</a>
        <a>text</a>
      </div>

      <div className={styles.InfoContainer}>
        <p>filler</p>
      </div>
      <div className={styles.ImgContainer}>
      <img/>
        <a>text</a>
        <a>text</a>
      </div> */}
    </div>
  );
}

export default projects;
