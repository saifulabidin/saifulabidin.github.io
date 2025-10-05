#!/bin/sh
set -e

echo "🚀 Starting application entrypoint..."

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL..."
until npx prisma db execute --stdin <<< "SELECT 1;" 2>/dev/null; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done
echo "✅ PostgreSQL is up!"

# Run Prisma migrations
echo "🔄 Running Prisma migrations..."
npx prisma migrate deploy

# Check if database is empty and seed if needed
echo "🌱 Checking if database needs seeding..."
if [ "$AUTO_SEED" = "true" ]; then
  echo "🌱 Seeding database..."
  npx prisma db seed || echo "⚠️ Seed failed or already seeded"
fi

echo "✅ Database setup complete!"
echo "🚀 Starting Next.js server..."

# Execute the CMD passed to the container
exec "$@"
