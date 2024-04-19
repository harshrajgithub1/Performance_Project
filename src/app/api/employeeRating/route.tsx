import connectMB from "@/lib/mongo";
import Rating from "../../../models/Rating"
import { NextResponse, NextRequest } from "next/server";




export const GET = async (req: NextRequest) => {
    console.log(req);
    
    try {
      console.log(req);
      await connectMB();
      const rating = await Rating.find({});
      return NextResponse.json(rating);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };



export const POST = async (req: any) => {
    const { id, moduleName, employeeRating, comments, employeeId, teamId, createdBy} = await req.json();
    
    try {
      await connectMB();
      const newRating = await Rating.create({
        id,
        moduleName,
        employeeRating,
        comments,
        employeeId,
        teamId,
        createdBy

      });
      if(newRating && newRating._id){
        // insert data in user team role mapping
      }
      return NextResponse.json(newRating);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };