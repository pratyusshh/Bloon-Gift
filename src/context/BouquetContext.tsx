import React, { createContext, useContext, useState, useCallback } from 'react';
import { BouquetConfig, MessageConfig, SelectedFlower, BouquetShape, WrapperPattern } from '@/types/bouquet';

interface BouquetContextType {
  bouquetConfig: BouquetConfig;
  messageConfig: MessageConfig;
  addFlower: (flowerId: string) => void;
  removeFlower: (flowerId: string) => void;
  isFlowerSelected: (flowerId: string) => boolean;
  selectedCount: number;
  setShape: (shape: BouquetShape) => void;
  setWrapperColor: (color: string) => void;
  setWrapperPattern: (pattern: WrapperPattern) => void;
  setRibbonColor: (color: string) => void;
  toggleGreenery: () => void;
  toggleBabyBreath: () => void;
  toggleFillerFlowers: () => void;
  updateFlowerPosition: (flowerId: string, x: number, y: number) => void;
  setMessageText: (text: string) => void;
  setSenderName: (name: string) => void;
  setFontStyle: (font: string) => void;
  setCardColor: (color: string) => void;
  resetAll: () => void;
  loadFromData: (config: BouquetConfig, message: MessageConfig) => void;
}

const defaultBouquet: BouquetConfig = {
  flowers: [],
  shape: 'round',
  wrapperColor: '#F4A7BB',
  wrapperPattern: 'solid',
  ribbonColor: '#E63946',
  showGreenery: true,
  showBabyBreath: true,
  showFillerFlowers: false,
};

const defaultMessage: MessageConfig = {
  text: '',
  senderName: '',
  fontStyle: 'serif',
  cardColor: '#FFF5F5',
};

const BouquetContext = createContext<BouquetContextType | undefined>(undefined);

const getFlowerPosition = (index: number, total: number): { x: number; y: number; rotation: number } => {
  const centerX = 200;
  const centerY = 140;
  if (total === 1) return { x: centerX, y: centerY, rotation: 0 };
  const angleStep = (Math.PI * 0.8) / Math.max(total - 1, 1);
  const startAngle = -Math.PI * 0.4;
  const angle = startAngle + angleStep * index;
  const radius = 40 + (total > 6 ? 20 : 0);
  const row = Math.floor(index / 5);
  return {
    x: centerX + Math.cos(angle) * (radius + row * 30),
    y: centerY - Math.abs(Math.sin(angle)) * 30 + row * 25,
    rotation: (angle * 180) / Math.PI * 0.3,
  };
};

export const BouquetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bouquetConfig, setBouquetConfig] = useState<BouquetConfig>(defaultBouquet);
  const [messageConfig, setMessageConfig] = useState<MessageConfig>(defaultMessage);

  const addFlower = useCallback((flowerId: string) => {
    setBouquetConfig(prev => {
      if (prev.flowers.length >= 12) return prev;
      if (prev.flowers.some(f => f.flowerId === flowerId)) return prev;
      const pos = getFlowerPosition(prev.flowers.length, prev.flowers.length + 1);
      return {
        ...prev,
        flowers: [...prev.flowers, { flowerId, x: pos.x, y: pos.y, rotation: pos.rotation, scale: 1 }],
      };
    });
  }, []);

  const removeFlower = useCallback((flowerId: string) => {
    setBouquetConfig(prev => ({
      ...prev,
      flowers: prev.flowers.filter(f => f.flowerId !== flowerId),
    }));
  }, []);

  const isFlowerSelected = useCallback((flowerId: string) => {
    return bouquetConfig.flowers.some(f => f.flowerId === flowerId);
  }, [bouquetConfig.flowers]);

  const updateFlowerPosition = useCallback((flowerId: string, x: number, y: number) => {
    setBouquetConfig(prev => ({
      ...prev,
      flowers: prev.flowers.map(f => f.flowerId === flowerId ? { ...f, x, y } : f),
    }));
  }, []);

  const value: BouquetContextType = {
    bouquetConfig,
    messageConfig,
    addFlower,
    removeFlower,
    isFlowerSelected,
    selectedCount: bouquetConfig.flowers.length,
    setShape: (shape) => setBouquetConfig(prev => ({ ...prev, shape })),
    setWrapperColor: (wrapperColor) => setBouquetConfig(prev => ({ ...prev, wrapperColor })),
    setWrapperPattern: (wrapperPattern) => setBouquetConfig(prev => ({ ...prev, wrapperPattern })),
    setRibbonColor: (ribbonColor) => setBouquetConfig(prev => ({ ...prev, ribbonColor })),
    toggleGreenery: () => setBouquetConfig(prev => ({ ...prev, showGreenery: !prev.showGreenery })),
    toggleBabyBreath: () => setBouquetConfig(prev => ({ ...prev, showBabyBreath: !prev.showBabyBreath })),
    toggleFillerFlowers: () => setBouquetConfig(prev => ({ ...prev, showFillerFlowers: !prev.showFillerFlowers })),
    updateFlowerPosition,
    setMessageText: (text) => setMessageConfig(prev => ({ ...prev, text })),
    setSenderName: (name) => setMessageConfig(prev => ({ ...prev, senderName: name })),
    setFontStyle: (fontStyle) => setMessageConfig(prev => ({ ...prev, fontStyle })),
    setCardColor: (cardColor) => setMessageConfig(prev => ({ ...prev, cardColor })),
    resetAll: () => { setBouquetConfig(defaultBouquet); setMessageConfig(defaultMessage); },
    loadFromData: (config, message) => { setBouquetConfig(config); setMessageConfig(message); },
  };

  return <BouquetContext.Provider value={value}>{children}</BouquetContext.Provider>;
};

export const useBouquet = () => {
  const ctx = useContext(BouquetContext);
  if (!ctx) throw new Error('useBouquet must be used within BouquetProvider');
  return ctx;
};
