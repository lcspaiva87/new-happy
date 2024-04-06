/*
  Warnings:

  - You are about to drop the column `instructions` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `open_on_weekends` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `opening_hours` on the `School` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `School` DROP COLUMN `instructions`,
    DROP COLUMN `open_on_weekends`,
    DROP COLUMN `opening_hours`;
