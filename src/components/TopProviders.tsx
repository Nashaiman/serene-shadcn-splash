
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const providers = [
  {
    name: "Trifork",
    location: "København A, Denmark",
    verified: true,
    products: ["Trifork Health Platform", "Transport Refund system"],
    tags: ["RoOS", "BiPaaS"],
    rating: 4.5,
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop&crop=center"
  },
  {
    name: "KMD A/S",
    location: "Ballerup, Denmark",
    verified: true,
    products: ["BiPaaS", "Trifork Health Platform"],
    tags: ["RoOS", "BiPaaS"],
    rating: 4.3,
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=60&h=60&fit=crop&crop=center"
  },
  {
    name: "Netcompany",
    location: "København, Denmark",
    verified: true,
    products: ["BiPaaS", "Trifork Health Platform"],
    tags: ["RoOS", "BiPaaS"],
    rating: 4.6,
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center"
  },
  {
    name: "Visma",
    location: "København S, Denmark",
    verified: true,
    products: ["BiPaaS", "Trifork Health Platform"],
    tags: ["RoOS", "BiPaaS"],
    rating: 4.4,
    logo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=60&h=60&fit=crop&crop=center"
  }
];

const TopProviders = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-purple-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top <span className="text-purple-600">Product Providers</span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((provider, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={provider.logo} 
                      alt={provider.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                        {provider.verified && (
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{provider.location}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    {provider.products.map((product, idx) => (
                      <p key={idx} className="text-sm text-gray-700 mb-1">{product}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    <Badge className="text-xs bg-blue-100 text-blue-700">
                      Transport Refund system
                    </Badge>
                    <Badge className="text-xs bg-gray-100 text-gray-700">
                      9+
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(provider.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{provider.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
              <ChevronLeft size={16} />
            </Button>
            <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Unlock the Full Power of ISF</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Log in to ISF to follow your favorite software vendors, explore personalized AI-powered recommendations, and unlock a 
            smarter way to discover the right tech partners.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopProviders;
