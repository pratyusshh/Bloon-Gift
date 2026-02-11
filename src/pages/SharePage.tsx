import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBouquet } from '@/context/BouquetContext';
import BouquetCanvas from '@/components/BouquetCanvas';
import { toast } from 'sonner';
import LZString from 'lz-string';

const SharePage: React.FC = () => {
  const navigate = useNavigate();
  const { bouquetConfig, messageConfig, selectedCount } = useBouquet();
  const [copied, setCopied] = React.useState(false);

  const shareUrl = useMemo(() => {
    const data = JSON.stringify({ bouquet: bouquetConfig, message: messageConfig });
    const compressed = LZString.compressToEncodedURIComponent(data);
    return `${window.location.origin}/view/${compressed}`;
  }, [bouquetConfig, messageConfig]);

  if (selectedCount === 0) {
    navigate('/');
    return null;
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent('I made a digital bouquet for you! 💐\n' + shareUrl)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('I made a digital bouquet! 💐')}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const fontClass = messageConfig.fontStyle === 'script' ? 'font-script' : messageConfig.fontStyle === 'display' ? 'font-display' : messageConfig.fontStyle === 'serif' ? 'font-body-serif' : 'font-sans';

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/message')} className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <h1 className="text-xl font-display font-bold">Share Your Bouquet</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6 inline-block">
            <BouquetCanvas width={320} height={400} interactive={false} />
            <div className="p-4 mt-2 rounded-xl" style={{ backgroundColor: messageConfig.cardColor }}>
              <p className={`text-foreground ${fontClass}`}>"{messageConfig.text}"</p>
              {messageConfig.senderName && (
                <p className={`text-muted-foreground text-right mt-2 text-sm ${fontClass}`}>— {messageConfig.senderName}</p>
              )}
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold">Your bouquet is ready! 🎉</h2>
          <p className="text-muted-foreground">Share this link with your special someone</p>

          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <input readOnly value={shareUrl} className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-foreground truncate" />
              <Button onClick={copyLink} variant="outline" className="gap-2 shrink-0">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <Button onClick={shareWhatsApp} className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white">
              <Share2 className="w-4 h-4" /> WhatsApp
            </Button>
            <Button onClick={shareTwitter} className="gap-2 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white">
              <Share2 className="w-4 h-4" /> Twitter
            </Button>
            <Button onClick={copyLink} variant="outline" className="gap-2">
              <Copy className="w-4 h-4" /> Copy Link
            </Button>
          </div>

          <Button variant="ghost" onClick={() => navigate('/')} className="mt-8">
            Create Another Bouquet
          </Button>
        </motion.div>
      </main>
      <footer className="w-full border-t border-border mt-4 bg-background/50">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-muted-foreground">
          <div>All rights reserved to Pratyush Pandey</div>
          <div>Instagram: <a href="https://instagram.com/pratyush.pandeyyy" target="_blank" rel="noreferrer" className="text-primary">@pratyush.pandeyyy</a></div>
        </div>
      </footer>
    </div>
  );
};

export default SharePage;
