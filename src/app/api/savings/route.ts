import { getSavings, getTransactions } from "@/lib/airtable";
import { auth } from "../../../../auth";

export async function GET(req: Request) {
    const session = await auth();

    const type = 'Savings'

    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const transactions = await getSavings(session.user.id as string, type as string)
        if (transactions) {
            return Response.json({ message: 'successful', transactions: transactions });
        } else {
            return Response.json({ error: 'Invalid id' });
        }

    } catch (error) {
        return Response.json({ error: error });
    }
}