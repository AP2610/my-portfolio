import { Section } from '@/components/layout/section';
import styles from './style.module.scss';

const BabyOctopus = () => {
  return (
    <Section isFullWidth paddingBottom="small">
      <div className={`${styles.canvas} -mt-header-height pb-header-height pt-header-height md:mt-0`}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <div className={styles.headBorder}></div>

            <div className={styles.head}>
              <div className={styles.eyeLeft}></div>
              <div className={styles.eyeRight}></div>
              <div className={styles.mouth}></div>
              <div className={styles.cheeks}></div>
            </div>

            <div className={styles.legs}>
              <div className={`${styles.legOne} ${styles.leg}`}></div>
              <div className={`${styles.legTwo} ${styles.leg}`}></div>
              <div className={`${styles.legThree} ${styles.leg}`}></div>
              <div className={`${styles.legFour} ${styles.leg}`}></div>
            </div>

            <div className={styles.shadow}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BabyOctopus;
