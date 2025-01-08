import React from 'react';
import { ChefHat, Clock, Search, Star } from 'lucide-react';

// Main component for the KitchenWeb homepage
const Homepage = () => {
  // Featured recipes data - in a real app, this would come from an API
  const featuredRecipes = [
    {
      title: "Ratatouille Provençale",
      time: "45 min",
      rating: 4.8,
      difficulty: "Moyenne",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Coq au Vin",
      time: "90 min",
      rating: 4.9,
      difficulty: "Difficile",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Crème Brûlée",
      time: "30 min",
      rating: 4.7,
      difficulty: "Facile",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <header className="bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              Découvrez la Cuisine Française Traditionnelle
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Des recettes authentiques, transmises de génération en génération
            </p>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Rechercher une recette..."
                className="w-full px-6 py-3 rounded-full border-2 border-green-200 focus:outline-none focus:border-green-400 pl-12"
              />
              <Search className="absolute left-4 top-3.5 text-green-400" size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Recipes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Recettes à la Une
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-green-600">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="mr-1" fill="currentColor" />
                      {recipe.rating}
                    </div>
                    <div className="flex items-center">
                      <ChefHat size={16} className="mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-green-800 mb-12 text-center">
            Explorez nos Catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Entrées', 'Plats', 'Desserts', 'Boissons'].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-medium text-green-700">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;