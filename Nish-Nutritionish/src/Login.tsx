import { useState } from 'react'
import './Login.css'


function Login() {
  const [credentials, setCredentials] = useState({
    name: ''
    
    
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) =>  {
    e.preventDefault()
    
    // Basic validation
    if (!credentials.name ) {
      setError('Please fill in all fields')
      return
    }

    // Here you would typically send credentials to your backend
    console.log('Login attempt:', credentials)
    
    // For demo purposes, you can add actual authentication logic here
    // Example: if (credentials.email === 'user@example.com' && credentials.password === 'password') { ... }
  }



  return (
    <div className="login-container">
      <div className="login-background">
        <div className="layered-arc">
          <div className="arc-layer arc-layer-1"></div>
          <div className="arc-layer arc-layer-2"></div>
          <div className="arc-layer arc-layer-3"></div>
        </div>
        
        <div className="login-card">
          <div className="login-content">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your diet plan</p>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              

              
              {error && <div className="error-message">{error}</div>}
              
              <button type="submit" className="login-button">
                Login In
              </button>
            </form>
            
            <div className="login-footer">
              
              <p className="signup-link">
                Admin?<a href="#">Click here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

