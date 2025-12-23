import { useState } from 'react'
import '../css-file/admin.css'


function Admin() {
    const [credentials, setCredential] = useState({
        name: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredential(prev => ({
            ...prev,
            [name]: value
        }))
        setError("")


    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!credentials.name || !credentials.password) {
            setError("Please fill in all fields")
            return
        }

        console.log("Admin Login Attempt:", credentials);
    }
    return (
        <div className='Box1'>
            <div className='arch'>

                <div className="arc arch1"></div>
                <div className="arc arch2"></div>
                <div className="arc arch3"></div>
            </div>
            <div className="login">
                <div>

                    <h1 className='heading'>Admin Login</h1>
                    <form onSubmit={handleSubmit} className='form1'>
                        <div className="form-div">
                            <label htmlFor='name' className="name">Enter your name</label>
                            <input
                                type='name'
                                id='name'
                                name='name'
                                value={credentials.name}
                                onChange={handleChange}
                                placeholder='Enter your name' />
                            <label htmlFor='password' className="password">Enter your password</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="Enter your password" />
                            {error && <div className="error_dialog">{error}</div>}
                            <button type="submit">Login</button>



                        </div>


                    </form>
                </div>






            </div>

        </div>
    )
}
export default Admin