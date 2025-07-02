
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Danish Innovation with{" "}
                <span className="text-purple-600">Software Product Finder</span>
              </h1>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
                Get Started
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            The Software Products Finder is a free and public platform initiated by TEO to help users discover software and hardware solutions offered by Danish Independent 
            Software Vendors (ISVs). Our mission is to bring visibility to local software providers and create a centralized space for businesses, developers, and decision-makers to 
            connect with the right technology partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
