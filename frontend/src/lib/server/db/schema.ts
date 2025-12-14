import { pgTable, unique, serial, varchar, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const quote = pgTable("quote", {
	id: serial().primaryKey().notNull(),
	quote: varchar({ length: 255 }).notNull(),
	author: varchar({ length: 255 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	unique("quote_quote_key").on(table.quote),
]);
