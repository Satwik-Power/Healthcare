import { useState } from 'react' 
import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Sidebar from './components/sidebar/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
      <div className="flex h-screen w-full overflow-hidden">
     
      <div className="flex-1 overflow-y-auto">
        {/* Place your main dashboard content here */}
      </div>
    </div>
    </>
  )
}

export default App
