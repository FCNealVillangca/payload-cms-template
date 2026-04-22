/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Layers, Megaphone, TrendingUp } from 'lucide-react'
import type { AboutBlock02Block as AboutBlock02BlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

export const AboutBlock02Block: React.FC<AboutBlock02BlockProps> = ({ id, background }) => {
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

      <div className="relative z-10 py-24 px-6">
        <main className="max-w-6xl mx-auto w-full space-y-24">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full">
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                The Methodology
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a]">
              The GoGet Approach
            </h2>
          </div>

          {/* 3-Card Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center text-center space-y-8 transition-transform hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1e40af] transition-all">
                <Layers size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-xl leading-tight px-4">
                  Clear exam-focused structure
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Every lesson follows a step-by-step plan aligned with GCSE & A-Level requirements,
                  so students always know what to work on.
                </p>
              </div>
            </div>

            {/* Card 2 - Standout (Blue) */}
            <div className="group bg-[#1e40af] p-10 rounded-[3rem] shadow-2xl shadow-blue-200 flex flex-col items-center text-center text-white space-y-8 transition-transform hover:translate-y-[-10px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center relative z-10">
                <Megaphone size={28} />
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="font-display font-extrabold text-xl leading-tight px-4">
                  Build real speaking confidence
                </h3>
                <p className="text-sm text-blue-100/80 leading-relaxed font-medium">
                  We focus on helping students speak clearly and confidently — especially for oral
                  exams where most struggle.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center text-center space-y-8 transition-transform hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#1e40af] transition-all">
                <TrendingUp size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-xl leading-tight px-4">
                  Track progress and improve results
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Students see clear improvement over time, with structured support to help them
                  feel prepared and perform better in exams.
                </p>
              </div>
            </div>
          </div>

          {/* Quote & CTA */}
          <div className="text-center space-y-12 pt-12">
            <p className="text-2xl md:text-3xl font-display font-bold italic tracking-tight text-slate-400 max-w-4xl mx-auto leading-tight">
              "Most students don't need more content — they need the{' '}
              <span className="text-[#1e40af] not-italic">right structure</span> and confidence to
              perform in exams."
            </p>

            <div className="flex flex-col items-center gap-4">
              <button className="bg-[#1e40af] hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-blue-100 flex items-center gap-3 transition-all hover:translate-y-[-2px] active:scale-95 group">
                Book a Free Assessment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
