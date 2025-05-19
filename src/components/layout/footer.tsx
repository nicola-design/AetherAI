
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full border-t border-border/40 bg-background/95 py-12">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="font-bold text-xl text-foreground">AetherAI</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Unveiling the Future, Powered by Intelligence.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
            <li><Link href="/chat" className="text-sm text-muted-foreground hover:text-primary">Chat with AI</Link></li>
            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-foreground">Contact Us</h3>
          <p className="text-sm text-muted-foreground">Email: <a href="mailto:info@aetherai.com" className="hover:text-primary">info@aetherai.com</a></p>
          <p className="text-sm text-muted-foreground">123 AI Street, Innovation City, TX 75001</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-foreground">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-screen-2xl border-t border-border/40 pt-8 px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>&copy; {currentYear} AetherAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
