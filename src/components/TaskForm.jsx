import { useState } from 'react'

const TaskForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [date, setDate] = useState(initialData?.date || '')
  const [time, setTime] = useState(initialData?.time || '')

  const submitHandler = (e) => {
    e.preventDefault()
    onSubmit({ title, description, date, time })
  }

  return (
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-4 py-2 rounded"
        required
      ></textarea>

<div>
        <label className="block text-sm mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        Save Task
      </button>
    </form>
  )
}

export default TaskForm
