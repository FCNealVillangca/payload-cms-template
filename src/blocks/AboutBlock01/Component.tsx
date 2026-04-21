/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Target, Zap, TrendingUp } from 'lucide-react'
import type { AboutBlock01Block as AboutBlock01BlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

export const AboutBlock01Block: React.FC<AboutBlock01BlockProps> = ({ id, background }) => {
  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  return (
    <section
      id={sectionId}
      className={cn('relative w-full', presetClass || 'bg-[#fcfdff] text-slate-900')}
    >
      {isImage && typeof background?.image === 'object' && background.image && (
        <div className="absolute inset-0">
          <Media resource={background.image} fill imgClassName="object-cover w-full h-full" />
        </div>
      )}

      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-32 items-center">
            {/* Left Content Column */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#0f172a]">
                  Why most students <br />
                  <span className="text-[#1e40af]">struggle</span> with French
                </h2>

                <div className="space-y-4 max-w-lg">
                  <p className="text-lg md:text-xl text-slate-500 font-medium">
                    Most students understand French. But when it's time to speak, they hesitate.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    The problem isn't knowledge. It's the lack of structured speaking practice.
                    Without it, confidence drops and progress stalls.
                  </p>
                  <p className="text-slate-500 leading-relaxed font-bold border-l-4 border-red-500 pl-6 py-2 bg-red-50/50 rounded-r-lg">
                    GoGet was built to remove that barrier. We transform the learning experience
                    from a passive academic exercise into an active, confident practice.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Grid (The 4 Grids) */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Speaking */}
              <div className="group relative bg-[#1e40af] p-8 rounded-[2.5rem] text-white overflow-hidden shadow-2xl shadow-blue-200">
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl mb-2 tracking-tight uppercase">
                      Speaking
                    </h3>
                    <p className="text-xs text-blue-100 font-medium leading-relaxed opacity-80 uppercase tracking-wide">
                      Structured practice sessions daily.
                    </p>
                  </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white opacity-[0.05] rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>

              {/* Card 2: Confidence */}
              <div className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#ef4444] rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <h3 className="font-display font-black text-xl mb-2 tracking-tight uppercase">
                    Confidence
                  </h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">
                    Removing the fear of mistakes.
                  </p>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-2 h-full bg-[#ef4444] opacity-5" />
              </div>

              {/* Card 3: Dialogue */}
              <div className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                <div className="relative z-10 flex flex-col h-full justify-center text-center items-center gap-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1e40af] transition-colors">
                    <Target size={32} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm tracking-[0.2em] uppercase text-slate-900">
                      Structured Dialogue
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 4: Study/Results */}
              <div className="group relative bg-[#0f172a] p-8 rounded-[2.5rem] text-white shadow-2xl overflow-hidden">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-1 h-8 bg-blue-500 rounded-full" />
                      ))}
                      <div className="w-1 h-8 bg-slate-700 rounded-full" />
                    </div>
                    <h3 className="font-display font-black text-5xl tracking-tighter">
                      98<span className="text-blue-500">%</span>
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs tracking-widest uppercase mb-1">
                      Results
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                      Grade improvement focused.
                    </p>
                  </div>
                </div>
                {/* Techy background detail */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none p-4">
                  <TrendingUp className="w-full h-full" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
