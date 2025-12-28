# API Handling Documentation



## 📌 Overview

This document explains how **API calls are handled** in the Task
Management Application.\
The project uses APIs as a **fallback data source** when localStorage
does not contain task data.

------------------------------------------------------------------------

## 🌐 API Strategy

-   Primary data source: `localStorage`
-   Secondary data source: External REST API
-   API used only when local data is unavailable
-   Data fetched once and cached locally

------------------------------------------------------------------------

## 🔗 API Endpoint Used

    https://jsonplaceholder.typicode.com/todos?_limit=10

-   Provides mock task data
-   Used for testing and demo purposes

------------------------------------------------------------------------

## 🧠 API Handling Location

API calls are managed inside:

    src/pages/ViewTask.jsx

This keeps API logic close to where data is displayed.

------------------------------------------------------------------------

## 🔄 API Data Fetch Flow

    Component Mount (useEffect)
       ↓
    Check localStorage
       ↓
    Tasks exist?
       ├─ Yes → Load local data
       └─ No  → Call API
                    ↓
               Fetch response
                    ↓
               Convert to JSON
                    ↓
               Format data
                    ↓
               Save to localStorage
                    ↓
               Update state
                    ↓
               UI Render

------------------------------------------------------------------------

## 📋 API Data Formatting

Fetched API data is transformed into application-compatible format:

-   `id`
-   `title`
-   `description`
-   `completed`
-   `date`
-   `time`

This ensures consistency with locally created tasks.

------------------------------------------------------------------------

## ⏳ Loading State Handling

State variables: - `loading` - `error`

Flow: 1. `loading` set to true before API call 2. UI shows loading
indicator 3. On success → loading false 4. On error → error state
updated

------------------------------------------------------------------------

## ❌ Error Handling

-   Network errors caught using `try-catch`
-   Invalid responses handled using response status checks
-   Error message displayed in UI

------------------------------------------------------------------------

## 🧪 API Call Example Flow

    fetch(url)
       ↓
    Check response.ok
       ↓
    Parse JSON
       ↓
    Update state
       ↓
    Save to localStorage

------------------------------------------------------------------------

## 🛡️ Best Practices Followed

-   API fallback pattern
-   Minimal API calls
-   Error handling implemented
-   Loading indicators for better UX
-   Data normalization before usage

------------------------------------------------------------------------

## 🎤 Interview Explanation (Short)

> "API handling is implemented using Fetch API inside useEffect. The
> application first checks localStorage and only calls the API if local
> data is missing. Fetched data is formatted and cached locally to
> reduce repeated API calls."

------------------------------------------------------------------------

## 📌 Conclusion

The API handling approach ensures: - Efficient network usage - Smooth
user experience - Clean separation of concerns - Scalable data-fetching
logic

------------------------------------------------------------------------

This API handling design is **production-ready** and
**interview-friendly**.
