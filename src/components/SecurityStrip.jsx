const ITEMS = [
  {
    title: 'Biometric-backed',
    desc: 'Every approval requires Face ID, Touch ID, or device biometrics — not just a tap.',
    icon: <path d="M12 2l8 3v6c0 5.5-3.4 9.7-8 11-4.6-1.3-8-5.5-8-11V5l8-3z" />,
  },
  {
    title: 'Scoped sessions',
    desc: 'Trusted-device sessions are scoped and revocable from any connected app, instantly.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </>
    ),
  },
  {
    title: 'On-chain audit trail',
    desc: 'Every approval is timestamped and settled on-chain — permanent and verifiable.',
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
];

export default function SecurityStrip() {
  return (
    <section className="py-14">
      <div className="max-w-wrap mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {ITEMS.map((item) => (
            <div key={item.title} className="bg-white p-6 flex gap-3.5 items-start">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-purple-mist flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-purple">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h4 className="text-[13.5px] font-bold mb-[3px]">{item.title}</h4>
                <p className="text-[12.5px] text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
