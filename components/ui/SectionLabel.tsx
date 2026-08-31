import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  withLine?: boolean
  light?: boolean
}

export default function SectionLabel({
  children,
  className,
  withLine = false,
  light = false,
}: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {withLine && (
        <span
          className={cn(
            'block h-px w-8 flex-shrink-0',
            light ? 'bg-white/50' : 'bg-gold'
          )}
          aria-hidden="true"
        />
      )}
      <span
        className={cn(
          'font-montserrat text-xs font-semibold tracking-[0.22em] uppercase',
          light ? 'text-white/70' : 'text-gold-hover'
        )}
      >
        {children}
      </span>
    </div>
  )
}
