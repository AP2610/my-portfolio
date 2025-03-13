import { Button } from '@/components/buttons';
import { Logo } from '@/components/logo';
import { NavLink } from '@/components/navigation/nav-link';
import { NAVIGATION_LINKS } from '@/components/navigation/nav-links';
import { Section } from '@/components/section';
import { SocialIcon } from '@/components/social-icon';
import { FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-background-violet print:hidden">
      <Section hasTopPadding hasBottomPadding>
        <div className="h-[2px] bg-white/60 blur-[7px] mb-8 rounded-full"></div>
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo isNavOpen={false} />

            <p className="text-blue">Building Reliable, Engaging & User-Centric Web Experiences</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} fontSize="small" className="font-medium hover:text-lime">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Let&apos;s Connect</h3>
            <p>Interested in working together? Let&apos;s chat!</p>

            <Button isLinkButton href="mailto:corned-tippets-5g@icloud.com" variant="secondary">
              Get in Touch <FaEnvelope className="ml-2 tilt-shaking" />
            </Button>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">More Ways to Connect</h3>
            <div className="flex gap-4">
              <SocialIcon platform="github" />
              <SocialIcon platform="linkedin" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white-700 pt-8 text-center text-sm">
          <p>© {currentYear} Arjun Puri. All Rights Reserved.</p>
        </div>
      </Section>
    </footer>
  );
};
