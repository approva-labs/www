import { useExternalLink } from '../hooks/useExternalLink.ts';
import Button from './Button.jsx';

const TRUST_ITEMS = [
  {
    label: 'Open Source',
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16.73.65 14 2.48a13.38 13.38 0 00-7 0C4.27.65 3.09 1 3.09 1A5.07 5.07 0 003 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 007 18.13V22" />
    ),
  },
  {
    label: 'Developer SDK',
    icon: <path d="M8 4L3 12l5 8M16 4l5 8-5 8" />,
  },
  {
    label: 'Blockchain-secured',
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z" />,
  },
];

const FLOW_NODES = [
  {
    title: 'Your Application',
    sub: (
      <>
        Marketplace, SaaS, AI App,
        <br />
        or any application
      </>
    ),
    icon: <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />,
  },
  {
    title: 'Approva SDK',
    sub: (
      <>
        Web SDK &nbsp;•&nbsp; Server SDK
      </>
    ),
    icon: <path d="M8 4L3 12l5 8M16 4l5 8-5 8" />,
  },
  {
    title: 'Approva App',
    sub: (
      <>
        Review on your
        <br />
        trusted device
      </>
    ),
    icon: <rect x="7" y="2" width="10" height="20" rx="2" />,
  },
];

export default function Hero() {
  const getStarted = useExternalLink('https://github.com/approva-labs/www/blob/main/WHITEPAPER.md');
  const openDocs = useExternalLink('https://github.com/approva-labs/www/blob/main/README.md');

  return (
    <header className="pt-16 pb-[76px]">
      <div className="max-w-wrap mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-purple-mist text-purple-dark px-[13px] py-1.5 rounded-full text-[11.5px] font-bold tracking-wider mb-5">
            OPEN SOURCE SDK
          </div>
          <h1 className="text-[48px] leading-[1.08] font-extrabold tracking-tight mb-5">
            Approval for modern
            <br />
            <span className="text-purple">applications.</span>
          </h1>
          <p className="text-[16.5px] text-muted leading-relaxed max-w-[420px] mb-[26px]">
            Connect a trusted device once and securely approve important actions from any application.
          </p>
          <div className="flex gap-3 mb-6">
            <Button variant="primary" onClick={getStarted}>Get Started →</Button>
            <Button variant="outline" onClick={openDocs}>Documentation</Button>
          </div>
          <div className="flex gap-4 items-center text-[13px] text-muted flex-wrap">
            {TRUST_ITEMS.map((item, i) => (
              <span key={item.label} className="flex items-center gap-4">
                {i > 0 && <span className="text-line">•</span>}
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0">
                    {item.icon}
                  </svg>
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="border border-line rounded-2xl p-5 bg-white shadow-card">
          <div className="flex gap-1.5 mb-3.5 pl-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
          </div>

          {FLOW_NODES.map((node, i) => (
            <div key={node.title}>
              <div className="flex items-center gap-3.5 border border-line rounded-xl p-3.5 relative">
                <div className="w-11 h-11 rounded-[10px] bg-purple-mist flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-purple">
                    {node.icon}
                  </svg>
                </div>
                <div>
                  <div className="text-[14.5px] font-bold mb-0.5">{node.title}</div>
                  <div className="text-[12.5px] text-muted leading-snug">{node.sub}</div>
                </div>
              </div>
              <div className="flex justify-center py-1">
                <div className="flow-dash" />
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3.5 border rounded-xl p-3.5 border-[#CDEFDB] bg-green-mist">
            <div className="w-11 h-11 rounded-[10px] bg-purple flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <div className="text-[14.5px] font-bold mb-0.5">Approved</div>
              <div className="text-[12.5px] text-muted leading-snug">Action completed securely</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
