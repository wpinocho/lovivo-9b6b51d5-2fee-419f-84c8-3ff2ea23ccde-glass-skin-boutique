import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sun } from 'lucide-react';

interface SPFProduct {
  name: string;
  spf: number;
  price: number;
  features: string[];
  image: string;
}

const spfProducts: SPFProduct[] = [
  {
    name: 'SPF 50+ Sunscreen',
    spf: 50,
    price: 25,
    features: ['PA++++', 'No white cast', 'Water resistant', 'Lightweight'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop'
  },
  {
    name: 'SPF 30 Tone-Up Cream',
    spf: 30,
    price: 28,
    features: ['PA+++', 'Pink tint', 'Brightening', 'Makeup base'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop'
  }
];

export const SPFComparer = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sun className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare SPF Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect sunscreen for your skin type and daily routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {spfProducts.map((product, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 hover:shadow-xl cursor-pointer ${
                selectedProduct === index ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
              onClick={() => setSelectedProduct(index)}
            >
              <CardContent className="p-6">
                <div className="aspect-square bg-secondary/30 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {product.name}
                    </h3>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      SPF {product.spf}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      ${product.price}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  variant={selectedProduct === index ? "default" : "outline"}
                >
                  {selectedProduct === index ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProduct !== null && (
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Great choice! {spfProducts[selectedProduct].name} is perfect for daily protection.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Add to Cart
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};