import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FaqBlock01 as FaqBlock01Props } from '@/payload-types'
import { Media } from '@/components/Media'
import { getBackgroundClass, getCustomBackgroundCSS } from '@/utilities/getBackground'
import { cn } from '@/utilities/ui'

const defaultFaqs = [
  {
    question: 'How does it work?',
    answer:
      'It starts with a free 30-minute assessment to understand your current level and exam goals. From there, we create a structured plan and schedule weekly lessons at a time that works for you.',
  },
  {
    question: 'Is it online or in person?',
    answer:
      'Lessons are primarily online via high-quality video conferencing, which allows for maximum flexibility. However, for students based in Chelmsford, in-person sessions can also be arranged.',
  },
  {
    question: 'What level do you accept?',
    answer:
      'We specialise in GCSE and A-Level French support for all major exam boards. We also work with adult learners and beginners who want a structured, results-oriented approach to learning French.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      "Very quickly. Once we've had our initial assessment and agreed on a schedule, we can usually start your first full lesson within the same week.",
  },
]

export const FaqBlock01: React.FC<FaqBlock01Props> = ({
  id,
  background,
  title,
  description,
  faqs,
  showContact,
}) => {
  const isImage = background?.type === 'image' && background.image
  const presetClass = getBackgroundClass(background)
  const customCSS = getCustomBackgroundCSS(background, id)
  const sectionId = background?.type === 'custom' && id ? `block-bg-${id}` : undefined

  const displayTitle = title || 'Frequently Asked Questions'
  const displayDescription =
    description || 'Everything you need to know about GOGET and our methodology.'
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs
  const displayShowContact = showContact !== false

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
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-2">{displayTitle}</h1>
          <p className="text-slate-500 text-sm">{displayDescription}</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {displayFaqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {displayShowContact && (
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm">
              <p className="font-semibold">Still have questions?</p>
              <p className="text-slate-500">We're here to help.</p>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
              Contact Support
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
