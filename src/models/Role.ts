import mongoose from "mongoose";

const userRole = new mongoose.Schema({
  id: { type: String, unique: true },
  position: { type: String, required: true},
  
},
  {
    timestamps: true,
  }
);

const UserRole = mongoose.models.role || mongoose.model("role", userRole);

export default UserRole;
