
## Routing Analysis


## 📌 Overview

This document explains how **routing is implemented and managed** in the
Task Management Application using **React Router DOM**.\
Routing enables seamless navigation between pages without reloading the
browser.

------------------------------------------------------------------------

## 🔁 Routing Strategy

-   Client-side routing
-   Single Page Application (SPA)
-   Centralized route management in `App.jsx`
-   Common layout shared across routes

------------------------------------------------------------------------

## 📍 Route Configuration Location

All routes are defined inside:

    src/App.jsx

`BrowserRouter` is initialized in `main.jsx` and wraps the entire
application.

------------------------------------------------------------------------

## 🗺️ Route Map

  Path               Component      Description
  ------------------ -------------- --------------------------
  `/`                Home.jsx       Landing page
  `/add`        AddTask.jsx    Add new task
  `/edit/:id`   EditTask.jsx   Edit existing task
  `/view-task`       ViewTask.jsx   View all tasks
  `/about`           About.jsx      Project information
  `*`                NotFound.jsx   Invalid route / 404 page

------------------------------------------------------------------------

## 🧱 Layout Routing Structure

    BrowserRouter
       ↓
    App.jsx
       ├── Navbar (persistent)
       ├── Routes
       │     ├── Home
       │     ├── AddTask
       │     ├── EditTask
       │     ├── ViewTask
       │     └── About
       └── Footer (persistent)

Navbar and Footer remain **constant**, while only page content changes.

------------------------------------------------------------------------

## 🔄 Navigation Flow

    User clicks Link
       ↓
    React Router intercepts request
       ↓
    URL changes (without reload)
       ↓
    Matched route component rendered
       ↓
    UI updated

------------------------------------------------------------------------

## 🔗 Navigation Components Used

-   `BrowserRouter`
-   `Routes`
-   `Route`
-   `Link`
-   `useParams`
-   `useNavigate`

------------------------------------------------------------------------

## ✏️ Dynamic Routing (`EditTask`)

Dynamic routing is used to edit a specific task.

Example:

    /edit-task/5

Flow: 1. Task ID captured using `useParams()` 2. Task fetched from state
or localStorage 3. Data pre-filled in form 4. Updated task saved

------------------------------------------------------------------------

## ❌ 404 Handling

    <Route path="*" element={<NotFound />} />

-   Catches all unmatched routes
-   Improves user experience
-   Prevents blank pages

------------------------------------------------------------------------

## 🧠 Routing Best Practices Followed

-   Centralized routing
-   Clean and readable URLs
-   Reusable layout
-   Dynamic routes for data-based pages
-   Graceful error handling

------------------------------------------------------------------------

## 🎤 Interview Explanation (Short)

> "Routing is handled using React Router DOM. All routes are centralized
> in App.jsx, with a shared layout for Navbar and Footer. Dynamic
> routing is used for editing tasks, and a wildcard route handles 404
> pages."

------------------------------------------------------------------------

## 📌 Conclusion

The routing system provides: - Fast navigation - Clean URL management -
Scalable structure - Professional SPA behavior

------------------------------------------------------------------------

This routing architecture aligns with **industry best practices** and is
**interview-ready**.
