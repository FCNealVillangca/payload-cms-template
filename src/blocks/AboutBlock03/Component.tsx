/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react'
import type { AboutBlock03Block as AboutBlock03BlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

export const AboutBlock03Block: React.FC<AboutBlock03BlockProps> = ({ id, background }) => {
  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  return (
    <section
      id={sectionId}
      className={cn('relative w-full', presetClass || 'bg-white text-[#1e3a8a]')}
    >
      {isImage && typeof background?.image === 'object' && background.image && (
        <div className="absolute inset-0">
          <Media resource={background.image} fill imgClassName="object-cover w-full h-full" />
        </div>
      )}

      <div className="relative z-10 py-24 md:py-40 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Tutor Image */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-50 border border-slate-100">
              <img
                src="https://picsum.photos/seed/tutor/800/1000"
                alt="French Tutor Kwaku"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent" />
            </div>
          </div>

          {/* Right Column: Tutor Content */}
          <div className="flex-1 space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-[#1e3a8a]/60 text-xs font-bold tracking-widest uppercase">
                Meet Your Tutor
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Bonjour, I'm Kwaku
              </h2>
            </div>

            <div className="space-y-6 text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              <p>
                I'm a certified French tutor trained at{' '}
                <span className="italic">CAVILAM - Alliance Française</span>, based in Chelmsford,
                originally from Toulouse in the south of France.
              </p>
              <p>
                Over time, I noticed something important. Most students do not struggle because they
                lack knowledge. They struggle because they lack confidence when it is time to speak.
              </p>
              <p className="text-[#1e3a8a] font-bold">That is what GoGet is built to fix.</p>
            </div>

            {/* Quick Stats/Features */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {[
                'Each lesson follows a clear structure.',
                'Focused speaking practice.',
                'Step by step progress.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-[#1e3a8a]/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* Footer Part */}
            <div className="space-y-4 pt-10">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">
                The Goal is Simple
              </div>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                Help every student <span className="text-blue-500 italic">feel confident</span>,
                prepared, and ready to succeed in their exams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
