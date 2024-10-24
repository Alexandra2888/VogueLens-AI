const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Mark */}
      <div className="relative">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary">
          <div className="h-4 w-4 rounded-full bg-highlight opacity-80" />
        </div>
      </div>

      {/* Wordmark with better contrast */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-foreground">Vogue</span>
        <span className="text-secondary-hover">Lens</span>
        <span className="ml-1 text-sm text-highlight">AI</span>
      </div>
    </div>
  );
};
export default Logo;
