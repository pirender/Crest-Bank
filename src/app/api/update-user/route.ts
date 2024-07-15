import { usersTable } from "@/lib/airtable";
import { auth } from "../../../../auth";

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { first_name, last_name, img, dob, username, phone, email, country, state, address } = await request.json();

    try {


        const records = await usersTable.select({
            filterByFormula: `{id} = '${session.user.id}'`,
        }).firstPage();

        if (records.length === 0) {
            return Response.json({ message: 'User not found.' }, { status: 404 });
        }

        const user = records[0].fields;

        const updatedFields: any = {};

        if (first_name !== user.first_name) updatedFields.first_name = first_name;
        if (img !== user.img) updatedFields.img = img;
        if (last_name !== user.last_name) updatedFields.last_name = last_name;
        if (dob !== user.dob) updatedFields.dob = dob;
        if (username !== user.username) updatedFields.username = username;
        if (phone !== user.phone) updatedFields.phone = phone;
        if (email !== user.email) updatedFields.email = email;
        if (country !== user.country) updatedFields.country = country;
        if (state !== user.state) updatedFields.state = state;
        if (address !== user.address) updatedFields.address = address;

        if (Object.keys(updatedFields).length > 0) {
            await usersTable.update([
                {
                    id: records[0].id,
                    fields: updatedFields,
                },
            ]);
        }

        return Response.json({ message: 'Profile updated' }, { status: 200 });

    } catch (error) {
        return Response.json({ error: error });
    }
}