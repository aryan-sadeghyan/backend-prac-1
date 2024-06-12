-- CreateTable
CREATE TABLE "Student" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instuctor" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "Instuctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Instuctor_name_key" ON "Instuctor"("name");
