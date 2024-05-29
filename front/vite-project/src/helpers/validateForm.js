const validate = (formData)=>{
    const error = {}
    if(!formData.name){
        error.name = "Name is required"
    }
    if(!formData.email){
        error.email = "Email is required"
    }
    if(!formData.birthdate){
        error.birthdate = "Birthdate is required"
    }
    if(!formData.nDni){
        error.nDni = "nDni is required"
    }
    return error
}
export default validate