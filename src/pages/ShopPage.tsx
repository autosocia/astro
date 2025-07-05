import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search, Heart, Eye } from 'lucide-react';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gemstones', name: 'Gemstones' },
    { id: 'rudraksha', name: 'Rudraksha' },
    { id: 'yantras', name: 'Yantras' },
    { id: 'books', name: 'Books' }
  ];

  return (
    <div className="w-full max-w-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Spiritual Store
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic gemstones, rudraksha, yantras, and spiritual books for your cosmic journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-cosmic text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                />
              </div>
              <button className="flex items-center space-x-2 bg-gradient-cosmic text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({cartItems.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Placeholder */}
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-violet-100 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Catalog</h2>
          <p className="text-gray-600 text-lg mb-6">
            Connect to product database to display authentic gemstones, rudraksha, yantras, and spiritual books
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Product {item}</h3>
                <p className="text-gray-600 text-sm">Product details will be loaded from database</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ShopPage;