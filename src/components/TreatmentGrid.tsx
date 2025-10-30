import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Sparkles, Shield, Sun } from 'lucide-react';

interface TreatmentCategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  productCount: number;
  image: string;
  color: string;
}

const treatments: TreatmentCategory[] = [
  {
    name: 'Cleansers',
    description: 'Gentle cleansing for fresh, clean skin',
    icon: <Droplets className="h-6 w-6" />,
    productCount: 8,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
    color: 'from-blue-50 to-blue-100'
  },
  {
    name: 'Serums & Essences',
    description: 'Concentrated treatments for targeted care',
    icon: <Sparkles className="h-6 w-6" />,
    productCount: 12,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop',
    color: 'from-purple-50 to-purple-100'
  },
  {
    name: 'Moisturizers',
    description: 'Lock in hydration for plump skin',
    icon: <Shield className="h-6 w-6" />,
    productCount: 10,
    image: 'https://images.unsplash.com/photo-1556228852-80a5e2c3e9e1?w=400&h=300&fit=crop',
    color: 'from-pink-50 to-pink-100'
  },
  {
    name: 'SPF Protection',
    description: 'Essential sun protection daily',
    icon: <Sun className="h-6 w-6" />,
    productCount: 6,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop',
    color: 'from-yellow-50 to-yellow-100'
  }
];

export const TreatmentGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Treatment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect products for your skincare needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={treatment.image} 
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    {treatment.icon}
                    <span className="ml-2 text-sm font-medium">
                      {treatment.productCount} Products
                    </span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {treatment.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {treatment.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};