import React from "react";
import styles from "../styles/contactMe.module.css";

function contactMe() {
  return (
    <div className={styles.ParentContainer}>
    <div className={styles.Container}>
      <div className={styles.Title}>
        <div>Contact Me</div>
      </div>
      <div className={styles.Paragraph}>
        <p>
         Feel free to contact me via email or linkedIn. < br />
        As I'm open to many opportunities. 
        </p>
      </div>
      <div className={styles.Photo}>
     <a href="https://github.com/Sadie109"> 
     <img src="/Github.png" style={{ width: 70 }} />
     </a>
     <a href="https://www.linkedin.com/in/sadie-goddard-227398237/"> 
     <img src="/Linkedin.png" style={{ width: 70 }} />
     </a>
     <a href="https://puu.sh/JiZ1m/68ae3a9815.pdf"> 
     <img src="/Download.png" style={{ width: 70 }} />
     </a>
     <a href = "mailto: sadie175212@gmail.com">
     <img src="/Email.png" style={{ width: 70 }} />
     </a>
      </div>
    </div>
  </div>
  );
}

export default contactMe;
