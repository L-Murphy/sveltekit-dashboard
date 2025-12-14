import { db, createQuote } from '$lib/server/db';
import {quote} from '$lib/server/db/schema'

export async function load() {
	console.log(db.select().from(quote).toSQL())
    const quotes = await db.select().from(quote)
	
    return { 
        quotes: quotes.map((post) => post) 
    }
}

export const actions = {
    create: async function ({ cookies, request }) {
        const data = await request.formData();
        const newQuote = data.get('quote')!.toString();
        const author = data.get('author')!.toString();

        await createQuote(newQuote, author);
    }
}