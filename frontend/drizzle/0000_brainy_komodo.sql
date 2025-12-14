-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "quote" (
	"id" serial PRIMARY KEY NOT NULL,
	"quote" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "quote_quote_key" UNIQUE("quote")
);

*/