import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BouquetCanvas from '@/components/BouquetCanvas';
import { BouquetData } from '@/types/bouquet';
import LZString from 'lz-string';

const RecipientView: React.FC = () => {
  const { data } = useParams<{ data: string }>();
  const navigate = useNavigate();
  const [bouquetData, setBouquetData] = useState<BouquetData | null>(null);
  const [phase, setPhase] = useState<'unwrap' | 'reveal' | 'message'>('unwrap');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!data) { setError(true); return; }
    try {
      const decompressed = LZString.decompressFromEncodedURIComponent(data);
      if (!decompressed) { setError(true); return; }
      const parsed = JSON.parse(decompressed) as BouquetData;
      setBouquetData(parsed);
    } catch {
      setError(true);
    }
  }, [data]);

  useEffect(() => {
    if (!bouquetData) return;
    const t1 = setTimeout(() => setPhase('reveal'), 2500);
    const t2 = setTimeout(() => setPhase('message'), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [bouquetData]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">😔</p>
          <h1 className="text-xl font-display font-bold">This bouquet couldn't be found</h1>
          <p className="text-muted-foreground">The link may be invalid or expired</p>
          <Button onClick={() => navigate('/')}>Create Your Own Bouquet</Button>
        </div>
      </div>
    );
  }

  if (!bouquetData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading your surprise...</div>
      </div>
    );
  }

  const fontClass = bouquetData.message.fontStyle === 'script' ? 'font-script' : bouquetData.message.fontStyle === 'display' ? 'font-display' : bouquetData.message.fontStyle === 'serif' ? 'font-body-serif' : 'font-sans';

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'unwrap' && (
          <motion.div
            key="unwrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="text-center space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl"
            >
              🎁
            </motion.div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              Someone sent you a special gift!
            </h1>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-muted-foreground"
            >
              Unwrapping...
            </motion.div>
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 15 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <BouquetCanvas config={bouquetData.bouquet} width={350} height={440} interactive={false} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-2 mt-4"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-display text-xl text-foreground">A bouquet just for you!</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        )}

        {phase === 'message' && (
          <motion.div
            key="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-lg space-y-6"
          >
            <BouquetCanvas config={bouquetData.bouquet} width={320} height={400} interactive={false} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl p-6 mx-auto"
              style={{ backgroundColor: bouquetData.message.cardColor }}
            >
              <Heart className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className={`text-foreground text-lg leading-relaxed ${fontClass}`}>
                "{bouquetData.message.text}"
              </p>
              {bouquetData.message.senderName && (
                <p className={`text-muted-foreground text-right mt-4 ${fontClass}`}>
                  — {bouquetData.message.senderName}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button onClick={() => navigate('/')} size="lg" className="gap-2 font-display mt-4">
                <Sparkles className="w-4 h-4" /> Create Your Own Bouquet
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecipientView;
