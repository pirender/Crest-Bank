import { usersTable } from '@/lib/airtable';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    const { email, code } = await request.json();

    try {
        const records = await usersTable.select({
            filterByFormula: `{email} = '${email}'`,
        }).firstPage();

        if (records.length === 0) {
            return Response.json({ message: 'User not found.' }, { status: 404 });
        }

        const user = records[0];
        const vcode = user.fields.verificationCode?.toString()

        if (vcode === code) {
            // const token = jwt.sign({ id: user.id, email: user.fields.email }, process.env.JWT_SECRET!, {
            //     expiresIn: '1h',
            // });

            const { password, verificationCode, ...filteredUser } = user.fields;

            return Response.json({ user: filteredUser }, {status: 200});
        } else {
            return Response.json({ error: 'Invalid verification code.' }, {status: 401});
        }
    } catch (error) {
        return Response.json({ error: error});
    }
}