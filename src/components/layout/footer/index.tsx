import { NavLink } from '@/components/layout/navigation/nav-link';
import { NAVIGATION_LINKS } from '@/components/layout/navigation/nav-links';
import { Section } from '@/components/layout/section';
import { MyLink } from '@/components/ui/my-link';
import { Logo } from '@/components/ui/logo';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import { FaEnvelope } from 'react-icons/fa';
import { Heading } from '@/components/ui/heading';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Section paddingTop="medium" paddingBottom="small">
        <div className="grid gap-8 border-t border-primary py-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo isNavOpen={false} />

            <p className="text-accent-electric-blue">Building Reliable, Engaging & User-Centric Web Experiences</p>
          </div>

          <div className="text-foreground">
            <Heading level="h3" as="h4" weight="bold" className="mb-4">
              Quick Links
            </Heading>

            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink isInFooter href={link.href} fontSize="small" showBorder={false} textAlign="left">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Heading level="h3" as="h4" weight="bold">
              Let's Connect
            </Heading>
            <p className="text-foreground">Interested in working together? Let's chat!</p>

            <MyLink type="external" href="mailto:corned-tippets-5g@icloud.com" variant="secondary">
              Get in Touch <FaEnvelope className="tilt-shaking ml-2" />
            </MyLink>
          </div>

          <div>
            <Heading level="h3" as="h4" weight="bold" className="mb-4">
              More Ways to Connect
            </Heading>

            <ul className="flex gap-4">
              <li>
                <SocialIconLink platform="github" />
              </li>
              <li>
                <SocialIconLink platform="linkedin" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center text-sm text-foreground">
          <p>© {currentYear} Arjun Puri. All Rights Reserved.</p>
        </div>
      </Section>
    </footer>
  );
};
