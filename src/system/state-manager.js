// state-manager.js (hybrid pseudocode)
// Minimal state manager for Story Spark's module-based conversation flow.

export const initialState = {
  currentModule: "idea-spark",
  history: [],
  metadata: {} // optional space for future expansion
};

export function updateState(state, updates) {
  return { ...state, ...updates };
}

export function pushHistory(state, event) {
  return {
    ...state,
    history: [...state.history, event]
  };
}
