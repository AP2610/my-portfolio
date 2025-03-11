import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';

type NavigationMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const NavigationMenu = ({ isOpen, setIsOpen }: NavigationMenuProps) => {
  return (
    <nav>
      <MobileNavigation className="md:hidden" isOpen={isOpen} setIsOpen={setIsOpen} />

      <DesktopNavigation className="hidden md:block" />
    </nav>
  );
};
