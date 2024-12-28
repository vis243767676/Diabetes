import { FunctionComponent } from "react";
import styles from "./RecruiterPage.module.css";

const RecruiterPage: FunctionComponent = () => {
  return (
    <div className={styles.recruiterPage}>
      <div className={styles.background} />
      <img className={styles.icon} loading="lazy" alt="" src="/01@2x.png" />
      <div className={styles.recruiterPageInner}>
        <div className={styles.buildYourOwnTeamLibraryParent}>
          <h1 className={styles.buildYourOwn}>Build your own team library</h1>
          <div className={styles.dontReinventThe}>
            Don’t reinvent the wheel with every design. Team libraries let you
            share styles and components across files, with everyone on your
            team.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
