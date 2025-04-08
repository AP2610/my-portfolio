import { MyImage } from '@/components/ui/image';
import { Logo } from '@/components/ui/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import clsx from 'clsx';
import { DesktopNavigation } from '../navigation/desktop-navigation';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const asideClasses = clsx(
    'bg-sidebar-bg sticky top-0 h-screen w-[300px] flex-col items-center gap-16 py-16 text-foreground shadow-md',
    className
  );

  return (
    <aside className={asideClasses}>
      <div className="flex items-center gap-6">
        <Logo isNavOpen={false} />
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col items-center gap-4 px-6">
        <MyImage
          src="/cv/headshot.webp"
          alt="Arjun Puri"
          priority
          sizes="50vw"
          containerClasses="w-32 h-32 rounded-full overflow-hidden border-2 border-accent-lime hover:scale-105 transition-transform duration-300"
        />

        <div className="space-y-1 text-center">
          <h2 className="text-2xl">Arjun Puri</h2>
          <p className="text-gray-500">Welcome to my portfolio!</p>
        </div>
      </div>

      <nav className="w-full">
        <DesktopNavigation isVertical />
      </nav>
    </aside>
  );
};
