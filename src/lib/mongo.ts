import mongoose from "mongoose";

const connectMB = async () => {
  try {
    const DB_OPTIONS: mongoose.ConnectOptions = {
      dbName: "Employee_Performance",
    };

    await mongoose.connect("mongodb+srv://rajharsh0201:Eq8xwi11AlvLyIaU@cluster0.3uhwlqb.mongodb.net/", DB_OPTIONS);
    console.log("Connected to MongoDB harsh");
  } catch (error) {
    throw new Error("Connection failed! " + error);
  }
};

export default connectMB;
