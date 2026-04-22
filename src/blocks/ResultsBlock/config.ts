import type { Block } from 'payload'

import { backgroundField } from '../../fields/background'

export const ResultsBlock: Block = {
  slug: 'resultsBlock',
  interfaceName: 'ResultsBlock',
  fields: [backgroundField],
  labels: {
    plural: 'Results Blocks',
    singular: 'Results Block',
  },
}
