-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_document_id_fkey";

-- AlterTable
ALTER TABLE "File" ALTER COLUMN "document_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
