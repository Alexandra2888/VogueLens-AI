const MinimalLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="relative h-6 w-6">
        <div className="border-secondary absolute inset-0 rotate-45 transform rounded-sm border-2" />
        <div className="bg-highlight absolute inset-1 rounded-sm opacity-60" />
      </div>

      {/* Better contrast for text */}
      <div className="font-bold tracking-tight">
        <span className="text-foreground">VL</span>
        <span className="text-secondary-hover ml-0.5 text-xs">AI</span>
      </div>
    </div>
  );
};
export default MinimalLogo;
