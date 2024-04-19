import mongoose, { Document }  from "mongoose";

interface IRating extends Document{
    id: number;
    moduleName: string;
    employeeRating: number;
    comments: string;
    employeeId: number;
    createdBy: string;
    createdDate: Date;
    teamId: number;
  }
  
  
  const employeeRatingSchema = new mongoose.Schema(
    {
      id: { type: Number, required: true },
      moduleName: { type: String, required: true },
      employeeRating: { type: Number, required: true },
      comments: { type: String, required: true },
      employeeId: { type: Number, required: true },
      createdBy: { type: String, required: true },
      createdDate: { type: Date, default: Date.now }, // Use a function to set current date
      teamId: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

  const Rating = mongoose.models.rating as mongoose.Model<IRating> || mongoose.model<IRating>("rating", employeeRatingSchema);

  export default Rating;
  

