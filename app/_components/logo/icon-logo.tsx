const IconLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Square base */}
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
        {/* V mark */}
        <div className="text-3xl font-bold text-white">V</div>
        {/* Lens overlay */}
        <div className="absolute inset-1 rounded-full border border-white/30" />
      </div>
    </div>
  );
};

export default IconLogo;
