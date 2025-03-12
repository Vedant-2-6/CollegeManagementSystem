// require("dotenv").config();
// const mongoose = require("mongoose");
// const mongoURI = process.env.MONGODB_URI;
//
// const connectToMongo = async () => {
//     try {
//         const uri = mongoURI;
//         if (!uri) {
//             throw new Error("MongoDB URI is not defined in environment variables.");
//         }
//         await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB successfully");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         process.exit(1);
//     }
// };
//
// module.exports = connectToMongo;
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectToMongo = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MongoDB URI is missing in environment variables.");
        }

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectToMongo;
