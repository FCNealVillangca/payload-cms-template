import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const AboutBlock03: Block = {
  slug: 'aboutBlock03',
  interfaceName: 'AboutBlock03Block',
  fields: [backgroundField],
  labels: {
    plural: 'About Block 03',
    singular: 'About Block 03',
  },
}
