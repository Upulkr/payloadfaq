import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "new_faqs_collection_translations_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar
  );
  
  ALTER TABLE "new_faqs_collection_translations" DROP CONSTRAINT "new_faqs_collection_translations_video_thumbnail_id_media_id_fk";
  
  DROP INDEX IF EXISTS "new_faqs_collection_translations_video_thumbnail_idx";
  ALTER TABLE "new_faqs_collection_translations" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "new_faqs_collection_translations" ALTER COLUMN "video_url" SET DATA TYPE varchar;
  ALTER TABLE "new_faqs_collection_translations" ADD COLUMN "video_thumbnail" varchar;
  DO $$ BEGIN
   ALTER TABLE "new_faqs_collection_translations_steps" ADD CONSTRAINT "new_faqs_collection_translations_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."new_faqs_collection_translations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "new_faqs_collection_translations_steps_order_idx" ON "new_faqs_collection_translations_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "new_faqs_collection_translations_steps_parent_id_idx" ON "new_faqs_collection_translations_steps" USING btree ("_parent_id");
  ALTER TABLE "new_faqs_collection_translations" DROP COLUMN IF EXISTS "video_thumbnail_id";
  DROP TYPE "public"."enum_new_faqs_collection_translations_video_url";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_new_faqs_collection_translations_video_url" AS ENUM('https://www.youtube.com/watch?v=9bZkp7q19f0', 'https://www.youtube.com/watch?v=9bZkp7q19f0', 'https://www.youtube.com/watch?v=9bZkp7q19f0');
  ALTER TABLE "new_faqs_collection_translations_steps" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "new_faqs_collection_translations_steps" CASCADE;
  ALTER TABLE "new_faqs_collection_translations" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "new_faqs_collection_translations" ALTER COLUMN "video_url" SET DATA TYPE enum_new_faqs_collection_translations_video_url;
  ALTER TABLE "new_faqs_collection_translations" ADD COLUMN "video_thumbnail_id" integer;
  DO $$ BEGIN
   ALTER TABLE "new_faqs_collection_translations" ADD CONSTRAINT "new_faqs_collection_translations_video_thumbnail_id_media_id_fk" FOREIGN KEY ("video_thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "new_faqs_collection_translations_video_thumbnail_idx" ON "new_faqs_collection_translations" USING btree ("video_thumbnail_id");
  ALTER TABLE "new_faqs_collection_translations" DROP COLUMN IF EXISTS "video_thumbnail";`)
}
