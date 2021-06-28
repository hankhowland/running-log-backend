-- CreateTable
CREATE TABLE "Text" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Week" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" DATETIME NOT NULL,
    "mon" TEXT NOT NULL,
    "tues" TEXT NOT NULL,
    "thurs" TEXT NOT NULL,
    "wed" TEXT NOT NULL,
    "fri" TEXT NOT NULL,
    "sat" TEXT NOT NULL,
    "sun" TEXT NOT NULL
);
