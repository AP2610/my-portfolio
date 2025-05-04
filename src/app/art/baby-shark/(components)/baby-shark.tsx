'use client';

import { Button } from '@/components/ui/button';
import styles from '../style.module.scss';
import { useRef, useState } from 'react';

export const BabyShark = () => {
  const [isSwimming, setIsSwimming] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  const handleSwimClick = () => {
    if (!animationRef.current) return;

    animationRef.current.classList.toggle(styles.swim);
    setIsSwimming(!isSwimming);
  };

  return (
    <div className={`${styles.canvas} pb-header-height pt-header-height`}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div ref={animationRef} className={styles.animationContainer}>
            <div className={styles.mainBodyBorder}></div>
            <div className={styles.topFin}></div>

            <div className={styles.mainBody}>
              <div className={styles.eyeLeft}></div>
              <div className={styles.eyeRight}></div>
              <div className={styles.mouth}></div>
              <div className={styles.gills}></div>
            </div>

            <div className={styles.rearFin}>
              <div className={styles.rearFinTop}></div>
              <div className={styles.rearFinBottom}></div>
            </div>

            <div className={styles.frontFin}></div>
            <div className={styles.behindFin}></div>
          </div>
        </div>

        {!isSwimming && <div className={styles.shadow}></div>}
      </div>

      <Button variant="electric-blue-secondary" onClick={handleSwimClick}>
        Swim
      </Button>
    </div>
  );
};
