#!/bin/sh

echo "Running database seed..."
npx prisma db seed || echo "Seed failed or already completed, continuing..."

echo "Starting Next.js server..."
exec su nextjs -c "$@"