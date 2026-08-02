import { useState } from 'react';

const SAMPLES = {
  web: {
    label: 'Web SDK',
    lines: [
      [{ cls: 'kw', t: 'import' }, { t: ' { Approva } ' }, { cls: 'kw', t: 'from' }, { t: ' ' }, { cls: 'str', t: '"@approva/web"' }, { t: ';' }],
      [],
      [{ cls: 'kw', t: 'const' }, { t: ' approva = ' }, { cls: 'kw', t: 'new' }, { t: ' Approva({ clientId: ' }, { cls: 'str', t: '"YOUR_CLIENT_ID"' }, { t: ' });' }],
      [],
      [{ cls: 'kw', t: 'await' }, { t: ' approva.' }, { cls: 'fn', t: 'connect' }, { t: '(); ' }, { cls: 'com', t: '// Connect trusted device' }],
      [],
      [{ cls: 'kw', t: 'const' }, { t: ' result = ' }, { cls: 'kw', t: 'await' }, { t: ' approva.' }, { cls: 'fn', t: 'authorize' }, { t: '({' }],
      [{ t: '  action: ' }, { cls: 'str', t: '"purchase"' }, { t: ',' }],
      [{ t: '  amount: ' }, { cls: 'str', t: '"25"' }, { t: ',' }],
      [{ t: '  reference: ' }, { cls: 'str', t: '"premium-theme"' }],
      [{ t: '});' }],
      [],
      [{ cls: 'kw', t: 'if' }, { t: ' (result.status === ' }, { cls: 'str', t: '"approved"' }, { t: ') {' }],
      [{ t: '  ' }, { cls: 'com', t: '// Continue with your application logic' }],
      [{ t: '}' }],
    ],
  },
  server: {
    label: 'Server SDK',
    lines: [
      [{ cls: 'kw', t: 'import' }, { t: ' { ApprovaServer } ' }, { cls: 'kw', t: 'from' }, { t: ' ' }, { cls: 'str', t: '"@approva/server"' }, { t: ';' }],
      [],
      [{ cls: 'kw', t: 'const' }, { t: ' approva = ' }, { cls: 'kw', t: 'new' }, { t: ' ApprovaServer({' }],
      [{ t: '  apiKey: process.env.APPROVA_API_KEY' }],
      [{ t: '});' }],
      [],
      [{ cls: 'kw', t: 'const' }, { t: ' auth = ' }, { cls: 'kw', t: 'await' }, { t: ' approva.' }, { cls: 'fn', t: 'authorize' }, { t: '({' }],
      [{ t: '  action: ' }, { cls: 'str', t: '"purchase"' }, { t: ',' }],
      [{ t: '  amount: ' }, { cls: 'str', t: '"25"' }, { t: ',' }],
      [{ t: '  reference: ' }, { cls: 'str', t: '"premium-theme"' }],
      [{ t: '});' }],
      [],
      [{ cls: 'com', t: '// Poll or subscribe to approva.on("approved", ...)' }],
    ],
  },
  events: {
    label: 'Events',
    lines: [
      [{ t: 'approva.' }, { cls: 'fn', t: 'on' }, { t: '(' }, { cls: 'str', t: '"approved"' }, { t: ', (result) => {' }],
      [{ t: '  console.' }, { cls: 'fn', t: 'log' }, { t: '(' }, { cls: 'str', t: '"Approved"' }, { t: ', result);' }],
      [{ t: '  deliverItem();' }],
      [{ t: '});' }],
      [],
      [{ t: 'approva.' }, { cls: 'fn', t: 'on' }, { t: '(' }, { cls: 'str', t: '"rejected"' }, { t: ', () => {' }],
      [{ t: '  console.' }, { cls: 'fn', t: 'log' }, { t: '(' }, { cls: 'str', t: '"Request rejected"' }, { t: ');' }],
      [{ t: '});' }],
    ],
  },
};

const TOKEN_COLOR = {
  kw: 'text-[#8FA6FF]',
  str: 'text-[#7FD99E]',
  com: 'text-white/35',
  fn: 'text-[#E8A93A]',
};

function lineToPlainText(line) {
  return line.map((seg) => seg.t).join('');
}

export default function CodeIntegration() {
  const [activeTab, setActiveTab] = useState('web');
  const [copied, setCopied] = useState(false);

  const sample = SAMPLES[activeTab];

  const handleCopy = async () => {
    const text = sample.lines.map(lineToPlainText).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // Clipboard API unavailable — fail silently
    }
  };

  return (
    <section className="py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <h2 className="text-center text-[28px] font-extrabold tracking-tight mb-[26px]">Simple integration</h2>

        <div className="flex justify-center gap-9 mb-[18px]">
          {Object.entries(SAMPLES).map(([key, val]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-sm font-semibold cursor-pointer pb-2 border-b-2 transition-colors ${
                activeTab === key ? 'text-purple border-purple' : 'text-muted border-transparent'
              }`}
            >
              {val.label}
            </div>
          ))}
        </div>

        <div className="bg-[#14131E] rounded-2xl overflow-hidden relative">
          <div
            onClick={handleCopy}
            className="absolute top-3.5 right-4 flex items-center gap-1.5 text-xs text-white/55 bg-white/[0.06] px-[11px] py-1.5 rounded-md cursor-pointer border border-white/[0.08] hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            {copied ? 'Copied!' : 'Copy'}
          </div>

          <div className="flex py-[22px]">
            <div className="font-mono text-[12.5px] leading-[1.8] text-white/25 text-right pl-5 pr-4 select-none">
              {sample.lines.map((_, i) => (
                <span key={i}>
                  {i + 1}
                  <br />
                </span>
              ))}
            </div>
            <pre className="font-mono text-[12.5px] leading-[1.8] text-[#D8D4F5]">
              {sample.lines.map((line, i) => (
                <span key={i}>
                  {line.length === 0
                    ? '\n'
                    : line.map((seg, j) =>
                        seg.cls ? (
                          <span key={j} className={TOKEN_COLOR[seg.cls]}>{seg.t}</span>
                        ) : (
                          <span key={j}>{seg.t}</span>
                        )
                      )}
                  {i < sample.lines.length - 1 ? '\n' : ''}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
