export const ticketTiers = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 350,
    description: 'Perfect for first-time festival goers looking for a full day out.',
    benefits: [
      'Single-day entry',
      'Access to all street food stalls',
      'Community stage music lineup',
    ],
    featured: false,
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 650,
    description: 'The best-value pass with extras for food lovers and friend groups.',
    benefits: [
      'Weekend entry (2 days)',
      'Reserved lounge seating zones',
      'One complimentary tasting platter',
      'Express check-in lane',
    ],
    featured: true,
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 1100,
    description: 'Premium pass for the full Food Fest experience and backstage perks.',
    benefits: [
      'All weekend VIP entry',
      'Chef meet-and-greet session',
      'Private viewing deck for headline sets',
      'Festival welcome pack and merch voucher',
    ],
    featured: false,
  },
]
