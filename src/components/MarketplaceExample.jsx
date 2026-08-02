function PhoneMock() {
  return (
    <div className="w-[180px] border-8 border-ink rounded-[28px] p-3.5 bg-ink shrink-0">
      <div className="bg-white rounded-2xl p-3.5">
        <div className="text-[10px] font-semibold text-center text-muted mb-2">9:41</div>
        <div className="text-[12.5px] font-bold mb-0.5">
          Marketplace
          <br />
          wants your approval
        </div>
        <div className="flex items-center gap-1.5 text-[10.5px] text-muted py-[5px] border-b border-line">
          🧾 Action <b className="text-ink font-semibold ml-auto">Purchase</b>
        </div>
        <div className="flex items-center gap-1.5 text-[10.5px] text-muted py-[5px] border-b border-line">
          💰 Amount <b className="text-ink font-semibold ml-auto">25 USDC</b>
        </div>
        <div className="flex items-center gap-1.5 text-[10.5px] text-muted py-[5px]">
          👤 To <b className="text-ink font-semibold ml-auto">marketplace.test</b>
        </div>
        <div className="flex gap-1.5 mt-2.5">
          <button className="flex-1 rounded-[7px] py-2 text-[11px] font-bold bg-[#F1F0F8] text-ink">Reject</button>
          <button className="flex-1 rounded-[7px] py-2 text-[11px] font-bold bg-purple text-white">Approve</button>
        </div>
        <div className="text-center text-[9.5px] text-muted mt-2 flex items-center justify-center gap-1">
          🔒 Use Biometrics
        </div>
      </div>
    </div>
  );
}

export default function MarketplaceExample() {
  return (
    <section className="py-[72px]">
      <div className="max-w-wrap mx-auto px-8">
        <div className="example-glow example-texture relative border border-line rounded-[20px] p-10 bg-white overflow-hidden">
          <div className="relative mb-2">
            <div className="inline-flex items-center gap-1.5 bg-purple-mist text-purple-dark px-3 py-[5px] rounded-full text-[11px] font-bold tracking-wider mb-3.5">
              ✦ LIVE EXAMPLE
            </div>
            <h2 className="text-[22px] font-extrabold tracking-tight mb-1.5">Example: buying an item in a marketplace</h2>
            <p className="text-[13.5px] text-muted">
              Request approval from the user. They review the details in the Approva app, approve, and the transaction is
              submitted to the blockchain on your behalf.
            </p>
          </div>

          <div className="relative flex items-stretch justify-center gap-3.5 pt-8 pb-2 px-1 overflow-x-auto">
            {/* Marketplace card */}
            <div className="w-[152px] shrink-0 border border-line rounded-[13px] overflow-hidden bg-white text-left shadow-card flex flex-col">
              <div className="flex gap-1 px-2.5 py-2 border-b border-line">
                <span className="w-[5px] h-[5px] rounded-full bg-line" />
                <span className="w-[5px] h-[5px] rounded-full bg-line" />
                <span className="w-[5px] h-[5px] rounded-full bg-line" />
              </div>
              <div className="text-[10px] font-semibold text-muted px-2.5 pt-1.5">Marketplace</div>
              <div className="h-16 mx-2.5 mt-2 rounded-lg bg-gradient-to-br from-[#DCD4FB] to-[#F6D9C8]" />
              <div className="p-2.5 mt-auto">
                <div className="text-[12.5px] font-bold mb-1">Premium Theme</div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted font-semibold mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple shrink-0" />
                  25 USDC
                </div>
                <div className="bg-purple-dark text-white text-center rounded-[7px] py-1.5 text-[11.5px] font-bold">Buy Now</div>
              </div>
            </div>

            <div className="self-center text-[#C9C6DE] text-[17px] shrink-0">→</div>

            {/* Server SDK card */}
            <div className="w-[152px] shrink-0 border border-line rounded-[13px] bg-white shadow-card flex flex-col items-center justify-center text-center px-3 py-3.5">
              <div className="text-[10px] font-semibold text-muted mb-0">Approva Server SDK</div>
              <div className="text-xs font-bold my-2.5">Authorization Request</div>
              <div className="w-5 h-5 rounded-full border-[2.5px] border-purple-mist border-t-purple animate-spin mb-2.5" />
              <div className="text-[10.5px] text-muted leading-snug">
                Waiting for user
                <br />
                approval...
              </div>
            </div>

            <div className="self-center text-[#C9C6DE] text-[17px] shrink-0">→</div>

            {/* Phone mockup */}
            <div className="approval-ring relative self-center shrink-0">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-purple text-white text-[9.5px] font-bold tracking-wide px-2.5 py-[3px] rounded-full whitespace-nowrap z-10">
                APPROVAL
              </div>
              <PhoneMock />
            </div>

            <div className="self-center text-[#C9C6DE] text-[17px] shrink-0">→</div>

            {/* Confirmed */}
            <div className="w-[132px] shrink-0 border border-line rounded-[13px] bg-white shadow-card flex flex-col items-center justify-center text-center gap-2.5 px-3.5 py-5">
              <div className="w-11 h-11 rounded-full bg-[#E9FBF0] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className="text-xs font-semibold leading-snug">
                Confirmed
                <br />
                Transaction Successful
              </div>
            </div>
          </div>

          {/* Step strip */}
          <div className="relative flex items-center justify-center gap-2.5 mt-6 pt-[22px] border-t border-line flex-wrap">
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <span className="w-5 h-5 rounded-full bg-soft flex items-center justify-center">📤</span> Transaction Submitted
            </div>
            <span className="text-[#C9C6DE]">—→</span>
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <span className="w-5 h-5 rounded-full bg-green-mist flex items-center justify-center">✅</span> Confirmation Received
            </div>
            <span className="text-[#C9C6DE]">—→</span>
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <span className="w-5 h-5 rounded-full bg-soft flex items-center justify-center">🎁</span> Premium Theme Delivered
            </div>
          </div>

          {/* Footer stats */}
          <div className="relative flex justify-center gap-[22px] flex-wrap mt-1 pt-[22px] border-t border-line">
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-purple">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              ~4.8s <b className="text-ink">end to end</b>
            </div>
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-purple">
                <path d="M12 2l8 3v6c0 5.5-3.4 9.7-8 11-4.6-1.3-8-5.5-8-11V5l8-3z" />
              </svg>
              1 <b className="text-ink">human checkpoint</b>
            </div>
            <div className="flex items-center gap-[7px] text-[12.5px] font-semibold text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-purple">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              Settled on <b className="text-ink">chain</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
