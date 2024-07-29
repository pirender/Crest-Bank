import { loan, transactions } from "@/lib/airtable";
import { auth } from "../../../../auth";
import { transformString } from "@/lib/util";

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { type, details, settlement_account, amount, duration } = await request.json();
    try {
       const data = {
            user_id: session.user.id,
            type: type,
            settlement_account: settlement_account,
            details: details,
            amount: parseFloat(amount),
            duration: duration
       }

       const formattedString = transformString(settlement_account);

       const transactionData = {
        user_id: session.user.id,
        type: "Loan",
        payment_account: formattedString,
        amount: parseFloat(amount), 
       }


       await loan.create([{
        fields: data
       }])

       await transactions.create([{
        fields: transactionData
       }])

        return Response.json({ message: 'Loan added successfully' }, { status: 200 });

    } catch (error) {
        console.log(error)
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
