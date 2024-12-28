import { FunctionComponent, useCallback } from "react";
import styles from "./FactorsList.module.css";

export type FactorsListType = {
  className?: string;
};

const FactorsList: FunctionComponent<FactorsListType> = ({
  className = "",
}) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div
      className={[styles.factorsList, className].join(" ")}
      data-acc-item
      data-acc-open
      data-acc-header
      data-acc-original
      data-acc-default-open
      onClick={onAccordionHeaderClick}
    >
      <div className={styles.physicalActivity}>
        <p className={styles.physical}>Physical</p>
        <p className={styles.physical}>Activity</p>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.s}>S</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>M</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>T</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>W</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>T</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>F</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.s}>S</div>
        </div>
      </div>
      <div className={styles.accordionContentaccordionDef} data-acc-content>
        <div className={styles.container}>
          <div className={styles.kcalParent}>
            <div className={styles.kcal}>600 kcal</div>
            <img
              className={styles.arrowChevronRightIcon}
              loading="lazy"
              alt=""
              src="/arrowchevronright.svg"
            />
            <div className={styles.sedentaryHighContainer}>
              <span>Sedentary</span>
              <span className={styles.highImpact}> | High Impact</span>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.factorsListChild}
        alt=""
        src="/rectangle-33864.svg"
      />
      <img
        className={styles.alertOctagonFillIcon}
        loading="lazy"
        alt=""
        src="/alertoctagonfill.svg"
      />
    </div>
  );
};

export default FactorsList;
