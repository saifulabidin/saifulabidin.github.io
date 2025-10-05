#!/bin/bash

# ========================================
# VPS Deployment Script
# ========================================

set -e

echo "🚀 Starting VPS Deployment..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ Error: .env file not found!${NC}"
    echo "Please create .env file from .env.vps template"
    echo "Run: cp .env.vps .env"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed!${NC}"
    echo "Install Docker first: https://docs.docker.com/engine/install/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose is not installed!${NC}"
    echo "Install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo -e "${BLUE}📦 Building Docker images...${NC}"
docker compose build --no-cache

echo -e "${BLUE}🗃️  Starting PostgreSQL database...${NC}"
docker compose up -d postgres

echo -e "${BLUE}⏳ Waiting for PostgreSQL to be ready...${NC}"
sleep 10

echo -e "${BLUE}🚀 Starting web application...${NC}"
docker compose up -d web

echo -e "${BLUE}🌐 Starting Caddy reverse proxy...${NC}"
docker compose up -d caddy

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "📊 Check service status:"
echo "  docker compose ps"
echo ""
echo "📝 View logs:"
echo "  docker compose logs -f"
echo ""
echo "🌐 Your site should be available at:"
echo "  https://sabidzpro.is-a.dev"
echo ""
echo "🔧 Useful commands:"
echo "  docker compose down       - Stop all services"
echo "  docker compose restart    - Restart services"
echo "  docker compose logs web   - View app logs"
echo "  docker compose exec web sh - Access container shell"
