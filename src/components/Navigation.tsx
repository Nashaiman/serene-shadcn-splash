
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const Navigation = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <span className="text-xl font-bold text-gray-800">Software</span>
        <span className="text-sm text-gray-500 mt-1">PRODUCT FINDER</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Products</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Companies</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-4 h-3" />
          <span>English</span>
        </div>
        
        <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
          Register Software Product
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <span className="text-sm font-medium">Software Product Finder</span>
              </div>
              <DialogTitle className="text-2xl font-bold text-gray-900">Sign in</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Enter your username or email address</Label>
                <Input 
                  id="email" 
                  placeholder="Username or email address" 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Enter your Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter company name" 
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password</a>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                Sign in
              </Button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a>
              </p>

              <div className="flex space-x-2 pt-4">
                <Button variant="outline" className="flex-1 py-3">
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-4 h-4 mr-2" />
                  Sign in with Google
                </Button>
                <Button variant="outline" className="flex-1 py-3">
                  <div className="w-4 h-4 mr-2 bg-blue-600"></div>
                  Sign in with Microsoft
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navigation;
