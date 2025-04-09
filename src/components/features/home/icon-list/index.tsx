import { MyImage } from '@/components/ui/image';
import { StaticImageData } from 'next/image';

type IconListProps = {
  iconList: StaticImageData[];
};

export const IconList = ({ iconList }: IconListProps) => {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {iconList.map((icon) => (
        <li key={icon.src}>
          <MyImage src={icon.src} sizes="10vw" alt="Technology icon" containerClasses="w-6 h-6" />
        </li>
      ))}
    </ul>
  );
};
