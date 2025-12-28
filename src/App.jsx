import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import EditTask from './pages/EditTask'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ViewTask from './pages/ViewTask'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="view" element={<ViewTask/>}/>
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
