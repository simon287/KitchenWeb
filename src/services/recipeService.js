// Service pour gérer les appels API liés aux recettes

/**
 * Recherche des recettes selon les critères donnés
 * @param {string} query - Terme de recherche
 * @param {Object} filters - Filtres optionnels (catégorie, temps de préparation, etc.)
 * @returns {Promise} Résultats de la recherche
 */
export const searchRecipes = async (query, filters = {}) => {
  try {
    // À remplacer par votre endpoint API
    const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(query)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters)
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la recherche');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la recherche de recettes:', error);
    throw error;
  }
};

/**
 * Récupère les détails d'une recette
 * @param {string|number} recipeId - Identifiant de la recette
 * @returns {Promise} Détails de la recette
 */
export const getRecipeDetails = async (recipeId) => {
  try {
    const response = await fetch(`/api/recipes/${recipeId}`);
    
    if (!response.ok) {
      throw new Error('Recette non trouvée');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des détails:', error);
    throw error;
  }
};

/**
 * Synchronise les favoris avec le serveur (si l'utilisateur est connecté)
 * @param {Object} favorites - Objet contenant les listes de favoris
 * @returns {Promise}
 */
export const syncFavorites = async (favorites) => {
  try {
    const response = await fetch('/api/favorites/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favorites)
    });
    
    if (!response.ok) {
      throw new Error('Erreur de synchronisation');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la synchronisation des favoris:', error);
    throw error;
  }
};
