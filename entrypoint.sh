#!/bin/sh
# Biar script langsung berhenti kalo ada command yang gagal
set -e

echo "🌱 Running database seed..."
# Jalankan seed. Kita pake --skip-generate karena prisma client udah di-generate di build step
npx prisma db seed --skip-generate

echo "🚀 Starting Next.js server..."
# Jalankan command yang ada di CMD di Dockerfile (yaitu "node server.js")
exec "$@"