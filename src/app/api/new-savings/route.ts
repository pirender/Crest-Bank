import { loan, savings, transactions, users } from "@/lib/airtable";
import { auth } from "../../../../auth";
import { extractAmount, transformString } from "@/lib/util";

export async function POST(request: Request) {
    const session = await auth();
    if (!session) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { type, settlement_account, amount, duration, balance_savings,
        balance_current,
    } = await request.json();
    try {
        const record = await users.find(session.user.id as string)
        const inflow = record.fields.inflow as number;

        if (!record) {
            return Response.json({ error: 'User not found.' }, { status: 404 });
        }

        let balance = 0;

        if(settlement_account.includes('Savings')){
            balance = balance_savings
        }else{
            balance = balance_current;
        }

        const newAmount = parseFloat(extractAmount(amount))

        if(balance <= newAmount){
            return Response.json({ error: 'Insufficient Balance' }, { status: 200 });
        }

        const newBalance = balance - newAmount;

        let dataField;
        if(settlement_account.includes('Savings')){
            dataField = {
                balance_savings: newBalance,
                inflow: newAmount + inflow,
            }
        }else{
            dataField = {
                balance_current: newBalance,
                balance_savings: newAmount + balance_savings,
                inflow: newAmount + inflow,
            }
        }

    
        const data = {
            user_id: session.user.id,
            user_name: session.user.name as string,
            type: type,
            settlement_account: settlement_account,
            amount: parseFloat(extractAmount(amount)),
            duration: duration
        }

        const formattedString = transformString(settlement_account);
        const amountExtract = extractAmount(amount);
        console.log(amountExtract)

        const transactionData = {
            user_id: session.user.id,
            user_name: session.user.name as string,
            type: "Savings",
            payment_account: formattedString,
            amount: parseFloat(amountExtract),
        }


        await savings.create([{
            fields: data
        }])

        await transactions.create([{
            fields: transactionData
        }])

        await users.update([
            {
                id: record.id,
                fields: dataField,
            },
        ]);


        return Response.json({ message: 'Savings added successfully' }, { status: 200 });

    } catch (error) {
        console.log(error)
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
