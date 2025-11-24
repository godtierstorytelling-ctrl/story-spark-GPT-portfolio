# Story Spark Pseudocode Overview

This document provides a clear, high-level explanation of the pseudocode included in the `src/` directory of this repository. The code samples included here are not full implementations—they are structured, language-friendly pseudocode designed to demonstrate system architecture, module flow, routing logic, and feature intent for the Story Spark GPT prototype.

This documentation mirrors how a full Stack/AI/Conversational Engineer would outline an MVP before writing the production-ready application.

---

## 📌 Purpose of the Pseudocode

The pseudocode in this repo serves three main goals:

1. **Demonstrate modular system design**  
   Each Story Spark module (Idea Spark, World Seed, Character Forge, Plot Skeleton, Wordsmith Lab) is represented as a separate file with its own logic and output structure.

2. **Showcase reasoning about full-stack architecture**  
   The system includes:
   - a router  
   - redirect logic  
   - upsell prompts  
   - a state manager  
   - a central entry point  

   This reflects how a real-world Next.js or Node application would be structured.

3. **Provide a blueprint for future development**  
   The pseudocode is written in hybrid JavaScript style so it can evolve naturally into a working codebase as Story Spark transitions into a web application.

---

## 📁 Structure of the `/src` Directory

src/
index.js
modules/
idea-spark.js
world-seed.js
character-forge.js
plot-skeleton.js
wordsmith-lab.js
system/
router.js
state-manager.js
redirect-logic.js
upsell-logic.js


Below is a summary of each component.

---

# 🌱 Modules Overview

Each module represents a major step in the Story Spark workflow:

---

## 1. `idea-spark.js`
**Purpose:**  
Transforms the user’s raw idea into three structured formats:
- Logline  
- Blurb  
- Minimalist one-liner  

**Key Behavior:**  
- Validates input  
- Uses generic “generate” helper for transformations  
- Hands control to the World Seed module  

---

## 2. `world-seed.js`
**Purpose:**  
Builds a snapshot of the story world including:
- Setting  
- Signature feature  
- Cultural/political tension  
- Tonal flavor  

**Key Behavior:**  
- Asks clarifying questions if needed  
- Creates a generalized world template  
- Moves to Character Forge  

---

## 3. `character-forge.js`
**Purpose:**  
Creates core character skeletons:
- Protagonist  
- Antagonist  

**Key Behavior:**  
- Requests missing character info  
- Outputs placeholders for character sheets  
- Advances to Plot Skeleton  

---

## 4. `plot-skeleton.js`
**Purpose:**  
Generates a structural outline using:
- 3-Act  
- 4-Act  
- 5-Act  
- or the 8 Adventures framework  

**Key Behavior:**  
- Ensures user selected a framework  
- Produces a beat list  
- Hands off to Wordsmith Lab  

---

## 5. `wordsmith-lab.js`
**Purpose:**  
Writes short creative passages in multiple styles:
- Noir  
- Fairytale  
- Thriller  
- Drama  

**Key Behavior:**  
- Requests preferred tone  
- Outputs sample paragraphs  
- Marks story as “complete”  

---

# 🔧 System Logic Overview

The system logic mimics the structure of a conversational application.

---

## `router.js`
Determines which module comes next based on:
- Current module  
- State  
- Output flags  

Implements the flow:

Idea Spark → World Seed → Character Forge → Plot Skeleton → Wordsmith Lab


---

## `state-manager.js`
Handles:
- Module position  
- Conversation history  
- Optional metadata  

Centralized state operations allow the prototype to remain predictable and modular.

---

## `redirect-logic.js`
Intercepts requests unrelated to storytelling.

If the user asks about:
- business  
- finance  
- legal topics  
- therapy  
- coding  
- or anything outside storytelling

…it responds with gentle redirect messages to keep the experience on track.

---

## `upsell-logic.js`
When the user expresses interest in:
- advanced features  
- deep frameworks  
- custom structures  
- high-detail beat sheets  

…the system adds a subtle nudge toward the Story Engine GPT.

Upsells never block or interrupt the creative flow.

---

# 🚦 `index.js` — The Entry Point

This file simulates how the full Story Spark app would orchestrate:
- Redirect rules  
- Module routing  
- State transitions  
- Upsell logic  
- Response formatting  

It represents how a real Next.js API route or message handler might be structured.

---

# 🧭 Summary

This pseudocode:

- Reflects actual engineering patterns  
- Shows real-world planning for modular architecture  
- Mirrors the logic of the GPT prototype  
- Provides a foundation for the future coded version of Story Spark  

It is intentionally written in hybrid JavaScript + English comments to maximize readability and technical clarity.

As the Story Spark project evolves into a fully coded application, these pseudocode modules can be directly replaced with production code while retaining the same file structure and system architecture.

