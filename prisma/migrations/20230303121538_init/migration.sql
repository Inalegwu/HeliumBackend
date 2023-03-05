-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "document_name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "file_name" TEXT,
    "file_content" TEXT NOT NULL,
    "document_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_id_key" ON "Document"("id");

-- CreateIndex
CREATE UNIQUE INDEX "File_id_key" ON "File"("id");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
