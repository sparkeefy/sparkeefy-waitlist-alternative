-- CreateTable
CREATE TABLE "waitlist_users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(100),
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "phone_number" VARCHAR(20),
    "marketing_opt_in" BOOLEAN NOT NULL DEFAULT false,
    "additional_remarks" TEXT,
    "referral_code" VARCHAR(8) NOT NULL,
    "session_token" VARCHAR(64) NOT NULL,
    "session_expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "magic_link_token" VARCHAR(64) NOT NULL,

    CONSTRAINT "waitlist_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referrals" (
    "id" UUID NOT NULL,
    "referrer_id" UUID NOT NULL,
    "referee_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referrals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_users_email_key" ON "waitlist_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_users_referral_code_key" ON "waitlist_users"("referral_code");

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_users_session_token_key" ON "waitlist_users"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "waitlist_users_magic_link_token_key" ON "waitlist_users"("magic_link_token");

-- CreateIndex
CREATE INDEX "waitlist_users_email_idx" ON "waitlist_users"("email");

-- CreateIndex
CREATE INDEX "waitlist_users_referral_code_idx" ON "waitlist_users"("referral_code");

-- CreateIndex
CREATE INDEX "waitlist_users_session_token_idx" ON "waitlist_users"("session_token");

-- CreateIndex
CREATE INDEX "waitlist_users_magic_link_token_idx" ON "waitlist_users"("magic_link_token");

-- CreateIndex
CREATE INDEX "referrals_referrer_id_idx" ON "referrals"("referrer_id");

-- CreateIndex
CREATE INDEX "referrals_referee_id_idx" ON "referrals"("referee_id");

-- CreateIndex
CREATE UNIQUE INDEX "referrals_referrer_id_referee_id_key" ON "referrals"("referrer_id", "referee_id");

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referrer_id_fkey" FOREIGN KEY ("referrer_id") REFERENCES "waitlist_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referrals" ADD CONSTRAINT "referrals_referee_id_fkey" FOREIGN KEY ("referee_id") REFERENCES "waitlist_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
