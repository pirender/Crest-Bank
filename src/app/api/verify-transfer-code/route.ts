import { users } from '@/lib/airtable';
import { auth } from '../../../../auth';

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }
    const { email, code } = await request.json();
    console.log(email, code)

    try {
        const records = await users.select({
            filterByFormula: `{email} = '${email}'`,
        }).firstPage();

        if (records.length === 0) {
            return Response.json({ message: 'User not found.' }, { status: 404 });
        }

        const user = records[0];
        const vcode = user.fields.verificationCode?.toString()

        if (vcode === code){
            return Response.json({ user: user }, {status: 200});
        } else {
            return Response.json({ error: 'Invalid verification code.' }, {status: 200});
        }
    } catch (error) {
        return Response.json({ error: error});
    }
}