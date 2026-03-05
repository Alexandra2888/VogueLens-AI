const IconLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`relative flex h-9 w-9 items-center justify-center ${className}`}
    >
      <div className="bg-brand-red absolute inset-0 rounded-xl" />
      <div className="bg-brand-red-light/30 absolute inset-[3px] rounded-[9px]" />
      <svg viewBox="0 0 24 24" className="relative z-10 h-5 w-5" fill="none">
        <path
          d="M5 6L12 18L19 6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default IconLogo;
