import clsx from 'clsx';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialPlatform = 'github' | 'linkedin' | 'email';

type SocialIconProps = {
  platform: SocialPlatform;
  size?: number;
  className?: string;
  iconClassNAme?: string;
};

const PLATFORM_CONFIG = {
  github: {
    icon: FaGithub,
    href: 'https://github.com/AP2610',
    title: 'GitHub Profile',
  },
  linkedin: {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/arjunpuri26/',
    title: 'LinkedIn Profile',
  },
  email: {
    icon: FaEnvelope,
    href: 'mailto:corned-tippets-5g@icloud.com',
    title:
      'Send Email - If the email looks weird, thats because i would rather not share my personal email online. This email address forwards emails to my personal email.',
  },
} as const;

export const SocialIcon = ({ platform, size = 24, className, iconClassNAme }: SocialIconProps) => {
  const { icon: Icon, href, title } = PLATFORM_CONFIG[platform];

  const classes = clsx(`text-blue`, 'hover:text-blue-600 hover:scale-110 transition-all', className);

  return (
    <Link
      href={href}
      className={classes}
      target={platform !== 'email' ? '_blank' : undefined}
      rel={platform !== 'email' ? 'noopener noreferrer' : undefined}
      title={title}
    >
      <Icon size={size} className={iconClassNAme} />
    </Link>
  );
};
