/*
  Warnings:

  - You are about to drop the column `time` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "time",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;
