import Login from './client-login/Login'
import './App.css'
import Admin from './admin-login/admin'
import Dashboard from './client-login/client-dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/client-dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
