import { useState, useCallback } from 'react';
import { searchRecipes } from '../services/recipeService';

/**
 * Hook personnalisé pour gérer la recherche de recettes
 * @param {Object} options - Options de configuration
 * @returns {Object} Méthodes et état de recherche
 */
export const useRecipeSearch = (options = {}) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query, filters) => {
    setLoading(true);
    setError(null);
    
    try {
      const searchResults = await searchRecipes(query, filters);
      setResults(searchResults);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    loading,
    error,
    search,
    clearResults
  };
};
