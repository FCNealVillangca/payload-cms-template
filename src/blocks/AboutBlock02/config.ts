import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const AboutBlock02: Block = {
  slug: 'aboutBlock02',
  interfaceName: 'AboutBlock02Block',
  fields: [backgroundField],
  labels: {
    plural: 'About Block 02',
    singular: 'About Block 02',
  },
}
