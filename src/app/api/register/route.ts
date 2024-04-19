import { NextResponse, NextRequest } from "next/server";
import connectMB from "../../../lib/mongo";
import userModel from "../../../models/User";
import bcrypt from 'bcryptjs'

export const GET = async (req: NextRequest) => {
  console.log(req);
  
  try {
    console.log(req);
    await connectMB();
    const newRegister = await userModel.find({});
    return NextResponse.json(newRegister);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const POST = async (req: any) => {
  const { fullName, email, password, phoneNumber, isActive, designation, image} = await req.json();
  const hashedPassword: string = await bcrypt.hash(password, 5);
  try {
    await connectMB();
    const newRegister = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      isActive,
      designation,
      image
    });

    return NextResponse.json(newRegister);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
