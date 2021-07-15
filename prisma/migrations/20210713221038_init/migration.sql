-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ROOT', 'DEVELOPER', 'INNER_USER', 'OUTER_USER');

-- CreateEnum
CREATE TYPE "ProposalStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vote" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "proposal_author_id" TEXT NOT NULL,
    "proposal_service_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ownership" (
    "role" "UserRole" NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id","service_id")
);

-- CreateTable
CREATE TABLE "proposal" (
    "description" TEXT NOT NULL,
    "status" "ProposalStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id","service_id")
);

-- AddForeignKey
ALTER TABLE "vote" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vote" ADD FOREIGN KEY ("proposal_author_id", "proposal_service_id") REFERENCES "proposal"("user_id", "service_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownership" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ownership" ADD FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposal" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposal" ADD FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
