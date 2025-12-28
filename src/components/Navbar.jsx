import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center border-b border-blue-800">
      
      <h1 className="font-bold text-xl tracking-wide">
        Task Manager
      </h1>

      <div className="space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'hover:text-blue-300'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'hover:text-blue-300'
          }
        >
          Add Task
        </NavLink>

        <NavLink
          to="/view"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'hover:text-blue-300'
          }
        >
          View Task
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'hover:text-blue-300'
          }
        >
          About
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar
