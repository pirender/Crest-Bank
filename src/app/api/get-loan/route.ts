import { getLoans } from "@/lib/airtable";
import { auth } from "../../../../auth";


export async function GET(req: Request) {
  const session = await auth();

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
      const loans = await getLoans(session.user.id as string)
      if (loans) {
        return Response.json({ message: 'successful', loans: loans });
      } else {
        return Response.json({ error: 'Invalid id' });
      }
  } catch (error) {
    return Response.json({ error: error });
  }
}