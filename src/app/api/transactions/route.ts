import { getTransactions } from "@/lib/airtable";
import { NextRequest } from "next/server";
import { auth } from "../../../../auth";


export async function GET(req: NextRequest) {
    try {
        const session = await auth();

      const id = Number(session?.user.id);

      if(id){
        const transactions = await getTransactions(id)
        if (transactions) {
          return Response.json({ message: 'successful', transactions: transactions });
        } else {
          return Response.json({ error: 'Invalid id' });
        }
      }
    } catch (error) {
      return Response.json({error: error });
    }
}