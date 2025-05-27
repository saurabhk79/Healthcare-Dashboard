import React from 'react'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <Sidebar />
      <DashboardMainContent />
    </div>
  )
}

export default App