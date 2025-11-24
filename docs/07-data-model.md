# Story Spark Data Model

This document outlines the planned data model for the future web-based version of Story Spark.  
While the current prototype runs entirely inside GPT, the long-term vision includes full persistence using **Supabase** (Postgres + Auth + Storage).

This schema is designed to support:

- multi-session story development  
- module-by-module progress  
- user accounts  
- version history  
- story metadata  
- future Story Engine integration  

It reflects how Story Spark will evolve into a production-ready application.

---

# 🧱 Data Entities Overview

Story Spark’s data model consists of five primary entities:

1. **Users**  
2. **Stories**  
3. **Story Modules**  
4. **Story Versions**  
5. **Metadata** (key-value expansion layer)

These entities are highly scalable and support future app requirements such as collaboration, branching, and export.

---

# 🔗 Entity Relationship Diagram (ASCII ERD)

```
+---------+ +-------------+ +----------------+
| users | 1 ∞ | stories | 1 ∞ | story_versions |
+---------+----------+-------------+-----------+----------------+
| |
| | 1
| | ∞
| +-----------------+
| | story_modules |
| +-----------------+
| |
| | 1
| | ∞
| +-----------------+
| | metadata |
| +-----------------+
```


This shows:  
- One user → many stories  
- One story → many modules  
- One story → many versions  
- Metadata is attachable to any story module or version

---

# 🧍 1. Users Table

**Purpose:** Authentication + ownership.

```sql
users
------
id              uuid (primary key)
email           text (unique)
username        text
created_at      timestamp

```

Supabase auth will manage:
- email/password  
- OAuth (optional)  

This enables a user to maintain multiple stories over time.

---

# 📘 2. Stories Table

**Purpose:** Top-level container for any single story project.

```sql
stories
-------
id                  uuid (primary key)
user_id             uuid (foreign key → users.id)
title               text
logline             text
genre               text
created_at          timestamp
updated_at          timestamp
is_complete         boolean
active_version_id   uuid (nullable)

```

Examples of what gets stored here:
- high-level metadata  
- user-facing fields  
- story title  
- logline from Idea Spark  
- chosen genre  

`active_version_id` point to the latest saved version.

---

# 🧩 3. Story Modules Table

**Purpose:** Store the output of each Story Spark module.

```sql

story_modules
-------------
id              uuid (primary key)
story_id        uuid (foreign key → stories.id)
module_name     text          -- e.g., idea-spark, world-seed, etc.
input_text      text
output_text     text
module_order    integer       -- 1 to 5
created_at      timestamp
updated_at      timestamp

```

Each row represents one module’s output.  
This allows modules to be revisited and rewritten later.

### Example row:

| module_name | output_text |
|-------------|-------------|
| idea-spark | {"logline": "...", "one_liner": "..."} |

---

# 📝 4. Story Versions Table

**Purpose:** Full snapshots of a story at any point in time.

```sql
story_versions
--------------
id              uuid (primary key)
story_id        uuid (foreign key → stories.id)
version_number  integer
full_snapshot   jsonb
created_at      timestamp

```


A `full_snapshot` contains:

```
{
"idea_spark": { ... },
"world_seed": { ... },
"character_forge": { ... },
"plot_skeleton": { ... },
"wordsmith_lab": { ... }
}
```

This supports:

- version history  
- “undo/redo”  
- exporting to Story Engine GPT  
- recovery if something breaks  

---

# 🔑 5. Metadata Table (Flexible KV Store)

**Purpose:** Extend Story Spark without schema changes.

```
metadata
--------
id              uuid (primary key)
parent_type     text        -- story, module, version
parent_id       uuid
key             text
value           text or jsonb
created_at      timestamp

```

Examples:

| parent | key | value |
|--------|------|--------|
| story | tone_selected | "noir" |
| module | warnings | ["user asked for off-topic content"] |
| version | genre_defaults | {...} |

This avoids schema bloat.

---

# 🔄 Data Flow Summary

A typical Story Spark session would generate the following sequence:

```
User → Story → 5 Story Modules → Version Snapshot → Optional Metadata
```

Or visually:

```
Create Story
↓
Populate modules (Idea Spark → Word Seed → ...)
↓
Generate version snapshot
↓
Save / revisit / export
```

This mirrors the GPT prototype’s modular experience.

---

# 🧠 How This Maps to the GPT Prototype

Even though the current system is GPT-based, the data model anticipates:

- persistent story sessions  
- returning to previous modules  
- editing outputs  
- exporting to other tools  
- generating alternate drafts  
- premium upsell integrations  

This design maintains fidelity to the current GPT workflow while future-proofing the system.

---

# 🚀 Future Expansion (Planned)

### Collaboration
Add tables for:

```
collaborators
permissions
story_comments
```

### Branching stories
Add:

```
story_branches
branch_parent_id
branch_label
```

### Analytics and Logging
Add optional log tables:

```
module_usage_logs
error_logs
ai_cost_tracking
```

---

# 🏁 Summary

This data model:

- aligns with modern full-stack practices  
- reflects how a real SaaS writing application would store data  
- models every stage of Story Spark’s 5-module workflow  
- is compatible with Supabase’s Postgres structure  
- prepares Story Spark for multi-session persistence  
- supports future team collaboration and branching  

Together, these tables form the backbone of the future Story Spark app.
