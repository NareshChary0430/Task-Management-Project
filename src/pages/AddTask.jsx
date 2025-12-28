import TaskForm from '../components/TaskForm'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
  const navigate = useNavigate()

  const addTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push({ ...task, id: Date.now(), completed: false })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    navigate('/view')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add Task
      </h1>

      {/* CARD CONTAINER */}
      <div className="border rounded-md p-4 bg-white text-center">
        <TaskForm onSubmit={addTask} />
      </div>

    </div>
  )
}

export default AddTask
