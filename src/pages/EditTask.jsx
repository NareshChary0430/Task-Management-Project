import { useParams, useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'

const EditTask = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const task = tasks.find(t => t.id == id)

  const updateTask = (updated) => {
    const updatedTasks = tasks.map(t =>
      t.id == id ? { ...t, ...updated } : t
    )
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    navigate('/')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <TaskForm onSubmit={updateTask} initialData={task} />
    </div>
  )
}

export default EditTask
