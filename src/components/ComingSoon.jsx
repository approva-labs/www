const ITEMS = [
  {
    title: 'AI Agent Approval',
    desc: 'Approve actions performed by AI agents before they execute on your behalf.',
    icon: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="2" />
        <path d="M12 7V3M9 3h6" />
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
      </>
    ),
  },
  {
    title: 'Team Approval',
    desc: 'Require multiple people to approve sensitive actions and transactions.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    title: 'Approval Policies',
    desc: 'Define rules based on amount, application, or action to control how approvals work.',
    icon: <path d="M12 2l8 3v6c0 5.5-3.4 9.7-8 11-4.6-1.3-8-5.5-8-11V5l8-3z" />,
  },
];

export default function ComingSoon() {
  return (
    <section className="py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <h2 className="text-center text-[28px] font-extrabold tracking-tight mb-2">Coming Soon</h2>
        <p className="text-center text-[14.5px] text-muted mb-11">More ways to approve and collaborate.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="border border-line rounded-2xl p-6 bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-[11px] bg-purple-mist flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-purple">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-[15.5px] font-bold mb-2">{item.title}</h3>
              <p className="text-[13px] text-muted leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center justify-between gap-2.5">
                <span className="text-[10.5px] font-bold tracking-wider text-purple bg-purple-mist px-2.5 py-[5px] rounded-full">
                  COMING SOON
                </span>
                <a href="#" className="text-xs font-semibold text-muted border-b border-dashed border-line hover:text-purple hover:border-purple">
                  Get notified →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
