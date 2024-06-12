/*
  Warnings:

  - You are about to drop the `Instuctor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Instuctor";

-- CreateTable
CREATE TABLE "Instructor" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");
