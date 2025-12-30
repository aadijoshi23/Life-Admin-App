# 🔄 Life Admin App – System Flow & Architecture

This document explains the technical flow and internal working of the **Life Admin App** prototype.

---

## 🧠 High-Level Flow

1. User opens the web application
2. React application loads via browser
3. User interacts with UI (tasks, planning, navigation)
4. State is managed using React Hooks
5. Data is stored and retrieved from browser LocalStorage
6. UI updates instantly based on state changes

---

## 🧩 Component-Level Flow

User  
↓  
React UI Components  
↓  
State Management (useState / useEffect)  
↓  
LocalStorage (persistent data)  
↓  
Re-render updated UI  

---

## 🗂 Data Flow Diagram (DFD – Level 1)

User Actions  
→ UI Components  
→ Application Logic  
→ LocalStorage  
→ UI Update  

There is **no backend** in the current prototype to keep the system simple and fast.

---

## ⚙️ Technical Architecture

- **Frontend:** React + TypeScript
- **Routing:** React Router (HashRouter)
- **Styling:** Tailwind CSS
- **State:** React Hooks
- **Persistence:** Browser LocalStorage
- **Deployment:** GitHub Pages

---

## 🧠 Design Philosophy

- Minimal UI
- Fast response
- No unnecessary abstractions
- Beginner-friendly and scalable architecture

This flow ensures clarity, maintainability, and easy future expansion.
