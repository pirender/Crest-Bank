import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

export const usersTable = base('Users');
export const transactionsTable = base('Transactions');

export const getTransactions = async (id: number) => {
    const records = await base('Transactions').select({
      filterByFormula: `{id} = '${id}'`
    }).all();
    return records.map(record => ({
      id: record.id,
      fields: record.fields,
    }));
};

export const getUser = async (id: string) => {
  const records = await base('Users').select({
    filterByFormula: `{user} = '${id}'`
  }).firstPage();
  return records[0].fields;
};