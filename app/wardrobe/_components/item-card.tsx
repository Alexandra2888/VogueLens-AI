'use client';

import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export type WardrobeItem = {
  id: string;
  imageUrl: string;
  category: string;
  style: string;
  colors: string[];
  season: string;
  occasions: string[];
  brand: string | null;
  notes: string | null;
  createdAt: string;
};

type ItemCardProps = {
  item: WardrobeItem;
  onDelete: (id: string) => void;
  highlighted?: boolean;
};

export function ItemCard({ item, onDelete, highlighted }: ItemCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={highlighted ? 'ring-2 ring-primary' : ''}>
        <CardContent className="relative p-0">
          <img
            src={item.imageUrl}
            alt={item.category}
            className="h-56 w-full rounded-t-lg object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-7 w-7"
            onClick={() => onDelete(item.id)}
          >
            <X className="h-3 w-3" />
          </Button>
          <div className="p-3 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-medium capitalize">{item.category}</span>
              <span className="text-xs text-muted-foreground capitalize">{item.season}</span>
            </div>
            <p className="text-sm text-muted-foreground capitalize">{item.style}</p>
            {item.brand && (
              <p className="text-xs text-muted-foreground">{item.brand}</p>
            )}
            <div className="flex gap-1 flex-wrap">
              {item.colors.map((color) => (
                <span
                  key={color}
                  className="inline-block h-4 w-4 rounded-full border"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
