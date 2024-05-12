import server from "./server";
import "dotenv/config"
import { AppDataSource } from "./config/data-source"
import "reflect-metadata"
import preloadUserFunction from "./helper/preloadData";

const initialitation = async ()=>{
    await AppDataSource.initialize()
    //await preloadUserFunction()
    const port = process.env.PORT;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })   
}

initialitation()
/*
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
})
.then(() => {
    const port = process.env.PORT;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })    
})
*/
