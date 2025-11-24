// index.js (hybrid pseudocode)
// Entry point for the Story Spark conversational prototype.
// Routes user input into the correct module based on system state.

import { ideaSpark } from "./modules/idea-spark.js";
import { worldSeed } from "./modules/world-seed.js";
import { characterForge } from "./modules/character-forge.js";
import { plotSkeleton } from "./modules/plot-skeleton.js";
import { wordsmithLab } from "./modules/wordsmith-lab.js";
import { applyRedirectRules } from "./system/redirect-logic.js";
import { applyUpsellLogic } from "./system/upsell-logic.js";
import { getNextModule } from "./system/router.js";

// State object tracking where the user is in the flow
let state = {
  currentModule: "idea-spark",
  history: []
};

// Main handler (simulates incoming user messages)
export function handleUserInput(userInput) {
  // Apply redirect rules for off-topic requests
  const redirectResponse = applyRedirectRules(userInput, state);
  if (redirectResponse) return redirectResponse;

  // Route to the correct module
  const moduleName = state.currentModule;
  let result;

  switch (moduleName) {
    case "idea-spark":
      result = ideaSpark(userInput, state);
      break;

    case "world-seed":
      result = worldSeed(userInput, state);
      break;

    case "character-forge":
      result = characterForge(userInput, state);
      break;

    case "plot-skeleton":
      result = plotSkeleton(userInput, state);
      break;

    case "wordsmith-lab":
      result = wordsmithLab(userInput, state);
      break;

    default:
      result = { error: true, message: "Unknown module state." };
  }

  // Apply upsell logic (gentle reminders)
  result.upsell = applyUpsellLogic(moduleName, userInput);

  // Move the system forward
  state.currentModule = getNextModule(moduleName, state, result);

  // Save history
  state.history.push({ module: moduleName, input: userInput, output: result });

  return result;
}
