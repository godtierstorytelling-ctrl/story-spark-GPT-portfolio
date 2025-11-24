// idea-spark.js

export function ideaSpark(userInput, state) {
  if (!userInput) {
    return {
      error: false,
      message: "Tell me your raw story idea in 2–3 sentences.",
      nextModule: "idea-spark"
    };
  }

  const outputs = {
    logline: generate("logline", userInput),
    blurb: generate("blurb", userInput),
    minimalist: generate("minimalist", userInput)
  };

  return {
    module: "Idea Spark",
    outputs,
    next: "Ready to build your world?"
  };
}

// Placeholder generator
function generate(type, text) {
  return `[${type.toUpperCase()} GENERATED FROM INPUT]`;
}

