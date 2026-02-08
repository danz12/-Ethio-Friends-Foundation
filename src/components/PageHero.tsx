import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { cn } from '@/lib/utils';

type PageHeroBadge = {
  label: string;
  icon?: React.ElementType<{ className?: string }>;
};

type PageHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  badge?: PageHeroBadge;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

const PageHero = ({
  imageSrc,
  imageAlt = '',
  badge,
  title,
  description,
  align = 'left',
  children,
  className,
  contentClassName,
}: PageHeroProps) => {
  const isCenter = align === 'center';
  const BadgeIcon = badge?.icon;

  return (
    <section className={cn('relative -mt-20 overflow-hidden', className)}>
      <div aria-hidden className="absolute inset-0">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-primary/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-teal-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_20%,rgba(255,255,255,0.14),transparent_70%)]" />
      </div>

      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
        <div className={cn('max-w-3xl', isCenter && 'mx-auto text-center', contentClassName)}>
          <div className="rounded-3xl bg-white/10 supports-[backdrop-filter]:bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.28)] p-6 sm:p-9">
            {badge && (
              <div
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-6',
                  isCenter && 'mx-auto'
                )}
              >
                {BadgeIcon ? (
                  <BadgeIcon className="h-4 w-4 text-secondary" aria-hidden />
                ) : (
                  <span aria-hidden className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                )}
                <span className="text-white/90 text-sm font-medium">{badge.label}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5 sm:mb-6 text-balance">{title}</h1>
            {description && (
              <p className={cn('text-white/90 text-lg md:text-xl leading-relaxed text-balance', !isCenter && 'max-w-2xl')}>
                {description}
              </p>
            )}
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
};

export default PageHero;
