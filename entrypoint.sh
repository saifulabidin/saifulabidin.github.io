#!/bin/sh
set -e

echo "🚀 Starting application entrypoint..."

# Extract database connection info from DATABASE_URL
DB_HOST=$(echo $DATABASE_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
DB_PORT=$(echo $DATABASE_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
DB_USER=$(echo $DATABASE_URL | sed -n 's/.*:\/\/\([^:]*\):.*/\1/p')
DB_NAME=$(echo $DATABASE_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

echo "⏳ Waiting for PostgreSQL at $DB_HOST:$DB_PORT..."
MAX_RETRIES=30
RETRY=0

# Wait for PostgreSQL using pg_isready  
until pg_isready -h "$DB_HOST" -p "${DB_PORT:-5432}" -U "$DB_USER" > /dev/null 2>&1; do
  RETRY=$((RETRY+1))
  if [ $RETRY -ge $MAX_RETRIES ]; then
    echo "❌ PostgreSQL did not become ready in time!"
    exit 1
  fi
  echo "PostgreSQL is unavailable (attempt $RETRY/$MAX_RETRIES) - sleeping..."
  sleep 2
done

echo "✅ PostgreSQL is up and ready!"

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
