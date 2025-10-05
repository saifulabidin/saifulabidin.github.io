-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "tech_stack" TEXT[],
    "image_url" VARCHAR(500) NOT NULL,
    "github_url" VARCHAR(500) NOT NULL DEFAULT '#private-repository',
    "live_url" VARCHAR(500) NOT NULL DEFAULT '#company-internal',
    "category" VARCHAR(50) NOT NULL,
    "is_private" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "issuer" VARCHAR(255) NOT NULL,
    "date" VARCHAR(4) NOT NULL,
    "renewed" VARCHAR(4),
    "image_url" VARCHAR(500) NOT NULL,
    "credential_url" VARCHAR(500),
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "github_id" VARCHAR(50) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "avatar_url" VARCHAR(500),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMPTZ(6),

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_category_idx" ON "Project"("category");

-- CreateIndex
CREATE INDEX "Project_sort_order_idx" ON "Project"("sort_order");

-- CreateIndex
CREATE INDEX "Certificate_sort_order_idx" ON "Certificate"("sort_order");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_github_id_key" ON "AdminUser"("github_id");

-- CreateIndex
CREATE INDEX "AdminUser_github_id_idx" ON "AdminUser"("github_id");
