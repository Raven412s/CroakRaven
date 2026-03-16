import { WavyBackground } from '@/components/ui/wavy-background'
import React from 'react'


/**
 * Decorative wavy background displayed on large screens.
 *
 * Renders an absolutely positioned, non-interactive background element that is hidden on smaller viewports and becomes visible at the large (lg) breakpoint.
 *
 * @returns The JSX element containing the configured wavy background pattern
 */
export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block ">
      <WavyBackground
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"]}
        backgroundFill='hsl(0 0% 100%)'
        blur={3}
        speed='slow'
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={250}
        containerClassName='h-full'
        className='hidden'
      />
    </div>
  )
}
