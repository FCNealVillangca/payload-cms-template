import React from 'react'
import { Quote } from 'lucide-react'
import type { ResultsBlock as ResultsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

export const ResultsBlock: React.FC<ResultsBlockProps> = ({ id, background }) => {
  const testimonials = [
    {
      quote:
        'The structured approach transformed my confidence in speaking exams. I went from freezing up to delivering clear, confident answers.',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      name: 'Sarah Chen',
      role: 'A-Level Student',
    },
    {
      quote:
        'French used to be my weakest subject, but with this method, I achieved a Grade 8. The techniques work for real exam conditions.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      name: 'Marcus Thompson',
      role: 'GCSE Student',
    },
    {
      quote:
        'The speaking practice sessions were game-changing. I finally understood how to structure my answers for maximum marks.',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
      name: 'Emma Rodriguez',
      role: 'AQA Student',
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

      <div className="container relative z-10 py-20 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group p-10 rounded-[40px] bg-[#fafafa] border border-slate-50 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-700"
            >
              <div>
                <Quote className="w-12 h-12 text-slate-100 mb-8 -ml-1" />
                <p className="text-xl md:text-2xl font-serif italic text-slate-700 leading-relaxed mb-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative">
                  <img
                    src={t.avatar}
                    className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-white"
                    alt={t.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 leading-tight">{t.name}</p>
                  <p className="text-[11px] uppercase font-black tracking-widest text-slate-400 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
