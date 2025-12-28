import { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'

const ViewTask = () => {
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))

    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks)
    } else {
      fetchTasksFromAPI()
    }
  }, [])

  const fetchTasksFromAPI = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )

      if (!res.ok) throw new Error('Failed to fetch tasks')

      const data = await res.json()

      const formattedTasks = data.map(task => ({
        id: task.id,
        title: task.title,
        description: 'Fetched from API',
        completed: task.completed,
        date: new Date().toISOString().split('T')[0],
        time: '09:00'
      }))

      setTasks(formattedTasks)
      localStorage.setItem('tasks', JSON.stringify(formattedTasks))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id)
    setTasks(updated)
    localStorage.setItem('tasks', JSON.stringify(updated))
  }

  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )

    setTasks(updated)
    localStorage.setItem('tasks', JSON.stringify(updated))
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Tasks
        </h1>

        <span className="text-sm text-gray-500">
          Total: {filteredTasks.length}
        </span>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* STATUS */}
      {loading && <p className="text-blue-600 mb-4">Loading tasks...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* EMPTY STATE */}
      {!loading && filteredTasks.length === 0 && (
        <p className="text-gray-500">
          No matching tasks found.
        </p>
      )}

      {/* TASK GRID */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>

    </div>
  )
}

export default ViewTask
