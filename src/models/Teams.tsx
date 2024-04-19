import mongoose, { Document } from "mongoose";


interface ITeams extends Document {
  name: string;
  description: string;

}

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: {type:String, required: true}
  },
  {
    timestamps: true,
  }
);

const Teams = mongoose.models.teams as mongoose.Model<ITeams> || mongoose.model<ITeams>("teams", teamSchema);

export default Teams;
