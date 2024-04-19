import { NextResponse } from "next/server";
import connectMB from "../../../lib/mongo";
import userRole from "../../../models/Role";

export const GET = async (req: Request) => {
  try {
    console.log(req);
    await connectMB();
    const newRole = await userRole.find({});
    return NextResponse.json(newRole);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const POST = async (req: Request) => {
  const { id, position }: { id: string, position: string } = await req.json();

  try {
    await connectMB();
    const newRegister = await userRole.create({
      id,
      position
    });
    
    return NextResponse.json(newRegister);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
