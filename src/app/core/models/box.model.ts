export interface Box {
  id: string;
  reference: string;
  ot: string;
  entryDate: Date;
  expiryDate?: Date;
  weight?: number;
  priority: 'low' | 'medium' | 'high';
  status: 'available' | 'reserved' | 'damaged' | 'in_transit' | 'error';
  operator: string;
  notes?: string;
  client?: string;
  category: string;
  hasTask?: boolean;
  position: {
  column: number;
  height: number;
};
}