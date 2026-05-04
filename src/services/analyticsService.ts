const COUNTER_ID = 0; // Replace with your Yandex Metrica counter ID

function ym(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.ym && COUNTER_ID !== 0) {
    window.ym(COUNTER_ID, 'reachGoal', event, params);
  }
}

export function trackRecipeView(recipeId: string, recipeName: string) {
  ym('recipe_view', { recipe_id: recipeId, recipe_name: recipeName });
}

export function trackRecipeCardClick(recipeId: string, recipeName: string) {
  ym('discovery_start', { recipe_id: recipeId, recipe_name: recipeName });
}

export function trackSearchPerformed(query: string) {
  ym('search_performed', { query });
}

export function trackFilterApplied(filterType: string, value: string | number | boolean) {
  ym('filter_applied', { filter_type: filterType, value });
}

export function trackFilterReset() {
  ym('filter_reset');
}
