import { useExternalLink } from '../hooks/useExternalLink.ts';
import Button from './Button.jsx';

export default function Nav() {

  const getStarted = useExternalLink('https://docs.google.com/document/d/12HZV0amzBrt2qW2JTRGKPzstGWBLM6qIex9OPc1tH88/edit?usp=sharing');

  return (
    <nav className="border-b border-line">
      <div className="max-w-wrap mx-auto px-8 flex items-center justify-between h-[76px]">
        <div className="flex items-center gap-[9px] font-bold text-[18.5px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5l-8-3z" fill="#6C4DF6" />
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Approva
        </div>
        <div className="hidden md:flex gap-[34px] text-[14.5px] font-medium text-ink items-center">
          <a href="https://github.com/approva-labs/www/blob/main/README.md">Docs</a>
          <a href="https://github.com/approva-labs/www/blob/main/WHITEPAPER.md">Whitepaper</a>
          <a href="https://github.com/approva-labs">GitHub</a>
        </div>
        <Button variant="primary" onClick={getStarted}>Get Started →</Button>
      </div>
    </nav>
  );
}

