#!/bin/sh
set -e

echo "Running database seed..."
npx prisma db seed

echo "Starting Next.js server..."
exec "$@"