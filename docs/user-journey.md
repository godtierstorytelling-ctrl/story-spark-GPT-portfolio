# Story Spark User Journey

This document provides a step-by-step walkthrough of the Story Spark experience from the user’s perspective. It describes what the user sees, what they input, what the system returns, and how Story Spark guides them through the five-module workflow.

The journey reflects the current GPT prototype and forms the UX blueprint for the future web application.

---

# 🧭 High-Level User Flow

```
Landing → Idea Spark → World Seed → Character Forge → Plot Skeleton → Wordsmith Lab → Completion → (Optional) Upgrade to Story Engine
```

Each stage provides:
- clear prompts  
- structured outputs  
- confidence-building feedback  
- momentum into the next step  

Story Spark removes friction and keeps the writer emotionally supported as they build momentum.

---

# 🟢 1. Landing Experience (Entry Point)

### What the user sees
A warm introduction:

> “Welcome! Ready to turn your idea into a story?  
> Type a few sentences about your concept and I’ll walk you through it.”

### What the user does
They describe their idea in **1–3 sentences**.

### What Story Spark does
- Creates a new writing session  
- Routes the user to **Idea Spark**  
- Begins the structured workflow  

---

# ✨ 2. Idea Spark (Clarifying the Concept)

### User Action
User enters their raw idea.

### Story Spark Output
A structured set of three idea formats:

- **Logline** (plot-focused)
- **Blurb** (marketing-style)
- **One-Liner** (minimalist)

### UX Intent
Instant confidence boost.  
The user sees their messy idea transformed into clean, usable narrative formats.

### System Action
Route to **World Seed**.

---

# 🌍 3. World Seed (Planting the Setting)

### User Action
User describes the setting, genre, or world tone.

### Story Spark Output
A structured world snapshot:

- Setting summary  
- Central world tension  
- A signature element  
- Sensory/atmospheric flavor  

### UX Intent
The user feels like their world *came alive*.

### System Action
Route to **Character Forge**.

---

# 🧑‍🤝‍🧑 4. Character Forge (Defining Cast)

### User Action
User lists traits, roles, or ideas for protagonist/antagonist.

### Story Spark Output
Two character sheets:

- **Protagonist Sheet**
- **Antagonist Sheet**

Each includes:
- Wants  
- Fears  
- Strengths  
- Flaws  
- Stakes  
- Internal conflict  
- External conflict  

### UX Intent
Help the user fall in love with their characters.

### System Action
Route to **Plot Skeleton**.

---

# 📘 5. Plot Skeleton (Story Structure Blueprint)

### User Action
User selects a structure style OR Story Spark picks a default.

Choices include:
- 3-Act  
- 4-Act  
- 5-Act  
- 8-Sequence  

### Story Spark Output
A full beat outline (8–12 beats):

- Setup  
- Inciting Incident  
- First Turn  
- Midpoint  
- Crisis  
- Climax  
- Resolution  

### UX Intent
Transform ideas into a roadmap.  
The user now sees their story’s “bones.”

### System Action
Route to **Wordsmith Lab**.

---

# ✍️ 6. Wordsmith Lab (Writing Samples)

### User Action
User picks a tone or simply says “continue.”

### Story Spark Output
A short scene or paragraph written in 3–4 styles:

- Noir  
- Thriller  
- Fairytale  
- Literary Drama  

### UX Intent
Let the user *hear* their story’s voice and feel momentum.

### System Action
Set session to **Complete**.

---

# 🏁 7. Completion Screen

### Story Spark Output
A friendly send-off:

> “You now have a full story skeleton! Logline, world, characters, beats, and sample writing. Want to keep going?”

### User Options
- Start a new story  
- Revisit modules (future feature)  
- Continue refining (future feature)  
- Export to Story Engine GPT (upgrade path)  

---

# 🌟 Upgrade Moment → Story Engine GPT

If Story Spark detects interest in:

- deeper outlines  
- custom structures  
- advanced revision loops  
- chapter building  
- story bible creation  

…it gently suggests:

> “Want to go deeper? Story Engine GPT can expand this into full scenes, arcs, and a novel-ready outline.”

No pressure. No friction. Fully optional.  

---

# 🔩 Behind the Scenes (System View)

Here is the invisible UX pipeline:

```
User Input
↓
Redirect Logic (keeps user on topic)
↓
Router → Determines correct module
↓
Module Logic executes
↓
Upsell Logic checks for upgrade opportunities
↓
State Manager updates the session
↓
Formatted Output returned to user
```

This guarantees:
- predictable flow  
- clean module transitions  
- domain-focused interaction  
- controlled GPT behavior  

---

# 🧪 Example User Journey (End-to-End)

### 1. User enters:
> “A girl wakes up in a city where no one dreams anymore.”

### 2. Story Spark generates three idea formats  
(Logline, Blurb, One-Liner)

### 3. User describes the world  
(Story Spark builds the World Seed)

### 4. User lists 2–3 character traits  
(Story Spark returns fully structured sheets)

### 5. User picks 4-Act  
(Story Spark builds the Plot Skeleton)

### 6. User says:  
> “Can you write this in a darker tone?”

(Wordsmith Lab generates samples)

### 7. Story Spark suggests:
> “If you'd like a full scene or chapter, Story Engine GPT can help!”

The user leaves with:
- clarity  
- confidence  
- a full story skeleton  
- next steps  

---

# 🏁 Summary

The Story Spark user journey is designed to be:

- friendly  
- guided  
- confidence-building  
- structured  
- beginner-safe  
- pro-writer useful  
- expandable into deeper tools  

This journey document forms the UX blueprint for the future web application and ensures consistency across future engineering and design decisions.
