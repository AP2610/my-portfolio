'use client';

import { AnimatedElementPresence } from '@/components/ui/animation/animated-element-presence';
import { AnimatedText } from '@/components/ui/animation/animated-text';
import { Heading } from '@/components/ui/heading';
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
      <Heading level="h1" weight="black">
        <AnimatedText text="Hi, I'm Arjun" delay={0.4} onComplete={() => setShowDescription(true)} />
      </Heading>

      {/* TODO: Create hook or HOC to handle this for various scenarios */}
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
