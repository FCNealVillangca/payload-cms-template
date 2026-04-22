import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const ExamSupportBlock: Block = {
  slug: 'examSupportBlock',
  interfaceName: 'ExamSupportBlock',
  fields: [backgroundField],
  labels: {
    plural: 'Exam Support Blocks',
    singular: 'Exam Support Block',
  },
}
