import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa6';
import { AccordionContent } from './index';

type AccordionItemProps = {
  title: string;
  content: AccordionContent;
  isOpen: boolean;
  onToggle: () => void;
};

export const AccordionItem = ({ title, content, isOpen, onToggle }: AccordionItemProps) => {
  let accordionContent;

  if (Array.isArray(content)) {
    accordionContent = content.map((item, index) => (
      <p key={index} className="text-foreground">
        {item}
      </p>
    ));
  } else if (typeof content === 'string') {
    accordionContent = <p className="text-foreground">{content}</p>;
  } else {
    // react node
    accordionContent = <>{content}</>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-foreground">{title}</h3>

        <Button variant="icon-button" className="text-foreground" onClick={onToggle}>
          <FaPlus className={isOpen ? 'rotate-45' : ''} />
        </Button>
      </div>

      <div>{accordionContent}</div>
    </div>
  );
};
