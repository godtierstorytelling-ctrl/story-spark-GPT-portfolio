// plot-skeleton.js

export function plotSkeleton(userInput, state) {
  const frameworks = ["3-act", "4-act", "5-act", "8-adventures"];

  if (!frameworks.some(f => userInput.toLowerCase().includes(f))) {
    return {
      message: "Choose a structure: 3-Act, 4-Act, Shakespeare’s 5-Act, or the 8 Adventures.",
      nextModule: "plot-skeleton"
    };
  }

  return {
    module: "Plot Skeleton",
    outputs: {
      structure: "[Structure Selected]",
      beats: "[8–12 Basic Beat Points]"
    },
    next: "Ready for the Wordsmith Lab?"
  };
}
