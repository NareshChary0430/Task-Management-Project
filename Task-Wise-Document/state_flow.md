📌 Overview

This document explains how state flows through the application, how data is created, updated, stored, and rendered in the UI.

The project uses local component state and browser localStorage for data persistence, with API fallback where required.

🧠 State Management Strategy

React Hooks (useState, useEffect)

State is managed at page level

Data persistence via localStorage

Reusable components receive data via props

🗂️ Types of State Used
State Type	Description
Form State	Stores input values while adding/editing tasks
Task List State	Stores array of all tasks
UI State	Loading, error, and conditional rendering
Persistent State	Stored in localStorage
🔄 Overall State Flow Diagram
User Action
   ↓
Event Handler (onClick / onSubmit)
   ↓
useState Update
   ↓
LocalStorage / API Sync
   ↓
Component Re-render
   ↓
Updated UI

🏠 Home Page State Flow

Purpose: Display static UI

No dynamic state

Only UI rendering

Home.jsx
   ↓
Static Content Render

➕ Add Task State Flow (AddTask.jsx)
State Variables

title

description

date

time

tasks

Flow
User types in form
   ↓
onChange event
   ↓
Form State updated (useState)
   ↓
Form Submit
   ↓
New Task Object Created
   ↓
Tasks State Updated
   ↓
Saved to localStorage
   ↓
Redirect to ViewTask

✏️ Edit Task State Flow (EditTask.jsx)
State Variables

task

updatedFields

Flow
Component Mount
   ↓
Fetch task by ID
   ↓
Set form state
   ↓
User edits fields
   ↓
State updated
   ↓
Submit form
   ↓
Task updated in tasks array
   ↓
localStorage updated
   ↓
UI re-render

📋 View Task State Flow (ViewTask.jsx)
State Variables

tasks

loading

error

Flow
Component Mount (useEffect)
   ↓
Check localStorage
   ↓
Tasks found?
   ├─ Yes → Load tasks
   └─ No  → Fetch from API
                ↓
           Format API data
                ↓
           Update tasks state
                ↓
           Save to localStorage
   ↓
Render TaskCard components

🧩 TaskCard State Interaction
Props Received

task

onDelete

onToggle

onEdit

Flow
User clicks button
   ↓
Callback function triggered
   ↓
Parent state updated
   ↓
localStorage updated
   ↓
Re-render TaskCard

📝 TaskForm State Flow
Controlled Inputs
Input Field
   ↓
onChange
   ↓
useState
   ↓
Value updated

On Submit
Form Submit
   ↓
Prevent Default
   ↓
Validate Data
   ↓
Pass data to parent

🗑️ Delete Task State Flow
Delete Button Click
   ↓
Task ID received
   ↓
Filter tasks array
   ↓
Update state
   ↓
Update localStorage
   ↓
UI refresh

🔁 Toggle Task Status Flow
Checkbox / Button Click
   ↓
Task ID matched
   ↓
completed status toggled
   ↓
Tasks state updated
   ↓
localStorage updated
   ↓
UI updated

💾 Data Persistence Flow
State Change
   ↓
localStorage.setItem()
   ↓
Page Refresh
   ↓
useEffect()
   ↓
localStorage.getItem()
   ↓
State Rehydrated