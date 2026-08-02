const CARDS = [
  {
    title: 'Web SDK',
    tag: null,
    iconBg: 'bg-purple',
    icon: <path d="M8 4L3 12l5 8M16 4l5 8-5 8" />,
    items: ['Connect trusted device', 'Request approval', 'Listen for updates'],
    link: 'View Web SDK Docs →',
  },
  {
    title: 'Server SDK',
    tag: null,
    iconBg: 'bg-[#1AA25C]',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="14" width="16" height="6" rx="1" />
      </>
    ),
    items: ['Create authorization requests', 'Receive approvals', 'Submit transactions to network'],
    link: 'View Server SDK Docs →',
  },
  {
    title: 'Mobile App',
    tag: 'iOS · Android',
    iconBg: 'bg-[#E8A93A]',
    icon: <rect x="7" y="2" width="10" height="20" rx="2" />,
    items: ['Pair via Google or QR code', 'Review requests in plain language', 'Approve with biometrics'],
    link: 'View Mobile App Docs →',
  },
];

export default function BuiltForDevelopers() {
  return (
    <section className="bg-soft py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <h2 className="text-center text-[28px] font-extrabold tracking-tight mb-2">Built for developers</h2>
        <p className="text-center text-[14.5px] text-muted mb-11">Everything you need to integrate approvals in minutes.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="border border-line rounded-2xl p-[26px] bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-11 h-11 rounded-[11px] flex items-center justify-center mb-[18px] ${card.iconBg}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold mb-3.5">
                {card.title}
                {card.tag && (
                  <span className="text-[10px] font-bold tracking-wide text-green bg-green-mist px-2 py-[3px] rounded-full ml-2 align-middle">
                    {card.tag}
                  </span>
                )}
              </h3>
              <ul className="mb-4">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] text-ink py-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-purple shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-[13px] font-semibold text-purple">
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
