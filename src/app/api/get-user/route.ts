import { NextRequest } from "next/server";
import { auth } from "../../../../auth";
import { getUser, usersTable } from "@/lib/airtable";


export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const records = await usersTable.select({
            filterByFormula: `{id} = '${session.user.id}'`,
        }).firstPage();

        if (records.length === 0) {
            return Response.json({ message: 'User not found.' }, { status: 404 });
        }

        const user = records[0].fields;

        const { password, verificationCode, ...filteredUser } = user

        return Response.json(filteredUser, { status: 200 });
    } catch (error) {
        return Response.json({ error: error });
    }
}