import React from 'react'
import { Target, Award, Mic2 } from 'lucide-react'
import type { ExamSupportBlock as ExamSupportBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

export const ExamSupportBlock: React.FC<ExamSupportBlockProps> = ({ id, background }) => {
  const programmes = [
    {
      id: '01',
      title: 'GCSE Performance',
      description: 'Moving from passing to top grades through targeted preparation.',
      icon: Target,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      id: '02',
      title: 'A Level Mastery',
      description: 'Advanced precision, depth, and confident expression for high-level study.',
      icon: Award,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      id: '03',
      title: 'The Speaking System',
      description: 'A specialized framework designed for confidence in oral exam scenarios.',
      icon: Mic2,
      color: 'text-slate-900',
      bg: 'bg-slate-100',
    },
  ]

  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  return (
    <section
      id={sectionId}
      className={cn('relative w-full', presetClass || 'bg-white text-slate-900')}
    >
      {isImage && typeof background?.image === 'object' && background.image && (
        <div className="absolute inset-0">
          <Media resource={background.image} fill imgClassName="object-cover w-full h-full" />
        </div>
      )}

      <div className="container relative z-10 py-20 px-6 font-sans">
        {/* Simple Label */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-8 bg-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Pathways
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-20 leading-tight max-w-2xl">
          Choose your path to <span className="italic">exam confidence.</span>
        </h2>

        {/* 3-Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {programmes.map((prog, idx) => (
            <div key={prog.id} className="group flex flex-row items-start gap-5">
              <div
                className={`w-12 h-12 shrink-0 rounded-2xl ${prog.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
              >
                <prog.icon className={`w-6 h-6 ${prog.color}`} />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light mt-1">
                  {prog.description}
                </p>
                <div className="mt-2 flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border-b border-transparent group-hover:border-blue-600 transition-all pb-0.5">
                    Explore Track
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
