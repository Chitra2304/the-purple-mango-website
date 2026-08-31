import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'gold',
  size = 'md',
  as: Tag = 'button',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-montserrat font-semibold tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 select-none'

  const variants = {
    gold: 'bg-gold text-white hover:bg-gold-hover shadow-gold hover:shadow-lg border border-gold hover:border-gold-hover',
    outline:
      'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-deep',
    ghost:
      'bg-transparent text-gold hover:text-gold-hover underline-offset-4 hover:underline p-0',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-xs rounded-full',
    md: 'px-7 py-3.5 text-sm rounded-full',
    lg: 'px-9 py-4 text-sm rounded-full',
  }

  const classes = cn(base, variants[variant], variant !== 'ghost' ? sizes[size] : '', className)

  if (Tag === 'a' || href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
