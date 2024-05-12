import { AppDataSource, UserRepository } from "../config/data-source"

const preloadUserData = [
    {
        "name": "pepito",
        "email": "pepito@pepito.com",
        "birthdate": "12-10-2010",
        "nDni": "1234"
    }
]

const preloadUserFunction = async ()=>{
    const queryRunner = AppDataSource.createQueryRunner()
    try {
        await queryRunner.connect()
        await queryRunner.startTransaction()
        const userFound = await UserRepository.find()
        if(userFound.length > 0){
            console.log("users already created")
            return
        }
        const promiseUser = preloadUserData.map(async (user)=>{
            const newUser = UserRepository.create(user)
            await queryRunner.manager.save(newUser)
        })
        await Promise.all(promiseUser)
        await queryRunner.commitTransaction()
    } catch (error) {
        await queryRunner.rollbackTransaction()
    }
    finally {
        await queryRunner.release()
    }
}

export default preloadUserFunction