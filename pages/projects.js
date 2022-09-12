import React from "react";
import styles from "../styles/project.module.css";

function projects() {
  return (
    <div className={styles.ParentContainer}>
      <div className={styles.Title}>Project ShowCase</div>

      <div className={styles.WorkContainer}>
        <div className={styles.InfoContainer}>
          <p className={styles.par}>For my 4 week final project as a team we decided to create a app to enable solo travellers to create saved day plans from a selection of attractions, from larger landmarks to smaller businesses. We endeavoured to make this app as streamlined and easy to navigate as possible for the user to minimise the friction of solo travelling.
</p>
        </div>
        <div>
          <img className={styles.Img} src="/Saunter.png" />
          <a style={{marginRight: 10}}  href="https://final-project-front-end-team-saunter.vercel.app/">Live</a> 
          <a href="https://github.com/SchoolOfCode/final-project_front-end-team-saunter">Github</a>
        </div>
      </div>
         
      <div className={styles.ProjectContainer}>
      <div className={styles.ProjectInfoContainer}>
      <p className={styles.par}>As my first team project, we came together to tackle a problem with burnout, mindfulness within bootcampers. During this project we maintained a positive, supportive atmosphere with clear communication for success within our group and app.</p>
      </div>
      <img className={styles.Img} src="/MindActivity.png" />
       
        <a style={{marginRight: 10}}  href="https://github.com/SchoolOfCode/w9_frontend-project-mindactivity">Github</a>
       
      </div>

      
    </div>
  );
}

export default projects;
