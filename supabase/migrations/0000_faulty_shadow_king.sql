CREATE TYPE "public"."chapterStatus" AS ENUM('free', 'paid');--> statement-breakpoint
CREATE TABLE "chapter" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"chapter_number" integer NOT NULL,
	"content" text NOT NULL,
	"is_approved" boolean DEFAULT false NOT NULL,
	"chapter_status" "chapterStatus" DEFAULT 'free' NOT NULL,
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
	"views" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_novel_id_novel_id_fk" FOREIGN KEY ("novel_id") REFERENCES "public"."novel"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "chapter_slug_idx" ON "chapter" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "chapter_novel_id_idx" ON "chapter" USING btree ("novel_id");--> statement-breakpoint
CREATE UNIQUE INDEX "novel_slug_idx" ON "novel" USING btree ("slug");