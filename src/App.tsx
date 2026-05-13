import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { navItems } from './data/labsContent'
import CoreAppPage from './pages/CoreAppPage'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import RoadmapPage from './pages/RoadmapPage'
import SolutionsPage from './pages/SolutionsPage'

function App() {
  return (
    <div className="min-h-screen bg-[#080b12] text-slate-200">
      <Header navItems={navItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/core-app" element={<CoreAppPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer navItems={navItems} />
    </div>
  )
}

export default App
