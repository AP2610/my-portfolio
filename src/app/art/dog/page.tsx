import styles from './style.module.scss';

const Dog = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.dog}>
            <div className={styles.head}>
              <div className={styles.eyes}></div>
              <div className={styles.cheeks}></div>
              <div className={styles.noseMouth}></div>
              <div className={styles.tongue}></div>
            </div>

            <div className={styles.body}>
              <div className={styles.legLeft}></div>
              <div className={styles.legRight}></div>
            </div>

            <div className={styles.tail}></div>

            <div className={`${styles.hindLegLeft} ${styles.hindLeg}`}></div>
            <div className={`${styles.hindLegRight} ${styles.hindLeg}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
