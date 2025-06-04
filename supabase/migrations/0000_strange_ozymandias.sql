CREATE TYPE "public"."userRoles" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "chapter" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"chapter_number" integer NOT NULL,
	"novel_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "novel" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"author" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL,
	"role" "userRoles" DEFAULT 'user',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_novel_id_novel_id_fk" FOREIGN KEY ("novel_id") REFERENCES "public"."novel"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "chapter_slug_idx" ON "chapter" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "chapter_novel_id_idx" ON "chapter" USING btree ("novel_id");--> statement-breakpoint
CREATE UNIQUE INDEX "novel_slug_idx" ON "novel" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "user_username_idx" ON "user" USING btree ("username");