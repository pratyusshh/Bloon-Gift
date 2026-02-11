import { Flower, FlowerCategory } from '@/types/bouquet';

const flowers: Flower[] = [
  // ROSES (12)
  { id: 'rose-red', name: 'Red Rose', category: 'Roses', color: '#E63946', meaning: 'Deep Love & Passion', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  { id: 'rose-pink', name: 'Pink Rose', category: 'Roses', color: '#F4A7BB', meaning: 'Grace & Gratitude', petalCount: 5, petalShape: 'round', centerColor: '#FFE066', size: 'medium' },
  { id: 'rose-white', name: 'White Rose', category: 'Roses', color: '#FFF5F5', meaning: 'Purity & Innocence', petalCount: 5, petalShape: 'round', centerColor: '#FFFACD', accentColor: '#F0E6E6', size: 'medium' },
  { id: 'rose-yellow', name: 'Yellow Rose', category: 'Roses', color: '#FFD166', meaning: 'Friendship & Joy', petalCount: 5, petalShape: 'round', centerColor: '#FF8C00', size: 'medium' },
  { id: 'rose-orange', name: 'Orange Rose', category: 'Roses', color: '#F4845F', meaning: 'Enthusiasm & Desire', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  { id: 'rose-lavender', name: 'Lavender Rose', category: 'Roses', color: '#C8A2C8', meaning: 'Enchantment & Wonder', petalCount: 5, petalShape: 'round', centerColor: '#FFE066', size: 'medium' },
  { id: 'rose-peach', name: 'Peach Rose', category: 'Roses', color: '#FFDAB9', meaning: 'Sincerity & Modesty', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', accentColor: '#FFE4C4', size: 'medium' },
  { id: 'rose-coral', name: 'Coral Rose', category: 'Roses', color: '#FF7F7F', meaning: 'Admiration & Warmth', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  { id: 'rose-burgundy', name: 'Burgundy Rose', category: 'Roses', color: '#800020', meaning: 'Unconscious Beauty', petalCount: 5, petalShape: 'round', centerColor: '#DAA520', size: 'medium' },
  { id: 'rose-cream', name: 'Cream Rose', category: 'Roses', color: '#FFFDD0', meaning: 'Thoughtfulness', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', accentColor: '#FFF8DC', size: 'medium' },
  { id: 'rose-blush', name: 'Blush Rose', category: 'Roses', color: '#FFB6C1', meaning: 'First Love', petalCount: 5, petalShape: 'round', centerColor: '#FFE066', size: 'medium' },
  { id: 'rose-magenta', name: 'Magenta Rose', category: 'Roses', color: '#FF00FF', meaning: 'Universal Love', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  
  // LILIES (10)
  { id: 'lily-white', name: 'White Lily', category: 'Lilies', color: '#FFFFFF', meaning: 'Purity & Rebirth', petalCount: 6, petalShape: 'pointed', centerColor: '#90EE90', accentColor: '#F0F0F0', size: 'large' },
  { id: 'lily-stargazer', name: 'Stargazer Lily', category: 'Lilies', color: '#FF69B4', meaning: 'Ambition & Prosperity', petalCount: 6, petalShape: 'pointed', centerColor: '#FFD700', accentColor: '#C71585', size: 'large' },
  { id: 'lily-tiger', name: 'Tiger Lily', category: 'Lilies', color: '#FF8C00', meaning: 'Confidence & Pride', petalCount: 6, petalShape: 'pointed', centerColor: '#8B4513', accentColor: '#FF4500', size: 'large' },
  { id: 'lily-calla', name: 'Calla Lily', category: 'Lilies', color: '#FFFAF0', meaning: 'Magnificent Beauty', petalCount: 1, petalShape: 'wavy', centerColor: '#FFD700', size: 'large' },
  { id: 'lily-asiatic-pink', name: 'Pink Asiatic Lily', category: 'Lilies', color: '#FF69B4', meaning: 'Wealth & Happiness', petalCount: 6, petalShape: 'pointed', centerColor: '#228B22', size: 'large' },
  { id: 'lily-asiatic-yellow', name: 'Yellow Asiatic Lily', category: 'Lilies', color: '#FFD700', meaning: 'Thankfulness', petalCount: 6, petalShape: 'pointed', centerColor: '#8B4513', size: 'large' },
  { id: 'lily-oriental', name: 'Oriental Lily', category: 'Lilies', color: '#FFB7C5', meaning: 'Eternal Love', petalCount: 6, petalShape: 'pointed', centerColor: '#90EE90', accentColor: '#FF1493', size: 'large' },
  { id: 'lily-daylily', name: 'Daylily', category: 'Lilies', color: '#FFA500', meaning: 'Flirtation', petalCount: 6, petalShape: 'wavy', centerColor: '#FFD700', size: 'medium' },
  { id: 'lily-peace', name: 'Peace Lily', category: 'Lilies', color: '#F5F5F5', meaning: 'Peace & Healing', petalCount: 1, petalShape: 'wavy', centerColor: '#FFFACD', size: 'medium' },
  { id: 'lily-peruvian', name: 'Peruvian Lily', category: 'Lilies', color: '#FF6347', meaning: 'Devotion & Fortune', petalCount: 6, petalShape: 'pointed', centerColor: '#FFD700', accentColor: '#8B0000', size: 'medium' },

  // SUNFLOWERS (8)
  { id: 'sunflower-classic', name: 'Classic Sunflower', category: 'Sunflowers', color: '#FFD700', meaning: 'Adoration & Loyalty', petalCount: 12, petalShape: 'pointed', centerColor: '#8B4513', size: 'large' },
  { id: 'sunflower-dwarf', name: 'Dwarf Sunflower', category: 'Sunflowers', color: '#FFDB58', meaning: 'Happiness', petalCount: 10, petalShape: 'pointed', centerColor: '#654321', size: 'small' },
  { id: 'sunflower-red', name: 'Red Sunflower', category: 'Sunflowers', color: '#CC3333', meaning: 'Passion & Energy', petalCount: 12, petalShape: 'pointed', centerColor: '#2D1810', size: 'large' },
  { id: 'sunflower-teddy', name: 'Teddy Bear Sunflower', category: 'Sunflowers', color: '#DAA520', meaning: 'Warmth', petalCount: 20, petalShape: 'round', centerColor: '#B8860B', size: 'medium' },
  { id: 'sunflower-autumn', name: 'Autumn Beauty', category: 'Sunflowers', color: '#CD853F', meaning: 'Harvest & Abundance', petalCount: 12, petalShape: 'pointed', centerColor: '#3E2723', size: 'large' },
  { id: 'sunflower-lemon', name: 'Lemon Queen', category: 'Sunflowers', color: '#FFF44F', meaning: 'Optimism', petalCount: 14, petalShape: 'pointed', centerColor: '#556B2F', size: 'large' },
  { id: 'sunflower-chocolate', name: 'Chocolate Sunflower', category: 'Sunflowers', color: '#8B4513', meaning: 'Strength', petalCount: 12, petalShape: 'pointed', centerColor: '#1A0A00', size: 'large' },
  { id: 'sunflower-vanilla', name: 'Vanilla Ice Sunflower', category: 'Sunflowers', color: '#FFF8DC', meaning: 'Gentle Radiance', petalCount: 10, petalShape: 'pointed', centerColor: '#4A3728', size: 'medium' },

  // TULIPS (10)
  { id: 'tulip-red', name: 'Red Tulip', category: 'Tulips', color: '#DC143C', meaning: 'True Love', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', size: 'medium' },
  { id: 'tulip-yellow', name: 'Yellow Tulip', category: 'Tulips', color: '#FFD700', meaning: 'Cheerful Thoughts', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', size: 'medium' },
  { id: 'tulip-purple', name: 'Purple Tulip', category: 'Tulips', color: '#800080', meaning: 'Royalty & Elegance', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', size: 'medium' },
  { id: 'tulip-white', name: 'White Tulip', category: 'Tulips', color: '#FFFAFA', meaning: 'Forgiveness', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', accentColor: '#F0F0F0', size: 'medium' },
  { id: 'tulip-pink', name: 'Pink Tulip', category: 'Tulips', color: '#FFB6C1', meaning: 'Caring & Affection', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', size: 'medium' },
  { id: 'tulip-orange', name: 'Orange Tulip', category: 'Tulips', color: '#FF7F50', meaning: 'Energy & Enthusiasm', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', size: 'medium' },
  { id: 'tulip-parrot', name: 'Parrot Tulip', category: 'Tulips', color: '#FF1493', meaning: 'Boldness', petalCount: 6, petalShape: 'wavy', centerColor: '#FFD700', accentColor: '#FF4500', size: 'large' },
  { id: 'tulip-fringed', name: 'Fringed Tulip', category: 'Tulips', color: '#DA70D6', meaning: 'Finesse', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', accentColor: '#FFB6C1', size: 'medium' },
  { id: 'tulip-black', name: 'Black Tulip', category: 'Tulips', color: '#1C1C1C', meaning: 'Mystery & Power', petalCount: 6, petalShape: 'wavy', centerColor: '#333', size: 'medium' },
  { id: 'tulip-rainbow', name: 'Rainbow Tulip', category: 'Tulips', color: '#FF6B6B', meaning: 'Diversity & Joy', petalCount: 6, petalShape: 'wavy', centerColor: '#000000', accentColor: '#FFD700', size: 'medium' },

  // ORCHIDS (10)
  { id: 'orchid-phalaenopsis', name: 'Phalaenopsis Orchid', category: 'Orchids', color: '#FFB6C1', meaning: 'Love & Luxury', petalCount: 5, petalShape: 'round', centerColor: '#FF1493', size: 'large' },
  { id: 'orchid-dendrobium', name: 'Dendrobium Orchid', category: 'Orchids', color: '#DA70D6', meaning: 'Pure Affection', petalCount: 5, petalShape: 'pointed', centerColor: '#8B008B', size: 'medium' },
  { id: 'orchid-cattleya', name: 'Cattleya Orchid', category: 'Orchids', color: '#FF69B4', meaning: 'Mature Charm', petalCount: 5, petalShape: 'wavy', centerColor: '#FFD700', size: 'large' },
  { id: 'orchid-oncidium', name: 'Oncidium Orchid', category: 'Orchids', color: '#FFD700', meaning: 'Dancing Lady', petalCount: 5, petalShape: 'star', centerColor: '#8B4513', size: 'small' },
  { id: 'orchid-cymbidium', name: 'Cymbidium Orchid', category: 'Orchids', color: '#98FB98', meaning: 'Virtue & Morality', petalCount: 5, petalShape: 'round', centerColor: '#FF69B4', size: 'large' },
  { id: 'orchid-vanda', name: 'Vanda Orchid', category: 'Orchids', color: '#7B68EE', meaning: 'Rare Beauty', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'large' },
  { id: 'orchid-white', name: 'White Orchid', category: 'Orchids', color: '#FFFFFF', meaning: 'Elegance & Purity', petalCount: 5, petalShape: 'round', centerColor: '#FFFACD', accentColor: '#F0F0F0', size: 'large' },
  { id: 'orchid-blue', name: 'Blue Orchid', category: 'Orchids', color: '#6495ED', meaning: 'Rarity & Uniqueness', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  { id: 'orchid-chocolate', name: 'Chocolate Orchid', category: 'Orchids', color: '#5C4033', meaning: 'Decadence', petalCount: 5, petalShape: 'star', centerColor: '#FFD700', size: 'medium' },
  { id: 'orchid-spider', name: 'Spider Orchid', category: 'Orchids', color: '#90EE90', meaning: 'Skill & Craft', petalCount: 5, petalShape: 'star', centerColor: '#556B2F', size: 'large' },

  // DAISIES (8)
  { id: 'daisy-white', name: 'White Daisy', category: 'Daisies', color: '#FFFFFF', meaning: 'Innocence & New Beginnings', petalCount: 12, petalShape: 'round', centerColor: '#FFD700', size: 'small' },
  { id: 'daisy-gerbera-pink', name: 'Pink Gerbera Daisy', category: 'Daisies', color: '#FF69B4', meaning: 'Joy & Beauty', petalCount: 14, petalShape: 'pointed', centerColor: '#8B4513', size: 'medium' },
  { id: 'daisy-gerbera-orange', name: 'Orange Gerbera Daisy', category: 'Daisies', color: '#FF8C00', meaning: 'Warmth & Sunshine', petalCount: 14, petalShape: 'pointed', centerColor: '#654321', size: 'medium' },
  { id: 'daisy-gerbera-red', name: 'Red Gerbera Daisy', category: 'Daisies', color: '#FF4444', meaning: 'Passion & Energy', petalCount: 14, petalShape: 'pointed', centerColor: '#333', size: 'medium' },
  { id: 'daisy-gerbera-yellow', name: 'Yellow Gerbera Daisy', category: 'Daisies', color: '#FFD700', meaning: 'Cheerfulness', petalCount: 14, petalShape: 'pointed', centerColor: '#654321', size: 'medium' },
  { id: 'daisy-shasta', name: 'Shasta Daisy', category: 'Daisies', color: '#FFFAF0', meaning: 'Patience', petalCount: 16, petalShape: 'pointed', centerColor: '#FFD700', size: 'medium' },
  { id: 'daisy-african', name: 'African Daisy', category: 'Daisies', color: '#FF6347', meaning: 'Transformation', petalCount: 12, petalShape: 'pointed', centerColor: '#4169E1', size: 'medium' },
  { id: 'daisy-oxeye', name: 'Oxeye Daisy', category: 'Daisies', color: '#FFF8F0', meaning: 'Simplicity', petalCount: 18, petalShape: 'pointed', centerColor: '#FFD700', size: 'small' },

  // CARNATIONS (8)
  { id: 'carnation-red', name: 'Red Carnation', category: 'Carnations', color: '#DC143C', meaning: 'Deep Love & Admiration', petalCount: 20, petalShape: 'wavy', centerColor: '#C41E3A', size: 'medium' },
  { id: 'carnation-pink', name: 'Pink Carnation', category: 'Carnations', color: '#FFB6C1', meaning: "Mother's Love", petalCount: 20, petalShape: 'wavy', centerColor: '#FF69B4', size: 'medium' },
  { id: 'carnation-white', name: 'White Carnation', category: 'Carnations', color: '#FFFFF0', meaning: 'Pure Love & Luck', petalCount: 20, petalShape: 'wavy', centerColor: '#F0F0F0', size: 'medium' },
  { id: 'carnation-yellow', name: 'Yellow Carnation', category: 'Carnations', color: '#FFD700', meaning: 'Cheerfulness', petalCount: 20, petalShape: 'wavy', centerColor: '#DAA520', size: 'medium' },
  { id: 'carnation-purple', name: 'Purple Carnation', category: 'Carnations', color: '#9370DB', meaning: 'Capriciousness', petalCount: 20, petalShape: 'wavy', centerColor: '#7B68EE', size: 'medium' },
  { id: 'carnation-striped', name: 'Striped Carnation', category: 'Carnations', color: '#FF6B81', meaning: 'Regret & Refusal', petalCount: 20, petalShape: 'wavy', centerColor: '#FF69B4', accentColor: '#FFF', size: 'medium' },
  { id: 'carnation-green', name: 'Green Carnation', category: 'Carnations', color: '#90EE90', meaning: 'Good Luck', petalCount: 20, petalShape: 'wavy', centerColor: '#228B22', size: 'medium' },
  { id: 'carnation-burgundy', name: 'Burgundy Carnation', category: 'Carnations', color: '#800020', meaning: 'Deep Affection', petalCount: 20, petalShape: 'wavy', centerColor: '#660000', size: 'medium' },

  // PEONIES (8)
  { id: 'peony-pink', name: 'Pink Peony', category: 'Peonies', color: '#FFB6C1', meaning: 'Romance & Prosperity', petalCount: 25, petalShape: 'round', centerColor: '#FF69B4', size: 'large' },
  { id: 'peony-white', name: 'White Peony', category: 'Peonies', color: '#FFF5EE', meaning: 'Bashfulness', petalCount: 25, petalShape: 'round', centerColor: '#FFFACD', accentColor: '#F5F5F5', size: 'large' },
  { id: 'peony-red', name: 'Red Peony', category: 'Peonies', color: '#DC143C', meaning: 'Honor & Respect', petalCount: 25, petalShape: 'round', centerColor: '#B22222', size: 'large' },
  { id: 'peony-coral', name: 'Coral Peony', category: 'Peonies', color: '#FF7F7F', meaning: 'Romance & Charm', petalCount: 25, petalShape: 'round', centerColor: '#FFD700', size: 'large' },
  { id: 'peony-blush', name: 'Blush Peony', category: 'Peonies', color: '#FFDAB9', meaning: 'Compassion', petalCount: 25, petalShape: 'round', centerColor: '#FFE4B5', size: 'large' },
  { id: 'peony-magenta', name: 'Magenta Peony', category: 'Peonies', color: '#FF00FF', meaning: 'Devotion', petalCount: 25, petalShape: 'round', centerColor: '#C71585', size: 'large' },
  { id: 'peony-yellow', name: 'Yellow Peony', category: 'Peonies', color: '#FAFAD2', meaning: 'New Beginnings', petalCount: 25, petalShape: 'round', centerColor: '#FFD700', size: 'large' },
  { id: 'peony-lavender', name: 'Lavender Peony', category: 'Peonies', color: '#E6E6FA', meaning: 'Serenity & Grace', petalCount: 25, petalShape: 'round', centerColor: '#9370DB', size: 'large' },

  // HYDRANGEAS (6)
  { id: 'hydrangea-blue', name: 'Blue Hydrangea', category: 'Hydrangeas', color: '#6495ED', meaning: 'Understanding & Apology', petalCount: 4, petalShape: 'round', centerColor: '#87CEEB', size: 'large' },
  { id: 'hydrangea-pink', name: 'Pink Hydrangea', category: 'Hydrangeas', color: '#FFB6C1', meaning: 'Heartfelt Emotion', petalCount: 4, petalShape: 'round', centerColor: '#FF69B4', size: 'large' },
  { id: 'hydrangea-white', name: 'White Hydrangea', category: 'Hydrangeas', color: '#F5F5F5', meaning: 'Grace & Abundance', petalCount: 4, petalShape: 'round', centerColor: '#FFFACD', size: 'large' },
  { id: 'hydrangea-purple', name: 'Purple Hydrangea', category: 'Hydrangeas', color: '#9370DB', meaning: 'Desire to Understand', petalCount: 4, petalShape: 'round', centerColor: '#7B68EE', size: 'large' },
  { id: 'hydrangea-green', name: 'Green Hydrangea', category: 'Hydrangeas', color: '#90EE90', meaning: 'Renewal & Health', petalCount: 4, petalShape: 'round', centerColor: '#228B22', size: 'large' },
  { id: 'hydrangea-bicolor', name: 'Bicolor Hydrangea', category: 'Hydrangeas', color: '#DDA0DD', meaning: 'Unity', petalCount: 4, petalShape: 'round', centerColor: '#87CEEB', accentColor: '#FFB6C1', size: 'large' },

  // WILDFLOWERS (10)
  { id: 'wild-lavender', name: 'Lavender', category: 'Wildflowers', color: '#E6E6FA', meaning: 'Serenity & Calm', petalCount: 4, petalShape: 'bell', centerColor: '#9370DB', size: 'small' },
  { id: 'wild-poppy', name: 'Red Poppy', category: 'Wildflowers', color: '#FF4444', meaning: 'Remembrance', petalCount: 4, petalShape: 'round', centerColor: '#000000', size: 'medium' },
  { id: 'wild-bluebell', name: 'Bluebell', category: 'Wildflowers', color: '#6495ED', meaning: 'Humility & Gratitude', petalCount: 5, petalShape: 'bell', centerColor: '#FFD700', size: 'small' },
  { id: 'wild-buttercup', name: 'Buttercup', category: 'Wildflowers', color: '#FFD700', meaning: 'Childish Joy', petalCount: 5, petalShape: 'round', centerColor: '#FF8C00', size: 'small' },
  { id: 'wild-forget-me-not', name: 'Forget-Me-Not', category: 'Wildflowers', color: '#87CEEB', meaning: 'True Love & Memories', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'small' },
  { id: 'wild-violet', name: 'Violet', category: 'Wildflowers', color: '#8A2BE2', meaning: 'Faithfulness & Modesty', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', size: 'small' },
  { id: 'wild-cornflower', name: 'Cornflower', category: 'Wildflowers', color: '#6495ED', meaning: 'Hope in Love', petalCount: 8, petalShape: 'pointed', centerColor: '#483D8B', size: 'small' },
  { id: 'wild-clover', name: 'Clover Flower', category: 'Wildflowers', color: '#FF69B4', meaning: 'Good Fortune', petalCount: 30, petalShape: 'tube', centerColor: '#C71585', size: 'small' },
  { id: 'wild-thistle', name: 'Thistle', category: 'Wildflowers', color: '#9370DB', meaning: 'Resilience & Pride', petalCount: 20, petalShape: 'tube', centerColor: '#4B0082', size: 'medium' },
  { id: 'wild-chamomile', name: 'Chamomile', category: 'Wildflowers', color: '#FFFFF0', meaning: 'Patience & Calm', petalCount: 14, petalShape: 'pointed', centerColor: '#FFD700', size: 'small' },

  // EXOTIC (10)
  { id: 'exotic-bird-paradise', name: 'Bird of Paradise', category: 'Exotic', color: '#FF6347', meaning: 'Freedom & Joy', petalCount: 3, petalShape: 'pointed', centerColor: '#4169E1', accentColor: '#FFD700', size: 'large' },
  { id: 'exotic-protea', name: 'Protea', category: 'Exotic', color: '#FF69B4', meaning: 'Courage & Transformation', petalCount: 20, petalShape: 'pointed', centerColor: '#8B4513', size: 'large' },
  { id: 'exotic-anthurium', name: 'Anthurium', category: 'Exotic', color: '#FF0000', meaning: 'Hospitality', petalCount: 1, petalShape: 'round', centerColor: '#FFD700', size: 'large' },
  { id: 'exotic-heliconia', name: 'Heliconia', category: 'Exotic', color: '#FF4500', meaning: 'Return of Happiness', petalCount: 4, petalShape: 'pointed', centerColor: '#FFD700', accentColor: '#FF0000', size: 'large' },
  { id: 'exotic-plumeria', name: 'Plumeria', category: 'Exotic', color: '#FFFACD', meaning: 'Positivity & New Life', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', accentColor: '#FFB6C1', size: 'medium' },
  { id: 'exotic-hibiscus', name: 'Hibiscus', category: 'Exotic', color: '#FF1493', meaning: 'Delicate Beauty', petalCount: 5, petalShape: 'wavy', centerColor: '#FFD700', size: 'large' },
  { id: 'exotic-lotus', name: 'Lotus', category: 'Exotic', color: '#FFB6C1', meaning: 'Enlightenment & Purity', petalCount: 12, petalShape: 'pointed', centerColor: '#FFD700', size: 'large' },
  { id: 'exotic-jasmine', name: 'Jasmine', category: 'Exotic', color: '#FFFFF0', meaning: 'Sweet Love', petalCount: 5, petalShape: 'star', centerColor: '#FFFACD', size: 'small' },
  { id: 'exotic-frangipani', name: 'Frangipani', category: 'Exotic', color: '#FFF8DC', meaning: 'Devotion', petalCount: 5, petalShape: 'round', centerColor: '#FFD700', accentColor: '#FFB6C1', size: 'medium' },
  { id: 'exotic-bougainvillea', name: 'Bougainvillea', category: 'Exotic', color: '#FF00FF', meaning: 'Passion & Vitality', petalCount: 3, petalShape: 'pointed', centerColor: '#FFFACD', size: 'medium' },

  // GARDEN (10)
  { id: 'garden-zinnia', name: 'Zinnia', category: 'Garden', color: '#FF6347', meaning: 'Endurance & Friendship', petalCount: 16, petalShape: 'pointed', centerColor: '#DAA520', size: 'medium' },
  { id: 'garden-marigold', name: 'Marigold', category: 'Garden', color: '#FF8C00', meaning: 'Passion & Creativity', petalCount: 20, petalShape: 'round', centerColor: '#B8860B', size: 'medium' },
  { id: 'garden-snapdragon', name: 'Snapdragon', category: 'Garden', color: '#FF69B4', meaning: 'Grace & Strength', petalCount: 3, petalShape: 'bell', centerColor: '#FFD700', size: 'medium' },
  { id: 'garden-dahlia', name: 'Dahlia', category: 'Garden', color: '#FF1493', meaning: 'Inner Strength & Creativity', petalCount: 24, petalShape: 'pointed', centerColor: '#FFD700', size: 'large' },
  { id: 'garden-aster', name: 'Aster', category: 'Garden', color: '#9370DB', meaning: 'Wisdom & Daintiness', petalCount: 16, petalShape: 'pointed', centerColor: '#FFD700', size: 'small' },
  { id: 'garden-cosmos', name: 'Cosmos', category: 'Garden', color: '#FF69B4', meaning: 'Order & Harmony', petalCount: 8, petalShape: 'round', centerColor: '#FFD700', size: 'medium' },
  { id: 'garden-sweet-pea', name: 'Sweet Pea', category: 'Garden', color: '#DDA0DD', meaning: 'Blissful Pleasure', petalCount: 4, petalShape: 'wavy', centerColor: '#9370DB', size: 'small' },
  { id: 'garden-ranunculus', name: 'Ranunculus', category: 'Garden', color: '#FF6B6B', meaning: 'Radiant Charm', petalCount: 30, petalShape: 'round', centerColor: '#228B22', size: 'medium' },
  { id: 'garden-anemone', name: 'Anemone', category: 'Garden', color: '#FF4444', meaning: 'Anticipation', petalCount: 6, petalShape: 'round', centerColor: '#000000', size: 'medium' },
  { id: 'garden-stock', name: 'Stock', category: 'Garden', color: '#DDA0DD', meaning: 'Lasting Beauty', petalCount: 4, petalShape: 'round', centerColor: '#9370DB', size: 'medium' },
];

export const flowerCategories: FlowerCategory[] = [
  'Roses', 'Lilies', 'Sunflowers', 'Tulips', 'Orchids',
  'Daisies', 'Carnations', 'Peonies', 'Hydrangeas', 'Wildflowers',
  'Exotic', 'Garden'
];

export const occasionFlowers: Record<string, string[]> = {
  birthday: ['rose-pink', 'daisy-gerbera-pink', 'tulip-yellow', 'sunflower-classic', 'garden-zinnia', 'carnation-pink', 'garden-cosmos'],
  anniversary: ['rose-red', 'peony-pink', 'orchid-phalaenopsis', 'lily-stargazer', 'tulip-red', 'garden-ranunculus', 'rose-blush'],
  'thank-you': ['rose-yellow', 'daisy-white', 'sunflower-classic', 'tulip-pink', 'wild-forget-me-not', 'garden-sweet-pea', 'hydrangea-pink'],
  'get-well': ['daisy-gerbera-yellow', 'sunflower-dwarf', 'tulip-yellow', 'wild-chamomile', 'garden-cosmos', 'carnation-white', 'lily-peace'],
  congratulations: ['sunflower-classic', 'rose-orange', 'tulip-orange', 'garden-dahlia', 'exotic-bird-paradise', 'garden-zinnia', 'orchid-oncidium'],
  love: ['rose-red', 'peony-pink', 'tulip-red', 'orchid-phalaenopsis', 'rose-blush', 'exotic-lotus', 'lily-oriental'],
  sympathy: ['lily-white', 'rose-white', 'carnation-white', 'hydrangea-white', 'wild-forget-me-not', 'orchid-white', 'peony-white'],
};

export default flowers;
