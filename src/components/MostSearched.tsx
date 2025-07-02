
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Trifork Transport Refund",
    company: "Trifork",
    category: "Transport",
    rating: 4.5,
    description: "The Transport Refund System allows users to submit and receive reimbursement for eligible business travel or transportation during official duties...",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center"
  },
  {
    name: "Sitecore Experience Platform",
    company: "Sitecore",
    category: "CMS",
    rating: 4.8,
    description: "A leading Digital Experience Platform (DXP) for web content management, omnichannel marketing automation, and customer experience optimization...",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=80&h=80&fit=crop&crop=center"
  },
  {
    name: "SiteImprove",
    company: "SiteImprove",
    category: "Analytics",
    rating: 4.6,
    description: "A cloud-based SaaS suite for website governance and optimization. Featuring tools for SEO, accessibility, and performance optimization...",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center"
  },
  {
    name: "Princh",
    company: "Princh",
    category: "Printing",
    rating: 4.4,
    description: "Princh is a cloud-based print, copy, scan & pay platform among users/ready mobile, web or app-based through library. It helps to provide accounting...",
    logo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=80&h=80&fit=crop&crop=center"
  }
];

const MostSearched = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Most Searched <span className="text-purple-600">Products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={product.logo} 
                    alt={product.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{product.company}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit bg-orange-100 text-orange-700">
                  {product.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700 p-0">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSearched;
