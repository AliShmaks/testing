export const fragranceCategories = [
  {
    id: 'for-her',
    name: 'For Her',
    icon: '🌸',
    image: '3348901500821-removebg-preview (1).webp',
    description: 'Elegant & feminine scents'
  },
  {
    id: 'for-him',
    name: 'For Him',
    icon: '🌿',
    image: 'emporio_armani-removebg-preview.webp',
    description: 'Bold & masculine aromas'
  },
  {
    id: 'unisex',
    name: 'Unisex',
    icon: '✨',
    image: '6L330100T0MA010000-removebg-preview.webp',
    description: 'Perfect for everyone'
  },
  {
    id: 'limited',
    name: 'Limited Edition',
    icon: '💎',
    image: '34150300_fpx-removebg-preview.webp',
    description: 'Exclusive & rare finds'
  }
]

export const perfumeProducts = {
  'for-her': [
    {
      id: 'her-1',
      name: 'Rose Noir',
      price: 89.00,
      description: 'A captivating blend of dark rose, blackcurrant, and vanilla.',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      notes: ['Rose', 'Blackcurrant', 'Vanilla', 'Patchouli'],
      is_limited: false,
      is_bestseller: true
    },
    {
      id: 'her-2',
      name: 'Jasmine Dream',
      price: 95.00,
      description: 'Delicate jasmine with hints of orange blossom and musk.',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop',
      notes: ['Jasmine', 'Orange Blossom', 'Musk', 'Sandalwood'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'her-3',
      name: 'Lavender Luxe',
      price: 78.00,
      description: 'Soothing lavender with bergamot and warm amber.',
      image: 'https://images.unsplash.com/photo-1583727738819-b585f36b8c08?w=400&h=400&fit=crop',
      notes: ['Lavender', 'Bergamot', 'Amber', 'Cedar'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'her-4',
      name: 'Peony Passion',
      price: 112.00,
      description: 'Fresh peony with fruity notes and a touch of honey.',
      image: 'https://images.unsplash.com/photo-1592919421562-4f3225d29310?w=400&h=400&fit=crop',
      notes: ['Peony', 'Fruit', 'Honey', 'Rose'],
      is_limited: true,
      is_bestseller: false
    },
    {
      id: 'her-5',
      name: 'Gardenia Bloom',
      price: 99.00,
      description: 'Creamy gardenia with coconut and white musk.',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&h=400&fit=crop',
      notes: ['Gardenia', 'Coconut', 'White Musk', 'Vanilla'],
      is_limited: false,
      is_bestseller: true
    }
  ],
  'for-him': [
    {
      id: 'him-1',
      name: 'Oud Royal',
      price: 145.00,
      description: 'Rich oud with saffron, rose, and aged patchouli.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop',
      notes: ['Oud', 'Saffron', 'Rose', 'Patchouli'],
      is_limited: false,
      is_bestseller: true
    },
    {
      id: 'him-2',
      name: 'Cedar & Spice',
      price: 85.00,
      description: 'Warm cedar with cinnamon, cardamom, and leather.',
      image: 'https://images.unsplash.com/photo-1592919421562-4f3225d29310?w=400&h=400&fit=crop',
      notes: ['Cedar', 'Cinnamon', 'Cardamom', 'Leather'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'him-3',
      name: 'Aqua Marine',
      price: 75.00,
      description: 'Fresh aquatic with sea salt, lime, and driftwood.',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop',
      notes: ['Sea Salt', 'Lime', 'Driftwood', 'Mint'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'him-4',
      name: 'Tobacco Vanille',
      price: 135.00,
      description: 'Bold tobacco with vanilla, cocoa, and dried fruits.',
      image: 'https://images.unsplash.com/photo-1583727738819-b585f36b8c08?w=400&h=400&fit=crop',
      notes: ['Tobacco', 'Vanilla', 'Cocoa', 'Dried Fruit'],
      is_limited: true,
      is_bestseller: true
    },
    {
      id: 'him-5',
      name: 'Sandalwood Mystique',
      price: 110.00,
      description: 'Creamy sandalwood with amber, musk, and vetiver.',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      notes: ['Sandalwood', 'Amber', 'Musk', 'Vetiver'],
      is_limited: false,
      is_bestseller: false
    }
  ],
  'unisex': [
    {
      id: 'uni-1',
      name: 'Bergamot Bliss',
      price: 82.00,
      description: 'Bright bergamot with tea, ginger, and white flowers.',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop',
      notes: ['Bergamot', 'Tea', 'Ginger', 'White Flowers'],
      is_limited: false,
      is_bestseller: true
    },
    {
      id: 'uni-2',
      name: 'Fig & Vetiver',
      price: 98.00,
      description: 'Green fig with vetiver, cedar, and black pepper.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop',
      notes: ['Fig', 'Vetiver', 'Cedar', 'Black Pepper'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'uni-3',
      name: 'Musk Amber',
      price: 92.00,
      description: 'Warm musk with amber, patchouli, and orange.',
      image: 'https://images.unsplash.com/photo-1592919421562-4f3225d29310?w=400&h=400&fit=crop',
      notes: ['Musk', 'Amber', 'Patchouli', 'Orange'],
      is_limited: false,
      is_bestseller: false
    },
    {
      id: 'uni-4',
      name: 'Iris & Iris',
      price: 125.00,
      description: 'Powdery iris with carrot seed, violet, and musk.',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop',
      notes: ['Iris', 'Carrot Seed', 'Violet', 'Musk'],
      is_limited: true,
      is_bestseller: false
    }
  ],
  'limited': [
    {
      id: 'lim-1',
      name: 'Midnight Oud',
      price: 199.00,
      description: 'Exclusive midnight oud with saffron, rose, and incense.',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      notes: ['Oud', 'Saffron', 'Rose', 'Incense'],
      is_limited: true,
      is_bestseller: true
    },
    {
      id: 'lim-2',
      name: 'Golden Amber',
      price: 175.00,
      description: 'Rare golden amber with vanilla, tonka, and spices.',
      image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&h=400&fit=crop',
      notes: ['Amber', 'Vanilla', 'Tonka', 'Spices'],
      is_limited: true,
      is_bestseller: false
    },
    {
      id: 'lim-3',
      name: 'Velvet Rose',
      price: 189.00,
      description: 'Limited velvet rose with truffle, patchouli, and honey.',
      image: 'https://images.unsplash.com/photo-1592919421562-4f3225d29310?w=400&h=400&fit=crop',
      notes: ['Rose', 'Truffle', 'Patchouli', 'Honey'],
      is_limited: true,
      is_bestseller: true
    },
    {
      id: 'lim-4',
      name: 'Crystal Saffron',
      price: 210.00,
      description: 'Crystal clear saffron with ambergris, oakmoss, and labdanum.',
      image: 'https://images.unsplash.com/photo-1583727738819-b585f36b8c08?w=400&h=400&fit=crop',
      notes: ['Saffron', 'Ambergris', 'Oakmoss', 'Labdanum'],
      is_limited: true,
      is_bestseller: false
    }
  ]
}