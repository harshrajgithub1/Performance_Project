import mongoose, { Document } from "mongoose";


interface User extends Document {
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  isActive: boolean;
  isVerfied?: boolean;
  isAdmin?: boolean;
  designation:string;
   
}

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: [true, "Please provide an email"], unique: true },
    password: { type: String, required: [true,"Please provide password"] },
    phoneNumber: { type: String, unique: true },
    isActive: { type: Boolean, required: true },
    isVerfied: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    designation: { type: String, unique: true },
    
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.registers as mongoose.Model<User> || mongoose.model<User>("registers", userSchema);

export default UserModel;
