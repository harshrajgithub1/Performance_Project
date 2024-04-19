import { NextResponse, NextRequest } from "next/server";
import connectMB from "../../../lib/mongo";
import userModel from "../../../models/User";
import bcrypt from "bcryptjs";
import { serializeCookie } from '@/lib/cookie'

export const POST = async (req: any) => {
    try {
        const { email, password } = await req.json();
        console.log(email, "  ", password);
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log("password ", hashedPassword);

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        await connectMB();

        const user = await userModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' });
        }

        const passwordMatch: boolean = await bcrypt.compare(password, user.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
            return NextResponse.json({ error: 'Invalid email or password' });
        }
        const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
        return Response.json({ login: true }, {
            headers: {
            'Set-Cookie': cookie,
            },
        })
        // Login successful
        return NextResponse.json({ message: 'Login successful', user: user });
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
};
