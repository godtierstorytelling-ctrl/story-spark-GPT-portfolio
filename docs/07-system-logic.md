# Story Spark System Logic

This document explains the core system behaviors that govern how Story Spark functions behind the scenes. These behaviors include routing rules, redirect logic, upsell triggers, and state transitions. Together, they ensure that every user interaction is predictable, guided, and aligned with Story Spark’s storytelling purpose.

The logic described here reflects how a production-ready GPT application would be structured using modular, testable architecture.

---

# 🧠 Overview of System Logic Components

Story Spark uses four key system logic files located in the `/src/system/` directory:

router.js
state-manager.js
redirect-logic.js
upsell-logic.js


Each file has a single responsibility.  
Together, they form the backbone of the Story Spark experience.

---

# 🔀 1. Router Logic (`router.js`)

The router determines **which module comes next** based on:

- current module  
- state  
- optional module overrides (`result.nextModule`)  

This creates a controlled, linear flow that follows the core sequence:

Idea Spark → World Seed → Character Forge → Plot Skeleton → Wordsmith Lab → Complete


### Why a Router?

- Enforces predictable progression  
- Keeps modules independent  
- Allows branching or alternate flows in the future  
- Mimics real-world state-machine behavior  
- Prevents spaghetti logic across modules  

### Example routing decision:

```text
Current module: "world-seed"
Router returns: "character-forge"

```
If a module ever explicitly sets result.nextModule, that value overrides the router’s default logic.
This makes the system extensible and future-proof.

---

# 🧱 2. State Manager (`state-manager.js`)

The state manager maintains all session-related information:

- `currentModule`  
- `history` of interactions  
- `metadata` (for future uses)

### Why centralized state?

- Predictability  
- Simple debugging  
- Easy expansion  
- Avoids mismatched variable passing  
- Supports future persistence (Supabase)

Each call updates the state by:

1. Changing the active module  
2. Adding the user-message → module-response pair to `history`  
3. Preserving metadata across modules

### Example state snapshot:

```json
{
  "currentModule": "plot-skeleton",
  "history": [
    { "module": "idea-spark", "input": "...", "output": "..." },
    { "module": "world-seed", "input": "...", "output": "..." }
  ],
  "metadata": {}
}

```

---

# 🔒 3. Redirect Logic (`redirect-logic.js`)

Redirect logic ensures Story Spark stays focused on **storytelling** by intercepting:

- business questions  
- legal issues  
- mental health topics  
- coding/programming  
- finance  
- anything outside the narrative domain  

### How redirect logic works

1. The user enters a message  
2. The system checks if it contains off-topic or disallowed content  
3. If yes → Story Spark returns a **redirect message** and does *not* pass the input to the module  
4. If no → the input continues into the active module

### Redirect flow diagram:

User Input
↓
Redirect Logic Check?
│
├── Yes → respond with redirect message, halt module
↓
└── No → pass input to current module


Redirect messages rotate through a set of variations to keep the experience warm and conversational.

### Why this matters

- Keeps interactions on mission  
- Protects the GPT system from drifting  
- Reflects real-world safety and domain guardrails  
- Ensures every module receives valid inputs  

---

# 🌟 4. Upsell Logic (`upsell-logic.js`)

Upsell logic provides gentle, non-intrusive suggestions when the user expresses interest in advanced features found in the **Story Engine GPT**.

### Trigger phrases include:

- “advanced outline”  
- “custom structure”  
- “detailed beat sheet”  
- “premium tools”  
- “pro version”  

### How upsell logic works

1. The module processes input normally  
2. Story Spark checks if the user’s request matches an upsell trigger  
3. If yes → an optional upsell note is appended to the module’s output  
4. The upsell message is always **optional** and never blocks progression

### Example upsell message:

FYI — the Story Engine GPT can autofill advanced frameworks and export full beat sheets when you're ready to go deeper!

### Why this matters

- Creates a natural upgrade path  
- Mirrors standard SaaS “free → pro” systems  
- Keeps writers in flow without interruption  
- Guides users toward the larger Story Engine ecosystem  


---

# 🔗 5. The Interaction Pipeline

Every user message follows a consistent internal sequence, ensuring stability and predictability across the entire Story Spark system.

The complete interaction pipeline looks like this:

User Input
↓
Redirect Logic
↓
Router → Determines Current Module
↓
Module Logic (Idea Spark, World Seed, etc.)
↓
Upsell Logic
↓
State Updates
↓
Formatted Output to User


### Why this matters

- Creates a stable user flow  
- Isolates system responsibilities  
- Mirrors real-world GPT orchestration patterns  
- Keeps modules simple and focused  
- Enables future integrations (API, Supabase, Next.js)

Each step can evolve independently as Story Spark grows into a full web application.

---

# 🔮 6. Future Enhancements to System Logic

As Story Spark evolves, system logic will expand to support a full SaaS application. Planned enhancements include:

### **Session Persistence**
- Store full story progress  
- Sync across browser sessions  
- Save multiple projects  
- Powered by Supabase or Vercel KV  

### **Branching Pathways**
- Genre-specific flows  
- Advanced “pro mode”  
- Ability to revisit earlier modules  
- Conditional module unlocks  

### **Telemetry**
- Track module usage  
- Identify friction points  
- Improve GPT prompts over time  

### **Middleware**
- Input preprocessing  
- Output formatting  
- Sanitization  
- Caching  

### **Rate Limiting**
- Protects the system at scale  
- Required for any production API  

### **TypeScript Migration**
- Strong typing  
- Predictable interfaces  
- Easier long-term maintenance  

---

# 🏁 Summary

The system logic layer ensures Story Spark behaves like a modular, production-quality application:

- **Router** → controls flow  
- **State manager** → tracks session data  
- **Redirect logic** → enforces boundaries  
- **Upsell logic** → enhances product strategy  

Together, these components form the internal engine that keeps Story Spark predictable, extensible, and ready for a full Next.js + Supabase implementation.
