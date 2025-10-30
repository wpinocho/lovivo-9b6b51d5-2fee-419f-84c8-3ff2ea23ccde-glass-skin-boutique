import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface RoutineBundle {
  name: string;
  description: string;
  steps: string[];
  price: number;
  originalPrice: number;
  image: string;
}

const routineBundles: RoutineBundle[] = [
  {
    name: 'Glass Skin Starter Kit',
    description: 'Perfect for beginners. Everything you need for radiant glass skin.',
    steps: ['Gel Cleanser', 'Hydrating Toner', 'Essence', 'Moisturizer'],
    price: 89,
    originalPrice: 115,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop'
  },
  {
    name: 'Complete 10-Step Routine',
    description: 'The full K-beauty experience for ultimate skin transformation.',
    steps: ['Oil Cleanser', 'Foam Cleanser', 'Exfoliator', 'Toner', 'Essence', 'Serum', 'Sheet Mask', 'Eye Cream', 'Moisturizer', 'SPF'],
    price: 189,
    originalPrice: 245,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop'
  },
  {
    name: 'Sensitive Skin Care Set',
    description: 'Gentle, soothing routine for sensitive and reactive skin.',
    steps: ['Gentle Cleanser', 'Calming Toner', 'Barrier Cream', 'SPF'],
    price: 95,
    originalPrice: 125,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=400&fit=crop'
  }
];

export const RoutineBundles = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Curated Skincare Routines
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete routines designed by experts. Save time and money with our bundles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routineBundles.map((bundle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] bg-secondary/30 overflow-hidden relative">
                <img 
                  src={bundle.image} 
                  alt={bundle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${bundle.originalPrice - bundle.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {bundle.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {bundle.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    {bundle.steps.length} Steps Included:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bundle.steps.slice(0, 4).map((step, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full"
                      >
                        {step}
                      </span>
                    ))}
                    {bundle.steps.length > 4 && (
                      <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full">
                        +{bundle.steps.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      ${bundle.price}
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      ${bundle.originalPrice}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Add Bundle to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};