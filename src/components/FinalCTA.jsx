import { useExternalLink } from '../hooks/useExternalLink.ts';
import Button from './Button.jsx';

export default function FinalCTA() {
  const openDocs = useExternalLink('https://github.com/approva-labs/www/blob/main/README.md');
  const openGithub = useExternalLink('https://github.com/approva-labs');

  return (
    <section className="bg-soft py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <div className="p-9 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[22px] h-[22px]">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Ready to integrate Approva?</h3>
              <p className="text-[13.5px] text-muted">Add secure approvals to your application today.</p>
              <div className="font-mono text-[12.5px] text-muted bg-white border border-line rounded-lg px-3.5 py-2 mt-2.5 inline-flex items-center gap-2">
                <b className="text-purple-dark font-semibold">$</b> npm install @approva/web
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="primary" onClick={openDocs}>Documentation →</Button>
            <Button variant="outline" onClick={openGithub}>GitHub</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

