# Life Admin App – Database Schema Design

This document defines the planned database structure for Round-2.

---

## 🗂️ Proposed Tables

### 👤 Users

| Field | Type | Description |
|-------|------|------------|
| user_id | UUID | Primary Key |
| name | String | User full name |
| email | String | Unique email |
| password_hash | String | Encrypted password |

---

### 📝 Tasks

| Field | Type | Description |
|-------|------|------------|
| task_id | UUID | Primary Key |
| user_id | UUID | Foreign Key → Users |
| title | String | Task title |
| category | String | Documents / Bills / Health / Exams |
| status | String | pending / completed |
| due_date | Date | Deadline |

---

## 🔗 Relationships

- One User → Many Tasks
- Each Task belongs to one User

---

## 🚀 Future Expansion

- Add expense table
- Add reminders table
- Add notifications table

---

## 🧠 Summary

This schema allows:
- Secure multi-user access
- Organized task storage
- Easy future feature integration
