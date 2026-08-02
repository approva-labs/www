export default function Button({ variant = 'primary', href = '#', children, className = '', onClick }) {
  const base =
    'inline-flex items-center gap-[7px] px-5 py-[11px] rounded-[9px] font-semibold text-sm border transition-all duration-200 cursor-pointer';
  const variants = {
    primary:
      'bg-purple text-white border-transparent hover:bg-purple-dark hover:-translate-y-px hover:shadow-btn-primary',
    outline: 'bg-white text-ink border-line hover:border-purple hover:text-purple-dark',
  };

  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
