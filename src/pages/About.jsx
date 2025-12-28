const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="p-6 max-w-2xl border rounded-md text-center bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          About
        </h1>

        <p className="text-gray-700 leading-relaxed">
          This Task Management App is built using{' '}
          <span className="font-medium">React</span> and{' '}
          <span className="font-medium">Tailwind CSS</span>. It uses
          client-side routing, reusable components, local storage for data
          persistence, and API data fetching for fallback tasks.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          The application allows users to add, view, edit, complete, and delete
          tasks with date and time support in a clean and user-friendly interface.
        </p>
      </div>

    </div>
  )
}

export default About
