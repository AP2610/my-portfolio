'use client';

import { AnimatedElementPresence } from '@/components/ui/animated-element-presence';
import { AnimatedText } from '@/components/ui/animated-text';
import clsx from 'clsx';
import { useState } from 'react';

type SmallScreenHeroTitleProps = {
  className?: string;
};

export const SmallScreenHeroTitle = ({ className }: SmallScreenHeroTitleProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const classes = clsx('space-y-4 text-foreground', className);

  return (
    <div className={classes}>
      <h1 className="text-3xl">
        <AnimatedText text="Hi, I'm Arjun" delay={0.4} onComplete={() => setShowDescription(true)} />
      </h1>

      <div className="relative">
        {/* This is a hack to avoid layout shift when the AnimatedElementPresence component below enters the DOM */}
        {!showDescription && (
          <p className="text-lg text-background" aria-hidden="true">
            I'm a frontend engineer based in the Netherlands.
          </p>
        )}

        {showDescription && (
          <AnimatedElementPresence entryAnimationDelay={0} animationProperty="opacity">
            <p className="text-lg">I'm a frontend engineer based in the Netherlands.</p>
          </AnimatedElementPresence>
        )}
      </div>
    </div>
  );
};
