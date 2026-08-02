export default function Footer() {
  return (
    <footer className="py-9 border-t border-line">
      <div className="max-w-wrap mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-[9px] font-bold text-base">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5l-8-3z" fill="#6C4DF6" />
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Approva
        </div>
        <div className="flex gap-6 text-[13.5px] text-muted">
          <a href="https://github.com/approva-labs/www/blob/main/README.md">Docs</a>
          <a href="https://github.com/approva-labs/www/blob/main/WHITEPAPER.md">Whitepaper</a>
          <a href="https://github.com/approva-labs">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
