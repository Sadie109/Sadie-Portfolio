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
          <img className={styles.Img} src="/image.jpg" />
          <a>text</a>
          <a>text</a>
        </div>
      </div>
         
      <div className={styles.ProjectContainer}>
      <div className={styles.ProjectInfoContainer}>
        <p>filler</p>
      </div>
      <div className={styles.ProjectImg}>
        <img />
        <a>text</a>
        <a>text</a>
      </div>
      </div>

      {/* <div className={styles.InfoContainer}>
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
