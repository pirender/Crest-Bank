import { loan, local, transactions, users, wire } from "@/lib/airtable";
import { auth } from "../../../../auth";
import { transformString } from "@/lib/util";

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { bank_name, payment_account, amount, account_number, account_name, details } = await request.json();
    try {
        const record = await users.find(session.user.id as string)

        if (!record) {
            return Response.json({ error: 'User not found.' }, { status: 404 });
        }

        const balance_savings = record.fields.balance_savings as number;
        const balance_current = record.fields.balance_current as number;
        const outflow = record.fields.outflow as number;
        const newAmount = parseFloat(amount)


        let balance = 0;

        if(payment_account.includes('Savings')){
            balance = balance_savings;
        }else{
            balance = balance_current;
        }


        if(balance <= amount){
            return Response.json({ error: 'Insufficient Balance' }, { status: 200 });
        }


        const newBalance = balance - amount;

        let dataField;
        if(payment_account.includes('Savings')){
            dataField = {
                balance_savings: newBalance,
                outflow: newAmount + outflow,
            }
        }else{
            dataField = {
                balance_current: newBalance,
                outflow: newAmount + outflow,
            }
        }

        const data = {
            user_id: session.user.id,
            user_name: session.user.name as string,
            bank_name,
            payment_account,
            details,
            amount: parseFloat(amount),
            account_number,
            account_name,
        }
        const formattedString = transformString(payment_account);

        const transactionData = {
            user_id: session.user.id,
            user_name: session.user.name as string,
            type: "Domestic Transfer",
            status: "Completed",
            payment_account: formattedString,
            amount: parseFloat(amount),
        }

        await local.create([{
            fields: data
        }])

        const transaction = await transactions.create([{
            fields: transactionData
        }])

        const id = transaction[0].id;


        await users.update([
            {
                id: record.id,
                fields: dataField,
            },
        ]);

        return Response.json({ message: 'Transfer successful', id: id }, { status: 200 });

    } catch (error) {
        console.log(error)
        return Response.json({ error: 'Internal Server Error' }, { status: 200 });
    }
}
