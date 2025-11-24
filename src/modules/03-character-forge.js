// character-forge.js

export function characterForge(userInput, state) {
  if (!userInput) {
    return {
      message: "Tell me your protagonist’s name, age, role, want, fear, and stakes.",
      nextModule: "character-forge"
    };
  }

  return {
    module: "Character Forge",
    outputs: {
      protagonist: "[Generated Protagonist Sheet]",
      antagonist: "[Generated Antagonist Sheet]"
    },
    next: "Ready to sketch your plot?"
  };
}

