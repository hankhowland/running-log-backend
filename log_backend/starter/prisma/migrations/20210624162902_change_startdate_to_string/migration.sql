-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Week" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startDate" TEXT NOT NULL,
    "mon" TEXT NOT NULL,
    "tues" TEXT NOT NULL,
    "thurs" TEXT NOT NULL,
    "wed" TEXT NOT NULL,
    "fri" TEXT NOT NULL,
    "sat" TEXT NOT NULL,
    "sun" TEXT NOT NULL
);
INSERT INTO "new_Week" ("fri", "id", "mon", "sat", "startDate", "sun", "thurs", "tues", "wed") SELECT "fri", "id", "mon", "sat", "startDate", "sun", "thurs", "tues", "wed" FROM "Week";
DROP TABLE "Week";
ALTER TABLE "new_Week" RENAME TO "Week";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
