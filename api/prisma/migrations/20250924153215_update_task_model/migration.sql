/*
  Warnings:

  - You are about to drop the column `description` on the `Task` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "public"."Task" DROP COLUMN "description",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "status" "public"."TaskStatus" NOT NULL DEFAULT 'TODO';
