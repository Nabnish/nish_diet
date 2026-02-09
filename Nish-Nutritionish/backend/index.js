import dotenv from "dotenv";
import connectdb from "./database.js";

dotenv.config({
    path: './.env'
});

const startserv = async() => {
    try {
        await connectdb();
        app.on("error",(error) => {
            console.log("ERROR",error);
            throw error;
        });
         app.listen(proccess.env.PORT || 5000 , () =>{
            console.log(`serv is running on port ${proccess.env.PORT}`);

         });

    } catch (error) {
        console.log("Mongodb connection failed and serv failed", err);
    }
}

startserv();
