/*
    POST http://localhost:3000/user/register
    Content-Type: application/json

    {
    "name": "pepito",
    "email": "pepito@pepito.com",
    "birthdate": "12-10-2010",
    "nDni": "1234"
    }

*/
import axios from "axios";
import validate from "../helpers/validateForm";
import { useEffect, useState } from "react";
const Register = () => {

    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})
    const [Blur, setBlur] = useState({})

    useEffect(() => {
        setErrors(validate(userData))
    }, [userData])

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
        if(errors.name || errors.email || errors.birthdate || errors.nDni){
            return false
        }
        const objeto =  {
            "name": "pepito",
            "email": "pepito@pepito.com",
            "birthdate": "12-10-2010",
            "nDni": "1234"
        }

        console.log(objeto)
        console.log(userData)
        
        axios.post("http://localhost:3000/user/register", userData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" 
                        onChange={handleOnChange} 
                        onBlur={handleOnBlur}/>
                    {errors.name && Blur.name && <p>{errors.name}</p>}
                    
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" 
                        onChange={handleOnChange} 
                        onBlur={handleOnBlur}/>
                    {errors.email && Blur.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input type="date" name="birthdate" id="birthdate" 
                        onChange=  {handleOnChange} 
                        onBlur={handleOnBlur}/>
                    {errors.birthdate && Blur.birthdate && <p>{errors.birthdate}</p>}   
                </div>
                <div>
                    <label htmlFor="nDni">nDni</label>
                    <input type="text" name="nDni" id="nDni" 
                        onChange={handleOnChange} 
                        onBlur={handleOnBlur}/>
                    {errors.nDni && Blur.nDni && <p>{errors.nDni}</p>}
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    )
}
export default Register