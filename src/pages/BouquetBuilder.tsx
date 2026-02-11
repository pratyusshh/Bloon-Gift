import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useBouquet } from '@/context/BouquetContext';
import BouquetCanvas from '@/components/BouquetCanvas';
import { BouquetShape, WrapperPattern } from '@/types/bouquet';

const shapes: { id: BouquetShape; label: string; icon: string }[] = [
  { id: 'round', label: 'Round', icon: '🔵' },
  { id: 'cascade', label: 'Cascade', icon: '🌊' },
  { id: 'hand-tied', label: 'Hand-tied', icon: '🤲' },
  { id: 'presentation', label: 'Presentation', icon: '🎁' },
  { id: 'heart-container', label: 'Heart', icon: '❤️' },
];

const wrapperColors = ['#F4A7BB', '#FFD1DC', '#E8D5B7', '#B5C7A3', '#C5B4E3', '#F5E6CC', '#A8D8EA', '#FFB7B2', '#FFDAC1'];
const ribbonColors = ['#E63946', '#FFD700', '#FF69B4', '#9370DB', '#4A7C59', '#FF8C00', '#6495ED', '#DC143C', '#DDA0DD'];

const patterns: { id: WrapperPattern; label: string }[] = [
  { id: 'solid', label: 'Solid' },
  { id: 'polka-dots', label: 'Polka Dots' },
  { id: 'stripes', label: 'Stripes' },
  { id: 'kraft', label: 'Kraft Paper' },
];

const BouquetBuilder: React.FC = () => {
  const navigate = useNavigate();
  const {
    bouquetConfig, setShape, setWrapperColor, setWrapperPattern,
    setRibbonColor, toggleGreenery, toggleBabyBreath, toggleFillerFlowers, selectedCount,
  } = useBouquet();

  if (selectedCount === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2 h-9">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <h1 className="text-sm lg:text-xl font-display font-bold">Build Your Bouquet</h1>
          <Button onClick={() => navigate('/message')} className="gap-2 h-9">
            Next <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs text-muted-foreground text-center mb-2 lg:hidden">
              💡 Drag flowers to rearrange them
            </p>
            <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-lg border border-border">
              <BouquetCanvas width={380} height={480} />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2 hidden lg:block">
              💡 Drag flowers to rearrange them
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Bouquet Shape */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Bouquet Shape</h3>
              <div className="grid grid-cols-3 gap-2">
                {shapes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setShape(s.id)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      bouquetConfig.shape === s.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wrapper Color */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Wrapper Color</h3>
              <div className="flex flex-wrap gap-2">
                {wrapperColors.map(c => (
                  <button
                    key={c}
                    onClick={() => setWrapperColor(c)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      bouquetConfig.wrapperColor === c ? 'border-foreground scale-110 shadow-md' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Wrapper Pattern */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Wrapper Pattern</h3>
              <div className="grid grid-cols-2 gap-2">
                {patterns.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setWrapperPattern(p.id)}
                    className={`p-2.5 rounded-lg text-sm font-medium transition-all ${
                      bouquetConfig.wrapperPattern === p.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ribbon Color */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Ribbon & Bow</h3>
              <div className="flex flex-wrap gap-2">
                {ribbonColors.map(c => (
                  <button
                    key={c}
                    onClick={() => setRibbonColor(c)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      bouquetConfig.ribbonColor === c ? 'border-foreground scale-110 shadow-md' : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="bg-card rounded-xl p-5 border border-border">
              <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-bouquet-sage" /> Extras & Decorations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Greenery / Leaves</Label>
                  <Switch checked={bouquetConfig.showGreenery} onCheckedChange={toggleGreenery} />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Baby's Breath</Label>
                  <Switch checked={bouquetConfig.showBabyBreath} onCheckedChange={toggleBabyBreath} />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Filler Flowers</Label>
                  <Switch checked={bouquetConfig.showFillerFlowers} onCheckedChange={toggleFillerFlowers} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default BouquetBuilder;
