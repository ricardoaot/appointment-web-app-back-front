import axios from "axios";
import validate from "../helpers/validateForm";
import { useEffect, useState } from "react";
import "./Register.css"
import apiService from "../services/apiServices";
import ImageSlider from "@/components/ImageSlider";
import sawl from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})
    const [Blur, setBlur] = useState({})
    const navigate = useNavigate()
    
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
        

        apiService.registerUser(userData)
        .then(res => {
            sawl.fire({
                icon: 'success',
                title: 'User Registered Successfully',
                timer: 2000
            })
            .then(() => navigate('/login'))
        })
        .catch(err => 
            {
                console.log(err)
                sawl.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    timer: 2000
                })
            }
        )
    }

    return (
        <>
            <div className="pt-8">
                <h1 className="text-4xl font-bold text-center">Welcome to our dance school</h1>
                <p className="mt-4 text-lg text-center">
                    Explore our classes and book a place right now. ¡Let's dance!
                </p>
            </div>
            <div className="m-8 grid grid-cols-2 max-w-5xl mx-auto items-center" >
                <div className="w-full col-span-1">
                    <ImageSlider />
                </div>
                <div className="w-full col-span-1">                
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
                            <label htmlFor="nDni">ID number</label>
                            <input type="text" name="nDni" id="nDni" 
                                onChange={handleOnChange} 
                                onBlur={handleOnBlur}/>
                            {errors.nDni && Blur.nDni && <p>{errors.nDni}</p>}
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register