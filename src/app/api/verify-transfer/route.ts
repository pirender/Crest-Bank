import { users } from '@/lib/airtable';
import nodemailer from 'nodemailer';
import { auth } from '../../../../auth';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASS,
    }
})

export async function GET(request: Request) {
    const session = await auth();
    if (!session) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    try {
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        await users.update(session.user.id as string, { verificationCode });

        const mailOptions = {
            from: `Crest Bank ${process.env.MY_EMAIL}`,
            to: session.user.email,
            subject: "Email Verification",
            text: `Your transfer verification code is: ${verificationCode}`,
        }

        transporter.verify(function (error, success) {
            if (error) {
                console.log(`here is the error: ${error}`);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const result = await transporter.sendMail(mailOptions);

        if (result.response.includes("OK")) {
            return Response.json({ message: "Verification code sent to email." }, { status: 200 });
        } else {
            return Response.json({ error: "Error sending verification code." }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return Response.json({ error: error });
    }
}