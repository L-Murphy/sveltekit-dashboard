import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';
import * as schema from "$lib/server/db/schema";


// There are multiple ways to initialize the client
// Go to one of these pages to find your implementation:
// postgreSQL: https://orm.drizzle.team/docs/get-started-postgresql
// MySQL: https://orm.drizzle.team/docs/get-started-mysql
// SQLite: https://orm.drizzle.team/docs/get-started-sqlite
// The following is an example for supabase:

const client = postgres(DATABASE_URL);

export const db = drizzle(client, {schema});

export async function createQuote(newQuote: string, author: string){
    console.log(db.insert(schema.quote).values({quote: newQuote, author}).toSQL());

    await db.insert(schema.quote).values({id: Math.floor(Math.random() * (500+1)), quote: newQuote, author}); //TODO: Fix the id generation. was getting errors but I thought it was auto increment
}