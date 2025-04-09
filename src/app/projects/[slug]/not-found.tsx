import { Section } from '@/components/layout/section';
import { MyLink } from '@/components/ui/my-link';

const NotFound = () => {
  return (
    <Section className="mt-[var(--header-height)]" hasTopPadding hasBottomPadding>
      <div className="space-y-4 text-center">
        <h2 className="text-2xl">Project Not Found</h2>
        <p>Could not find the requested project.</p>

        <MyLink type="internal" variant="primary" href="/projects">
          Back to Projects
        </MyLink>
      </div>
    </Section>
  );
};

export default NotFound;
