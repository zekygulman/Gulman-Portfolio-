import type { ReactNode } from "react";

export function WindowTitleBar({
  title,
  children,
  className = "",
  innerClassName = "",
}: {
  title: string;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={`border-[3px] border-ink bg-cream ${className}`}>
      <div className="flex items-center gap-2 border-b-[3px] border-ink bg-[color:var(--titlebar)] px-2 py-1.5">
        <div className="flex h-4 w-5 shrink-0 items-center justify-center border-[2px] border-ink bg-cream">
          <div className="h-1 w-2 border-t-[2px] border-ink" />
        </div>
        <div className="titlebar-stripes h-3 flex-1" />
        <div className="px-2 font-mono-retro text-base leading-none text-ink whitespace-nowrap">
          {title}
        </div>
        <div className="titlebar-stripes h-3 flex-1" />
        <div className="h-4 w-5 shrink-0 border-[2px] border-ink bg-cream" />
      </div>
      {children ? <div className={innerClassName}>{children}</div> : null}
    </div>
  );
}
