import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const FaqBlock01: Block = {
  slug: 'faqBlock01',
  interfaceName: 'FaqBlock01',
  fields: [backgroundField],
  labels: {
    plural: 'FAQ Block 01',
    singular: 'FAQ Block 01',
  },
}
