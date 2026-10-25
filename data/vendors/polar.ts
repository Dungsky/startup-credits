import { VendorProgram } from '../types';

export const polarVendor: VendorProgram = {
  id: 'polar',
  name: 'Polar',
  website: 'https://polar.sh',
  startupProgram: {
    name: 'Polar Startup Program',
    url: 'https://polar.sh/startup-program',
    description: 'Scale plan free for 12 months (standard price $400/mo), with 3.40% + $0.30 transaction fees applying, prioritized ticket support and a dedicated Slack channel.',
    eligibility: [
      'Early-stage startups',
      'New Polar customers'
    ],
    perks: [
      'Scale plan free for 12 months ($400/mo value)',
      'Standard transaction fees apply (3.40% + $0.30)',
      'Prioritized ticket support',
      'Dedicated Slack channel'
    ],
    expiryMonths: 12
  }
};

export default polarVendor;