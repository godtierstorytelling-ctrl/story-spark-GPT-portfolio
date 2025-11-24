# Story Spark Module Flow

This document explains how the Story Spark system moves the user through its five guided story-development modules. It outlines the logic behind the flow, how transitions happen, and what each stage expects before handing control to the next.

The module flow behaves like a lightweight state machine:  
Each module accepts user input → generates structured output → updates state → triggers the next module.

---

# 🧭 High-Level Module Sequence

The core Story Spark workflow always follows this linear progression:

Idea Spark
↓
World Seed
↓
Character Forge
↓
Plot Skeleton
↓
Wordsmith Lab
↓
Complete


Each module has:
- an **input requirement**
- a **processing step**
- a **structured output**
- a **transition rule**

---

# 📌 Module-by-Module Flow Breakdown

## 1. **Idea Spark**
**Goal:** Distill a raw idea into three formats  
**Outputs:** Logline, Blurb, Minimalist One-Liner  
**Next:** World Seed  

**Transition Trigger:**  
User provides a short description (2–3 sentences) of their story idea.

---

## 2. **World Seed**
**Goal:** Build a foundational snapshot of the story world  
**Outputs:**  
- Setting  
- Signature feature  
- Cultural/political tension  
- Atmospheric flavor  

**Next:** Character Forge  

**Transition Trigger:**  
User describes the world, genre, or setting direction.

---

## 3. **Character Forge**
**Goal:** Create core character profiles  
**Outputs:**  
- Protagonist sheet  
- Antagonist sheet  

**Next:** Plot Skeleton  

**Transition Trigger:**  
User provides character traits, wants/fears, or role details.

---

## 4. **Plot Skeleton**
**Goal:** Generate beats using a chosen structure  
**Outputs:**  
- Plot framework (3-Act, 4-Act, 5-Act, or 8 Adventures)  
- 8–12 beat outline  

**Next:** Wordsmith Lab  

**Transition Trigger:**  
User selects a plot structure or references one in their input.

---

## 5. **Wordsmith Lab**
**Goal:** Produce short writing samples in multiple styles  
**Outputs:**  
- Noir paragraph  
- Fairytale paragraph  
- Thriller paragraph  
- Drama paragraph  

**Next:** Complete  

**Transition Trigger:**  
User chooses a tone OR any user input triggers default samples.

---

# 🔄 Visual Module Flow Diagram

This diagram reflects how the router and entry point collaborate to manage progression:

+------------------+
| Idea Spark |
+------------------+
|
v
+------------------+
| World Seed |
+------------------+
|
v
+------------------+
| Character Forge |
+------------------+
|
v
+------------------+
| Plot Skeleton |
+------------------+
|
v
+------------------+
| Wordsmith Lab |
+------------------+
|
v
+------------------+
| Complete |
+------------------+


---

# 🧠 How the Router Determines the Next Module

The `router.js` file controls progression.  
It uses both:

1. **Static sequence mapping**
2. **Module-provided hints (`next` or `nextModule` fields)**

Routing logic:

```text
"idea-spark"      → "world-seed"
"world-seed"      → "character-forge"
"character-forge" → "plot-skeleton"
"plot-skeleton"   → "wordsmith-lab"
"wordsmith-lab"   → "complete"

```
If a module ever explicitly sets `result.nextModule`, the system honors that instead—allowing for future branching or alternative flows.

---

# ♻️ Optional Module Loops (Future-Ready)

While Story Spark currently flows linearly, the architecture supports looping back to earlier modules, including:

- Rewriting the logline  
- Refining world details  
- Revisiting character sheets  
- Adjusting plot structure  

These loops can be added later by modifying the router mapping.

---

# 🔒 Redirect Logic in the Flow

Before any module receives input, Story Spark checks for off-topic content:

User Input
↓
Redirect Logic?
│
├── Yes → show redirect message, halt routing
↓
└── No → continue into active module


This ensures Story Spark remains strictly within the storytelling domain.

---

# 🌟 Upsell Logic in the Flow

After each module produces output, Story Spark checks whether the input suggests interest in advanced features.

If so, Story Spark adds:

module output

non-intrusive upgrade note (Story Engine GPT)


This logic never blocks module progression.

---

# 🏁 Summary

The module flow is:

- Linear  
- State-based  
- Modular  
- Predictable  
- Expandable  

It reflects how a true multi-step GPT application behaves, and is fully prepared for a future transition into:

- a web app  
- a mobile app  
- a multi-session workspace  
- a database-backed story-building platform  

Story Spark’s flow is simple by design — but architecturally robust enough for future branching, revisits, or alternate narrative pathways.
