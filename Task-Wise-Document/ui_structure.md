<!-- UI Folder Structure -->

src/
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── AddTask.jsx
│   ├── EditTask.jsx
│   ├── ViewTask.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

<!-- 🧩 Components Layer (src/components) -->

Reusable UI components used across multiple pages.

🔹 Navbar.jsx

Displays navigation menu

Visible on all pages

Contains route links:

Home

Add Task

View Tasks

About

🔹 Footer.jsx

Displays footer information

Common across all pages

Placed at the bottom of the layout

🔹 TaskCard.jsx

Displays individual task information

Shows:

Title

Description

Date & Time

Completion status

Includes actions:

Edit

Delete

Toggle Complete

🔹 TaskForm.jsx

Reusable form component

Used in:

AddTask page

EditTask page

Handles:

Form inputs

Submit events

Validation logic

📄 Pages Layer (src/pages)

Each file represents a full page/screen.

🏠 Home.jsx

Landing page of the application

Shows project introduction and overview

➕ AddTask.jsx

Page to add new tasks

Uses TaskForm component

Saves task data to local storage or API

✏️ EditTask.jsx

Page to update existing tasks

Fetches task by ID

Reuses TaskForm for editing

📋 ViewTask.jsx

Displays all tasks

Fetches data from:

LocalStorage (primary)

API (fallback)

Renders tasks using TaskCard

ℹ️ About.jsx

Provides information about the project

Explains features and technologies used

❌ NotFound.jsx

404 error page

Displayed for invalid routes

🔁 Routing & Layout (App.jsx)

Manages client-side routing using react-router-dom

Maintains consistent layout:

Navbar at the top

Page content in the middle

Footer at the bottom

🎨 Styling Structure
App.css

Application-level styling

Layout-related styles

index.css

Global styles

CSS reset

Common utility styles

🚀 Application Entry Point (main.jsx)

Bootstraps the React application

Wraps the app with:

BrowserRouter

React.StrictMode (if enabled)

🔄 UI Data Flow
User Interaction
   ↓
React Component
   ↓
State Update (useState)
   ↓
LocalStorage / API
   ↓
UI Re-render


<!-- project architecture diagram -->

                    ┌────────────────────┐
                    │     Browser        │
                    │  (User Interface)  │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │     main.jsx        │
                    │  ReactDOM.createRoot
                    │  BrowserRouter     │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │      App.jsx       │
                    │  - Routing Logic   │
                    │  - Layout Control  │
                    └─────────┬──────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌─────────────┐     ┌────────────────┐     ┌────────────────┐
│  Navbar.jsx │     │  Page Routing  │     │  Footer.jsx    │
│ (Component) │     │ react-router   │     │ (Component)   │
└─────────────┘     └────────────────┘     └────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │        Pages             │
                └─────────┬────────────────┘
                          │
        ┌─────────────────┼────────────────────────────┐
        ▼                 ▼                            ▼
┌──────────────┐   ┌──────────────┐          ┌────────────────┐
│  Home.jsx    │   │ AddTask.jsx  │          │ ViewTask.jsx   │
└──────────────┘   └──────────────┘          └────────────────┘
                          │                            │
                          ▼                            ▼
                ┌────────────────┐          ┌────────────────┐
                │  TaskForm.jsx  │          │  TaskCard.jsx  │
                │ (Reusable UI) │          │ (Reusable UI)  │
                └────────────────┘          └────────────────┘
                          │                            │
                          └──────────────┬─────────────┘
                                         ▼
                               ┌─────────────────┐
                               │   Data Layer    │
                               │ LocalStorage /  │
                               │ External API    │
                               └─────────────────┘
