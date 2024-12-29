import { FunctionComponent } from "react";
import Button1 from "../components/Button1";
import Header from "../components/Header";
import HBA1CLevelRange from "../components/HBA1CLevelRange";
import Header1 from "../components/Header1";
import Button3 from "../components/Button3";
import styles from "./Weight.module.css";

const Weight: FunctionComponent = () => {
  return (
    <div className={styles.weight}>
      <div className={styles.factorsAffectingYourHba1cLParent}>
        <div className={styles.factorsAffectingYour}>
          Factors affecting your HbA1C levels
        </div>
        <div className={styles.weightParent}>
          <div className={styles.diet}>
            <p className={styles.physical}>Weight</p>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.s}>S</div>
          <div className={styles.frameItem} />
          <div className={styles.m}>M</div>
          <div className={styles.frameInner} />
          <div className={styles.t}>T</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.w}>W</div>
          <div className={styles.frameChild1} />
          <div className={styles.t1}>T</div>
          <div className={styles.frameChild2} />
          <div className={styles.f}>F</div>
          <div className={styles.frameChild3} />
          <div className={styles.s1}>S</div>
          <div className={styles.kcal}>3,120 Kcal</div>
          <div className={styles.obeseHighContainer}>
            <span>Obese</span>
            <span className={styles.highImpact}> | High Impact</span>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            alt=""
            src="/alertoctagonfill.svg"
          />
        </div>
        <div className={styles.weightParent}>
          <div className={styles.diet}>
            <p className={styles.physical}>Diet</p>
          </div>
          <div className={styles.frameChild4} />
          <div className={styles.s}>S</div>
          <div className={styles.frameItem} />
          <div className={styles.m}>M</div>
          <div className={styles.frameInner} />
          <div className={styles.t}>T</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.w}>W</div>
          <div className={styles.frameChild1} />
          <div className={styles.t1}>T</div>
          <div className={styles.frameChild2} />
          <div className={styles.f}>F</div>
          <div className={styles.frameChild3} />
          <div className={styles.s1}>S</div>
          <div className={styles.kcal}>3,120 Kcal</div>
          <div className={styles.averageHighContainer}>
            <span>Average</span>
            <span className={styles.highImpact}> | High Impact</span>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33864-1.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            alt=""
            src="/alerttrianglefill.svg"
          />
        </div>
        <div className={styles.weightParent}>
          <div className={styles.diet}>
            <p className={styles.physical}>Physical</p>
            <p className={styles.physical}>Activity</p>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.s}>S</div>
          <div className={styles.frameItem} />
          <div className={styles.m}>M</div>
          <div className={styles.frameInner} />
          <div className={styles.t}>T</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.w}>W</div>
          <div className={styles.frameChild1} />
          <div className={styles.t1}>T</div>
          <div className={styles.frameChild2} />
          <div className={styles.f}>F</div>
          <div className={styles.frameChild3} />
          <div className={styles.s1}>S</div>
          <div className={styles.kcal}>600 Kcal</div>
          <div className={styles.sedentaryHighContainer}>
            <span>Sedentary</span>
            <span className={styles.highImpact}> | High Impact</span>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            alt=""
            src="/alertoctagonfill.svg"
          />
        </div>
        <div className={styles.weightParent}>
          <div className={styles.diet}>
            <p className={styles.physical}>Sleep</p>
            <p className={styles.physical}>Quality</p>
          </div>
          <div className={styles.frameChild20} />
          <div className={styles.s}>S</div>
          <div className={styles.frameItem} />
          <div className={styles.m}>M</div>
          <div className={styles.frameInner} />
          <div className={styles.t}>T</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.w}>W</div>
          <div className={styles.frameChild1} />
          <div className={styles.t1}>T</div>
          <div className={styles.frameChild2} />
          <div className={styles.f}>F</div>
          <div className={styles.frameChild3} />
          <div className={styles.s1}>S</div>
          <div className={styles.kcal}>5 Hrs</div>
          <div className={styles.goodLowContainer}>
            <span>Good</span>
            <span className={styles.highImpact}> | Low Impact</span>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33864-3.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            alt=""
            src="/alertcheckcirclefill.svg"
          />
        </div>
        <div className={styles.weightParent}>
          <div className={styles.diet}>
            <p className={styles.physical}>Stress</p>
            <p className={styles.physical}>Level</p>
          </div>
          <div className={styles.frameChild28} />
          <div className={styles.s}>S</div>
          <div className={styles.frameItem} />
          <div className={styles.m}>M</div>
          <div className={styles.frameInner} />
          <div className={styles.t}>T</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.w}>W</div>
          <div className={styles.frameChild1} />
          <div className={styles.t1}>T</div>
          <div className={styles.frameChild2} />
          <div className={styles.f}>F</div>
          <div className={styles.frameChild3} />
          <div className={styles.s1}>S</div>
          <div className={styles.kcal}>Low</div>
          <div className={styles.goodLowContainer}>
            <span>Good</span>
            <span className={styles.highImpact}> | Low Impact</span>
          </div>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-33864-3.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            alt=""
            src="/alertcheckcirclefill.svg"
          />
        </div>
      </div>
      <footer className={styles.thisProgramProvidesDataDriWrapper}>
        <div className={styles.thisProgramProvides}>
          This program provides data-driven support to help you manage your
          diabetes. While it offers valuable insights, individual results may
          vary. Always consult your healthcare provider for personalized advice.
        </div>
      </footer>
      <Button1 property1="1 Button" />
      <div className={styles.designElement} />
      <main className={styles.headerParent}>
        <Header header="PWA" />
        <section className={styles.hbAcRange}>
          <HBA1CLevelRange yourEstimatedHbA1cLevels="Your HbA1C levels" />
          <div className={styles.bottomSheet}>
            <div className={styles.sheetContent} />
            <Header1 action="Default" property1="Primary" />
            <div className={styles.weightManagement}>
              <div className={styles.component14}>
                <div className={styles.description}>
                  <div
                    className={styles.youCanManage}
                  >{`You can manage your weight by adopting a balanced diet pattern and regular exercise routine. Monitoring portion sizes and staying hydrated will also help in normalizing your weight. `}</div>
                </div>
              </div>
              <div className={styles.weightDetails}>
                <div className={styles.detailsContainer}>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.frameChild36}
                        alt=""
                        src="/rectangle-42113@2x.png"
                      />
                      <div className={styles.frameChild37} />
                    </div>
                    <div className={styles.weightValues}>
                      <img
                        className={styles.weightIcon}
                        loading="lazy"
                        alt=""
                        src="/weight.svg"
                      />
                      <div className={styles.weightImpact}>
                        <div className={styles.kg}>Weight</div>
                        <div className={styles.impactHigh}>
                          <span>{`Impact: `}</span>
                          <span className={styles.high}>High</span>
                        </div>
                      </div>
                      <div className={styles.weightStatus}>
                        <div className={styles.kg}>85 kg</div>
                        <div className={styles.overweight}>Overweight</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hbAcEstimateDetails}>
                    <div className={styles.estimateContainer}>
                      <div className={styles.estimatedHba1cLevelsParent}>
                        <h3 className={styles.estimatedHba1cLevels}>
                          Estimated HbA1c Levels
                        </h3>
                        <div className={styles.onceYouReach}>
                          Once you reach the target weight, your HbA1c levels
                          will also reduce.
                        </div>
                      </div>
                    </div>
                    <div className={styles.progressChart}>
                      <div className={styles.chartContainer}>
                        <div className={styles.frameGroup}>
                          <div className={styles.augustWrapper}>
                            <div className={styles.august}>August</div>
                          </div>
                          <div className={styles.userProgressParent}>
                            <div className={styles.userProgress}>
                              <div className={styles.progressMarkers}>5.7%</div>
                              <div className={styles.hba1c}>HbA1c</div>
                              <img
                                className={styles.groupIcon}
                                loading="lazy"
                                alt=""
                                src="/group.svg"
                              />
                            </div>
                            <img
                              className={styles.arrowRightIcon}
                              loading="lazy"
                              alt=""
                              src="/arrowright.svg"
                            />
                          </div>
                          <div className={styles.weightProgress}>
                            <div className={styles.kg1}>85.2 kg</div>
                            <div className={styles.weightStatusLabel}>
                              <div className={styles.overweight1}>
                                Overweight
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.novemberParent}>
                          <div className={styles.november}>November</div>
                          <div className={styles.person1Wrapper}>
                            <div className={styles.person1}>
                              <div className={styles.progressPointParent}>
                                <div className={styles.progressMarkers}>
                                  5.4%
                                </div>
                                <div className={styles.hba1c}>HbA1c</div>
                              </div>
                              <img
                                className={styles.groupIcon1}
                                loading="lazy"
                                alt=""
                                src="/group-1.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.kg2}>72.1 kg</div>
                          <div className={styles.target}>Target</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dietImprovement}>
                      <div className={styles.goalContainer}>
                        <img
                          className={styles.goalIcon}
                          loading="lazy"
                          alt=""
                          src="/goal@2x.png"
                        />
                      </div>
                      <div className={styles.august}>
                        <span>{`Improving your diet pattern can reduce your HbA1c levels by `}</span>
                        <span className={styles.high}>0.4%.</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.weightImpactDetails}>
                    <h3 className={styles.estimatedHba1cLevels}>
                      Impact of weight
                    </h3>
                    <div className={styles.onceYouReach}>
                      Excess weight (overweight or obesity) can increase the
                      body’s blood sugar levels and HbA1c levels.
                    </div>
                  </div>
                </div>
                <div className={styles.weightReduction}>
                  <div className={styles.reductionQuestion}>
                    <h3 className={styles.howCanYou}>
                      How can you reduce your weight?
                    </h3>
                  </div>
                  <Button3 property1="1 Button" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Weight;
