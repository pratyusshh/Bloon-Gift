export interface Flower {
  id: string;
  name: string;
  category: FlowerCategory;
  color: string;
  meaning: string;
  petalCount: number;
  petalShape: 'round' | 'pointed' | 'wavy' | 'star' | 'bell' | 'tube';
  centerColor: string;
  accentColor?: string;
  size: 'small' | 'medium' | 'large';
}

export type FlowerCategory = 
  | 'Roses' | 'Lilies' | 'Sunflowers' | 'Tulips' | 'Orchids' 
  | 'Daisies' | 'Carnations' | 'Peonies' | 'Hydrangeas' | 'Wildflowers'
  | 'Exotic' | 'Garden';

export type BouquetShape = 'round' | 'cascade' | 'hand-tied' | 'presentation';

export type WrapperPattern = 'solid' | 'polka-dots' | 'stripes' | 'kraft';

export interface BouquetConfig {
  flowers: SelectedFlower[];
  shape: BouquetShape;
  wrapperColor: string;
  wrapperPattern: WrapperPattern;
  ribbonColor: string;
  showGreenery: boolean;
  showBabyBreath: boolean;
  showFillerFlowers: boolean;
}

export interface SelectedFlower {
  flowerId: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export interface MessageConfig {
  text: string;
  senderName: string;
  fontStyle: string;
  cardColor: string;
}

export interface BouquetData {
  bouquet: BouquetConfig;
  message: MessageConfig;
}

export type Occasion = 'birthday' | 'anniversary' | 'thank-you' | 'get-well' | 'congratulations' | 'love' | 'sympathy';
