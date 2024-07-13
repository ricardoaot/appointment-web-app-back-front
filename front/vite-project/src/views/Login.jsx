import axios from 'axios'
import { useState , useEffect} from 'react'
import validate from '../helpers/validateForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAppointment } from '../redux/userAppointmentsSlice'
import { fetchUser } from '../redux/userSlice'
import sawl from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import apiService from '../services/apiServices'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Login = ()=>{

    const [userData, setUserData] = useState({
        userName    : 'ricardoaot@gmail.com',  
        password : '45107639'
    })
    const [errors, setErrors] = useState({})
    const [Blur, setBlur] = useState({})
    const userData2 = useSelector((state) => state.userState.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setErrors(validate(userData))
        //console.log(userData2)
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
        //console.log(userData)

        if(errors.userName || errors.password){
            return false
        }

        apiService.loginUser(userData)
        .then(res => {
            //console.log(res.data)
            dispatch(fetchUser(res.data))
            sawl.fire({
                icon: 'success',
                title: 'Login Successful',
                timer: 2000
            })
            .then(() => navigate('/appointments'))
            //console.log(res.data)

        })
        .catch(err => 
            {
                console.log(err)
                sawl.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    timer: 2000
                })
            }
        )
    }

    return (
        <>
            <Card className="h-full w-[400px] m-8 mx-auto">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Welcome back, please field in your credentials.
                    </CardDescription>
                </CardHeader>
                <CardContent className=' items-center w-full'>

                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input type="email" name="userName" id="userName" 
                                onChange={handleOnChange} value={userData.userName}
                                onBlur={handleOnBlur} />
                            {errors.userName && Blur.userName && <p>{errors.userName}</p>}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" 
                            onChange={handleOnChange} value={userData.password}
                            onBlur={handleOnBlur} />
                            {errors.password && Blur.password && <p>{errors.password}</p>}
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Login