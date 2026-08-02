function MiniBox({ variant, icon, children }) {
  const variants = {
    default: 'border-line',
    result: 'bg-green-mist border-[#CDEFDB] text-ink',
    continue: 'bg-soft border-line text-muted justify-center',
  };
  return (
    <div
      className={`border rounded-[10px] px-[13px] py-[11px] flex items-center gap-2.5 text-[13px] font-semibold ${
        variants[variant] || variants.default
      }`}
    >
      {icon}
      {children}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-soft py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <h2 className="text-center text-[28px] font-extrabold tracking-tight mb-2">How it works</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] mt-11">
          {/* Step 1 — Connect */}
          <div className="border border-line rounded-2xl p-[26px] bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
            <div className="flex items-start gap-3 mb-[22px]">
              <div className="w-[26px] h-[26px] rounded-full bg-purple text-white flex items-center justify-center font-bold text-[13px] shrink-0">1</div>
              <div>
                <h3 className="text-base font-bold mb-1">Connect</h3>
                <p className="text-[13px] text-muted leading-relaxed">On mobile, open the app directly. On desktop, scan to pair.</p>
              </div>
            </div>

            <MiniBox
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-purple">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
              }
            >
              Open Approva App
            </MiniBox>
            <div className="h-2.5" />
            <MiniBox
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-muted">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              }
            >
              Scan QR Code
            </MiniBox>
            <div className="text-center text-muted text-[11px] py-1.5">Detects your device automatically</div>
            <MiniBox
              variant="result"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-green">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              }
            >
              Trusted Device Connected
            </MiniBox>
          </div>

          {/* Step 2 — Request Approval */}
          <div className="border border-line rounded-2xl p-[26px] bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
            <div className="flex items-start gap-3 mb-[22px]">
              <div className="w-[26px] h-[26px] rounded-full bg-purple text-white flex items-center justify-center font-bold text-[13px] shrink-0">2</div>
              <div>
                <h3 className="text-base font-bold mb-1">Request Approval</h3>
                <p className="text-[13px] text-muted leading-relaxed">Your application sends a request that is delivered to your device.</p>
              </div>
            </div>

            <MiniBox
              icon={
                <div className="w-6 h-6 rounded-md bg-purple-mist flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px]">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  </svg>
                </div>
              }
            >
              Your Application
            </MiniBox>
            <div className="text-center text-muted text-[13px] py-1.5">↓</div>
            <MiniBox
              icon={
                <div className="w-6 h-6 rounded-md bg-purple-mist flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px]">
                    <path d="M8 4L3 12l5 8M16 4l5 8-5 8" />
                  </svg>
                </div>
              }
            >
              Create Request
            </MiniBox>
            <div className="text-center text-muted text-[13px] py-1.5">↓</div>
            <MiniBox
              icon={
                <div className="w-6 h-6 rounded-md bg-purple-mist flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px]">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                  </svg>
                </div>
              }
            >
              Approva App
            </MiniBox>
          </div>

          {/* Step 3 — Complete */}
          <div className="border border-line rounded-2xl p-[26px] bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
            <div className="flex items-start gap-3 mb-[22px]">
              <div className="w-[26px] h-[26px] rounded-full bg-purple text-white flex items-center justify-center font-bold text-[13px] shrink-0">3</div>
              <div>
                <h3 className="text-base font-bold mb-1">Complete</h3>
                <p className="text-[13px] text-muted leading-relaxed">Review, approve, and your application receives confirmation.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[38px] h-[38px] rounded-[9px] bg-purple-mist flex items-center justify-center mb-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-purple">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                </svg>
              </div>
              <div className="text-purple font-bold text-[13.5px] my-2">Approve</div>
            </div>
            <div className="text-center text-muted text-[13px] py-1.5">↓</div>
            <MiniBox
              variant="result"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-green">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              }
            >
              Application receives confirmation
            </MiniBox>
            <div className="text-center text-muted text-[13px] py-1.5">↓</div>
            <MiniBox variant="continue">Continue</MiniBox>
          </div>
        </div>
      </div>
    </section>
  );
}
