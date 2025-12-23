import Login from './client-login/main-files(tsx)/Login'
import './App.css'
import Admin from './admin-login/main-files(tsx)/admin'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
