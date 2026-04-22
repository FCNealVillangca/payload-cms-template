import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const ExamSupportBlock02: Block = {
  slug: 'examSupport02',
  interfaceName: 'ExamSupportBlock02',
  fields: [backgroundField],
  labels: {
    plural: 'Exam Support Block 02',
    singular: 'Exam Support Block 02',
  },
}
