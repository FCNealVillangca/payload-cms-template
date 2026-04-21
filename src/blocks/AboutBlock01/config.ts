import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const AboutBlock01: Block = {
  slug: 'aboutBlock01',
  interfaceName: 'AboutBlock01Block',
  fields: [backgroundField],
  labels: {
    plural: 'About Block 01',
    singular: 'About Block 01',
  },
}
