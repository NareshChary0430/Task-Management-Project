import { Link } from 'react-router-dom'

const TaskCard = ({ task, onDelete, onToggle }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className={`text-lg font-bold ${task.completed && 'line-through'}`}>
        {task.title}
      </h2>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        📅 {task.date} ⏰ {task.time}
      </p>

      <div className="flex gap-3 mt-3">
        <button
          onClick={() => onToggle(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Complete
        </button>

        <Link
          to={`/edit/${task.id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard
