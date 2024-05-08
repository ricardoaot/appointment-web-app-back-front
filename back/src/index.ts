import server from "./server";
import "dotenv/config"
import { AppDataSource } from "./config/data-source"
import "reflect-metadata"

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
})
.then(() => {
    const port = process.env.PORT;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })    
})
