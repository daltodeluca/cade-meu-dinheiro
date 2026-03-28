interface CardProps {
  children: React.ReactNode;
  title?: string;
  icon?: string;
  className?: string;
}

export function Card({ children, title, icon, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-[--radius-inluce] shadow-sm border border-orange-100 p-6 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-6">
          {icon && <span className="text-xl">{icon}</span>}
          <h3 className="font-bold text-lg text-inluce-vinho uppercase tracking-tight">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
}