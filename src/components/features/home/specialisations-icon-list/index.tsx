'use client';

import { MyImage } from '@/components/ui/image';
import { ThemeContext } from '@/context/theme-context';
import { useContext, useState, useEffect } from 'react';

import JavaScriptIcon from '@/public/icons/javascript-48.png';
import NextJsIconDark from '@/public/icons/nextjs-200.png';
import NextJsIconLight from '@/public/icons/nextjs-icon-light.png';
import ReactIcon from '@/public/icons/react-40.png';
import SanityIcon from '@/public/icons/sanity-180.png';
import TailwindIcon from '@/public/icons/tailwindcss-48.png';
import TypeScriptIcon from '@/public/icons/typescript-50.png';

export const SpecialisationsIconList = () => {
  const { theme } = useContext(ThemeContext);
  const [nextJsIcon, setNextJsIcon] = useState(NextJsIconDark);

  useEffect(() => {
    setNextJsIcon(theme === 'dark' ? NextJsIconDark : NextJsIconLight);
  }, [theme]);

  const iconList = [
    {
      image: nextJsIcon,
      alt: 'Next.js icon',
    },
    {
      image: ReactIcon,
      alt: 'React icon',
    },
    {
      image: JavaScriptIcon,
      alt: 'JavaScript icon',
    },
    {
      image: TypeScriptIcon,
      alt: 'TypeScript icon',
    },
    {
      image: TailwindIcon,
      alt: 'Tailwind CSS icon',
    },
    {
      image: SanityIcon,
      alt: 'Sanity CMS icon',
    },
  ];

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {iconList.map((icon) => (
        <li key={icon.image.src}>
          <MyImage src={icon.image} sizes="10vw" priority alt={icon.alt} containerClasses="w-6 h-6" />
        </li>
      ))}
    </ul>
  );
};
