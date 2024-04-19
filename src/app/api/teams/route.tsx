import connectMB from "@/lib/mongo";
import Teams from "../../../models/Teams";
import { NextResponse, NextRequest } from "next/server";


export const GET = async (req: NextRequest) => {
    console.log(req);
    
    try {
      console.log(req);
      await connectMB();
      const teams = await Teams.find({});
      return NextResponse.json(teams);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };



export const POST = async (req: any) => {
    const { name, description} = await req.json();
    
    try {
      await connectMB();
      const newTeams = await Teams.create({
        name,
        description
      });
      if(newTeams && newTeams._id){
        // insert data in user team role mapping
      }
      return NextResponse.json(newTeams);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };