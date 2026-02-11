import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useBouquet } from '@/context/BouquetContext';
import BouquetCanvas from '@/components/BouquetCanvas';

const fontStyles = [
  { id: 'serif', label: 'Elegant Serif', className: 'font-body-serif' },
  { id: 'script', label: 'Handwritten', className: 'font-script' },
  { id: 'display', label: 'Classic Display', className: 'font-display' },
  { id: 'sans', label: 'Modern Sans', className: 'font-sans' },
];

const cardColors = ['#FFF5F5', '#F0FFF4', '#FFF8E1', '#F3E5F5', '#E3F2FD', '#FBE9E7', '#FFFDE7', '#F1F8E9'];

const WriteMessage: React.FC = () => {
  const navigate = useNavigate();
  const { messageConfig, setMessageText, setSenderName, setFontStyle, setCardColor, selectedCount } = useBouquet();

  if (selectedCount === 0) {
    navigate('/');
    return null;
  }

  const currentFont = fontStyles.find(f => f.id === messageConfig.fontStyle) || fontStyles[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/builder')} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <h1 className="text-xl font-display font-bold">Write Your Message</h1>
          <Button onClick={() => navigate('/share')} disabled={!messageConfig.text.trim()} className="gap-2">
            Share <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Message form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div>
              <Label className="text-base font-display mb-2 block">Your Message</Label>
              <Textarea
                placeholder="Write something heartfelt..."
                value={messageConfig.text}
                onChange={e => setMessageText(e.target.value)}
                className="min-h-[150px] text-base"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">{messageConfig.text.length}/500</p>
            </div>

            <div>
              <Label className="text-base font-display mb-2 block">From</Label>
              <Input
                placeholder="Your name (optional)"
                value={messageConfig.senderName}
                onChange={e => setSenderName(e.target.value)}
                maxLength={50}
              />
            </div>

            <div>
              <Label className="text-base font-display mb-2 block">Font Style</Label>
              <div className="grid grid-cols-2 gap-2">
                {fontStyles.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setFontStyle(f.id)}
                    className={`p-3 rounded-lg text-sm transition-all ${f.className} ${
                      messageConfig.fontStyle === f.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-display mb-2 block">Card Background</Label>
              <div className="flex flex-wrap gap-2">
                {cardColors.map(c => (
                  <button
                    key={c}
                    onClick={() => setCardColor(c)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all ${
                      messageConfig.cardColor === c ? 'border-foreground scale-110 shadow-md' : 'border-border hover:scale-105'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="sticky top-24">
              <h3 className="font-display font-semibold text-lg mb-3 text-center">Preview</h3>
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="flex justify-center py-4">
                  <BouquetCanvas width={300} height={380} interactive={false} />
                </div>
                <div
                  className="p-6 mx-4 mb-4 rounded-xl min-h-[120px]"
                  style={{ backgroundColor: messageConfig.cardColor }}
                >
                  {messageConfig.text ? (
                    <p className={`text-foreground text-lg ${currentFont.className}`}>
                      "{messageConfig.text}"
                    </p>
                  ) : (
                    <p className="text-muted-foreground italic text-center">Your message will appear here...</p>
                  )}
                  {messageConfig.senderName && (
                    <p className={`text-muted-foreground text-right mt-3 ${currentFont.className}`}>
                      — {messageConfig.senderName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WriteMessage;
