# Life Admin App – Data Flow Diagram (DFD)

This document describes how data flows inside the Life Admin App.

---

## 🧠 DFD Level 0 (Context Diagram)

User
|
v
Life Admin App
|
v
Local Storage


---

## 🧩 DFD Level 1

User Actions
|
v
UI Components (React)
|
v
Application Logic (State Hooks)
|
v
Local Storage
|
v
Updated UI


---

## 📘 Explanation

1. User performs actions (add task, update task, navigate).
2. UI components capture input.
3. Application logic updates state.
4. Updated data is stored in LocalStorage.
5. UI re-renders with updated data.

---

## 🚀 Future DFD (Round-2)

User
|
v
Frontend (React)
|
v
Backend API
|
v
Database
|
v
Response to UI


This allows secure storage, multi-user access, and scalability.
