import { Github, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import profilePhoto from '@/assets/profile-photo.jpg';

/**
 * Minimal footer component with profile photo, social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Profile photo + copyright */}
          <div className="flex items-center gap-4">
            <img
              src={profilePhoto}
              alt={photographerInfo.name}
              className="w-10 h-10 rounded-full object-cover object-top border border-border"
            />
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              © {currentYear} {photographerInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {photographerInfo.socialLinks.github && (
              <a
                href={photographerInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            )}
            {photographerInfo.socialLinks.linkedin && (
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
