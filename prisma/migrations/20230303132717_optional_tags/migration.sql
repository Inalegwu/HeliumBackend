-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_tag_id_fkey";

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "tag_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
