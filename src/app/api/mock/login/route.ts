// import { serializeCookie } from '@/lib/cookie'

// export async function POST() {
//   const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
//   return Response.json({ login: true }, {
//     headers: {
//       'Set-Cookie': cookie,
//     },
//   })
// }

// Note:- commented are important donot delete this 




import { NextResponse, NextRequest } from "next/server";
import connectMB from "../../../../lib/mongo";
import userModel from "../../../../models/User";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        await connectMB();

        const userEmail: | null = await userModel.findOne({ email });
        if (!userEmail) {
            return NextResponse.json({ error: 'Invalid email or password' });
        }

        const passwordMatch: boolean = await bcrypt.compare(password, userEmail);
        if (!passwordMatch) {
            return NextResponse.json({ error: 'Invalid email or password' });
        }

        return NextResponse.json({ message: 'Login successful', user: userEmail });
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
};
