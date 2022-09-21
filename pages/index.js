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
      </div>

      <img className={styles.Photo} src="/image.jpg" style={{ width: 400 }} />

      <img
        className={styles.BackGroundContainer}
        src="https://c0.wallpaperflare.com/preview/428/158/321/background-coffee-computer-connection.jpg"
      />
    </div>
  );
}
