import { auth } from '../../../../auth';
import { transactions, users } from '@/lib/airtable';

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, amount, currency, recipient_name, recipient_account, recipient_bank, swift_code, iban, bank_address } = await request.json();

  try {
    // Find the user in the database
    const userRecords = await users.select({ filterByFormula: `{id} = '${session.user.id}'` }).firstPage();
    if (userRecords.length === 0) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }
    const user = userRecords[0];

    // Initialize user balances
    const balanceUSD: number = Number(user.fields.balance_usd ?? 0);
    const balanceGBP: number = Number(user.fields.balance_gbp ?? 0);
    const balanceEUR: number = Number(user.fields.balance_eur ?? 0);

    // Initialize newBalance with a default value
    let newBalance: number = 0;

    // Check balance and deduct amount
    if (currency === 'USD') {
      if (balanceUSD < amount) {
        return Response.json({ error: 'Insufficient balance' }, { status: 400 });
      }
      newBalance = balanceUSD - amount;
      await users.update([{ id: user.id, fields: { balance_usd: newBalance } }]);
    } else if (currency === 'GBP') {
      if (balanceGBP < amount) {
        return Response.json({ error: 'Insufficient balance' }, { status: 400 });
      }
      newBalance = balanceGBP - amount;
      await users.update([{ id: user.id, fields: { balance_gbp: newBalance } }]);
    } else if (currency === 'EUR') {
      if (balanceEUR < amount) {
        return Response.json({ error: 'Insufficient balance' }, { status: 400 });
      }
      newBalance = balanceEUR - amount;
      await users.update([{ id: user.id, fields: { balance_eur: newBalance } }]);
    }

    // Save the transaction
    const transaction = {
      user_id: user.id,
      id: session.user.id,
      type,
      amount,
      currency,
      recipient_name,
      recipient_account,
      recipient_bank: recipient_bank || '',
      swift_code: swift_code || '',
      iban: iban || '',
      bank_address: bank_address || '',
      date: new Date().toISOString(),  // Convert Date to ISO string
      status: 'successful',
    };

    const result = await transactions.create([{ fields: transaction }]);
    console.log(result)

    return Response.json({ message: 'Transfer successful', newBalance }, { status: 200 });
  } catch (error) {
    console.log(error)
    return Response.json({ error: error }, { status: 500 });
  }
}
