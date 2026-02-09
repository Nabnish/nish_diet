import mongoose from "mongooose"

const connectdb = async() => {
    try {
        const connectionInstance = await mongoose.connect
        (`${proccess.env.MONGODB_URL}`)
        console.log(`Connected successfully to database on the serv ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("OOPS! couldn't connect to the database");
        proccess.exit(1);
    }

}

export default connectdb