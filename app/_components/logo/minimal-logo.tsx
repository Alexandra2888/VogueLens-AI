const MinimalLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 rotate-45 transform rounded-sm border-2 border-secondary" />
        <div className="absolute inset-1 rounded-sm bg-highlight opacity-60" />
      </div>

      {/* Better contrast for text */}
      <div className="font-bold tracking-tight">
        <span className="text-foreground">VL</span>
        <span className="ml-0.5 text-xs text-secondary-hover">AI</span>
      </div>
    </div>
  );
};
export default MinimalLogo;
