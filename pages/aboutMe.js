import React from "react";
import styles from "../styles/aboutMe.module.css";

function aboutMe() {
  return (
    <div className={styles.ParentContainer}>
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div> About Me</div>
        </div>
        <div className={styles.Paragraph}>
          <p>
            I'm an enthusiastic and budding Web Developer having experienced a
            variety of stages of web development. Knowledgeable in Full-stack
            Development, User Interface, Testing, and Debugging Processes, with
            the drive and motivation to learn more and progress through my new
            role to reach new heights and goals.
          </p>
          <div className={styles.Skills}>
            <p>Languages i have experience with:</p>
            <div className={styles.PhotoOne}>
              <img src="/JS.png" style={{ width: 70 }} />
              <img src="/HTML & CSS.png" style={{ width: 100 }} />
              <img src="/Git.png" style={{ width: 70 }} />
              <img src="/PostgreSQL.png" style={{ width: 70 }} />
            </div>
          </div>
          <p>Tech i have used:</p>
          <div className={styles.PhotoTwo}>
            <img src="/React-icon.png" style={{ width: 70 }} />
            <img src="/Next.png" style={{ width: 70 }} />
            <img src="/Node.png" style={{ width: 70 }} />
            <img src="/Jest.png" style={{ width: 70 }} />
            <img src="/cypress-logo.png" style={{ width: 70 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutMe;
