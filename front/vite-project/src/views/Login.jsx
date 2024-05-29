import axios from 'axios'
import { useState , useEffect} from 'react'
import validate from '../helpers/validateForm'

const Login = ()=>{

    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})
    const [Blur, setBlur] = useState({})
    
    useEffect(() => {
        setErrors(validate(userData))
    },[userData])

    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }
    const handleOnBlur = (event) => {
        setBlur({
            ...Blur,
            [event.target.name]: true
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(userData)

        if(errors.email || errors.password){
            return false
        }
        axios.post("http://localhost:3000/user/login", userData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                        onChange={handleOnChange}
                        onBlur={handleOnBlur} />
                    {errors.email && Blur.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    onChange={handleOnChange}
                    onBlur={handleOnBlur} />
                    {errors.password && Blur.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login