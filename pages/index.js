import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.ParentContainer}>
      <div className={styles.Container}>
        <div className={styles.Title}>
          <div>Hi, I'm Sadie Goddard</div>
        </div>
        <div className={styles.Paragraph}>
          <p>
            Junior FullStack Developer, with a passion for <br />
            learning back-end and design.
          </p>
        </div>
        <div className={styles.Photo}>
        <img src="/image.jpg" style={{ width: 400 }} />
        </div>
      </div>
    </div>
  );
}
