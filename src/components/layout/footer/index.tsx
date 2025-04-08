import { NavLink } from '@/components/layout/navigation/nav-link';
import { NAVIGATION_LINKS } from '@/components/layout/navigation/nav-links';
import { Section } from '@/components/layout/section';
import { MyLink } from '@/components/ui/my-link';
import { Logo } from '@/components/ui/logo';
import { SocialIconLink } from '@/components/ui/social-icon-link';
import { FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="print:hidden">
      <Section hasTopPadding hasBottomPadding>
        <div className="grid gap-8 border-t border-primary pt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo isNavOpen={false} />

            <p className="text-accent-electric-blue">Building Reliable, Engaging & User-Centric Web Experiences</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Quick Links</h3>

            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} fontSize="small" className="font-medium text-foreground hover:text-accent-lime">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Let's Connect</h3>
            <p className="text-foreground">Interested in working together? Let's chat!</p>

            <MyLink type="external" href="mailto:corned-tippets-5g@icloud.com" variant="secondary">
              Get in Touch <FaEnvelope className="tilt-shaking ml-2" />
            </MyLink>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">More Ways to Connect</h3>

            <div className="flex gap-4">
              <SocialIconLink platform="github" />
              <SocialIconLink platform="linkedin" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary pt-8 text-center text-sm text-foreground">
          <p>© {currentYear} Arjun Puri. All Rights Reserved.</p>
        </div>
      </Section>
    </footer>
  );
};
