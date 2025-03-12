import { Button } from '@/components/buttons';
import { Section } from '@/components/section';

const NotFound = () => {
  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <div className="text-center space-y-4">
        <h2 className="text-2xl">Project Not Found</h2>
        <p>Could not find the requested project.</p>

        <Button isLinkButton href="/projects">
          Back to Projects
        </Button>
      </div>
    </Section>
  );
};

export default NotFound;
