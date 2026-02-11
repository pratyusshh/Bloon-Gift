import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, Sparkles, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBouquet } from '@/context/BouquetContext';
import flowers, { flowerCategories, occasionFlowers } from '@/data/flowers';
import FlowerSVG from '@/components/FlowerSVG';
import { FlowerCategory, Occasion } from '@/types/bouquet';

const occasions: { id: Occasion; label: string; emoji: string }[] = [
  { id: 'birthday', label: 'Birthday', emoji: '🎂' },
  { id: 'anniversary', label: 'Anniversary', emoji: '💍' },
  { id: 'thank-you', label: 'Thank You', emoji: '🙏' },
  { id: 'get-well', label: 'Get Well', emoji: '💚' },
  { id: 'congratulations', label: 'Congratulations', emoji: '🎉' },
  { id: 'love', label: 'Love', emoji: '❤️' },
  { id: 'sympathy', label: 'Sympathy', emoji: '🕊️' },
];

const FlowerGallery: React.FC = () => {
  const navigate = useNavigate();
  const { addFlower, removeFlower, isFlowerSelected, selectedCount } = useBouquet();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<FlowerCategory | 'All'>('All');
  const [activeOccasion, setActiveOccasion] = useState<Occasion | null>(null);

  const filteredFlowers = useMemo(() => {
    let result = flowers;
    if (activeOccasion) {
      const ids = occasionFlowers[activeOccasion] || [];
      result = result.filter(f => ids.includes(f.id));
    }
    if (activeCategory !== 'All') {
      result = result.filter(f => f.category === activeCategory);
    }
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(f => 
        f.name.toLowerCase().includes(s) || 
        f.meaning.toLowerCase().includes(s) ||
        f.color.toLowerCase().includes(s)
      );
    }
    return result;
  }, [search, activeCategory, activeOccasion]);

  const handleOccasionSelect = (occ: Occasion) => {
    if (activeOccasion === occ) {
      setActiveOccasion(null);
      return;
    }
    setActiveOccasion(occ);
    setActiveCategory('All');
    // Auto-select occasion flowers
    const ids = occasionFlowers[occ] || [];
    ids.forEach(id => {
      if (!isFlowerSelected(id)) addFlower(id);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Bloom & Gift
              </h1>
              <p className="text-sm text-muted-foreground">Create a digital bouquet for someone special</p>
            </div>
            <Button
              onClick={() => navigate('/builder')}
              disabled={selectedCount < 3}
              className="gap-2 font-display"
              size="lg"
            >
              <Sparkles className="w-4 h-4" />
              Build Bouquet ({selectedCount}/12)
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search flowers by name, meaning, or color..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Occasions */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {occasions.map(occ => (
              <button
                key={occ.id}
                onClick={() => handleOccasionSelect(occ.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeOccasion === occ.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <span>{occ.emoji}</span>
                <span>{occ.label}</span>
              </button>
            ))}
            {activeOccasion && (
              <button
                onClick={() => setActiveOccasion(null)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-muted text-muted-foreground hover:bg-muted/80"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeCategory === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All ({flowers.length})
            </button>
            {flowerCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Flower Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredFlowers.map(flower => {
              const selected = isFlowerSelected(flower.id);
              return (
                <motion.div
                  key={flower.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -4 }}
                  className={`relative rounded-xl p-3 cursor-pointer transition-all border-2 ${
                    selected
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-transparent bg-card hover:border-border hover:shadow-md'
                  }`}
                  onClick={() => selected ? removeFlower(flower.id) : addFlower(flower.id)}
                >
                  {selected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="w-3.5 h-3.5 text-primary-foreground fill-current" />
                    </div>
                  )}
                  <div className="flex justify-center mb-2">
                    <FlowerSVG flower={flower} size={70} />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground text-center truncate">{flower.name}</h3>
                  <p className="text-[10px] text-muted-foreground text-center mt-0.5 line-clamp-1">{flower.meaning}</p>
                  <Badge variant="secondary" className="mt-1.5 w-full justify-center text-[9px]">
                    {flower.category}
                  </Badge>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredFlowers.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No flowers found</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        )}
      </main>

      {/* Bottom bar on mobile */}
      {selectedCount > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-t border-border p-4 md:hidden"
        >
          <Button
            onClick={() => navigate('/builder')}
            disabled={selectedCount < 3}
            className="w-full gap-2 font-display"
            size="lg"
          >
            <Sparkles className="w-4 h-4" />
            {selectedCount < 3
              ? `Select ${3 - selectedCount} more flower${3 - selectedCount > 1 ? 's' : ''}`
              : `Build My Bouquet (${selectedCount} flowers)`
            }
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default FlowerGallery;
