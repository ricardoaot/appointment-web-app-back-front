import server from "./server";
import "dotenv/config"

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})