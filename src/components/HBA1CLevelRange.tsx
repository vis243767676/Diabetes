import { FunctionComponent } from "react";
import UserLevel from "./UserLevel";
import styles from "./HBA1CLevelRange.module.css";

export type HBA1CLevelRangeType = {
  className?: string;
};

const HBA1CLevelRange: FunctionComponent<HBA1CLevelRangeType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.hba1cLevelRange, className].join(" ")}>
      <div className={styles.hbAcRangeDetails}>
        <div className={styles.hbAcRangeCalculation}>
          <div className={styles.yourEstimatedHba1cLevelsParent}>
            <h3 className={styles.yourEstimatedHba1c}>
              Your estimated HbA1c Levels
            </h3>
            <div className={styles.calculatedBasedOn}>
              Calculated based on your inputs and health reports.
            </div>
          </div>
        </div>
      </div>
      <UserLevel />
    </section>
  );
};

export default HBA1CLevelRange;
