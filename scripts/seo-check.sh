#!/bin/bash

# SEO Verification & Testing Script for sabidzpro.my.id

echo "SEO Verification Script"
echo "=========================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SITE_URL="https://sabidzpro.is-a.dev"
LOCAL_URL="http://localhost:3000"

echo "Pre-deployment Checklist:"
echo ""

# 1. Check if Next.js build is successful
echo -n "1. Checking Next.js build... "
if bun run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# 2. Check if essential SEO files exist
echo -n "2. Checking robots.txt... "
if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✓ Found${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "3. Checking humans.txt... "
if [ -f "public/humans.txt" ]; then
    echo -e "${GREEN}✓ Found${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "4. Checking sitemap.ts... "
if [ -f "app/sitemap.ts" ]; then
    echo -e "${GREEN}✓ Found${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "5. Checking manifest.ts... "
if [ -f "app/manifest.ts" ]; then
    echo -e "${GREEN}✓ Found${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo ""
echo "SEO Metadata Check:"
echo ""

# Check layout.tsx for important meta tags
echo -n "6. Checking Google verification... "
if grep -q "VkTaSN1dEMEteIx2hvauHQ0RFQ1nrV1gbjQUgrbhX60" app/layout.tsx; then
    echo -e "${GREEN}✓ Present${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "7. Checking keywords meta... "
if grep -q "keywords" app/layout.tsx; then
    echo -e "${GREEN}✓ Present${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "8. Checking structured data... "
if grep -q "@context.*schema.org" app/layout.tsx; then
    echo -e "${GREEN}✓ Present${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo -n "9. Checking Open Graph tags... "
if grep -q "openGraph" app/layout.tsx; then
    echo -e "${GREEN}✓ Present${NC}"
else
    echo -e "${RED}✗ Missing${NC}"
fi

echo ""
echo "Post-Deployment Actions:"
echo ""
echo "After deploying to production, complete these steps:"
echo ""
echo "1. ${YELLOW}Google Search Console${NC}"
echo "   → Visit: https://search.google.com/search-console"
echo "   → Add property: ${SITE_URL}"
echo "   → Verify with meta tag: VkTaSN1dEMEteIx2hvauHQ0RFQ1nrV1gbjQUgrbhX60"
echo "   → Submit sitemap: ${SITE_URL}/sitemap.xml"
echo ""

echo "2. ${YELLOW}Test Your Website${NC}"
echo "   → PageSpeed Insights: https://pagespeed.web.dev/"
echo "   → Mobile-Friendly Test: https://search.google.com/test/mobile-friendly"
echo "   → Rich Results Test: https://search.google.com/test/rich-results"
echo "   → Schema Markup Validator: https://validator.schema.org/"
echo ""

echo "3. ${YELLOW}Submit to Search Engines${NC}"
echo "   → Google: Submit via Search Console"
echo "   → Bing: https://www.bing.com/webmasters"
echo "   → Yandex: https://webmaster.yandex.com"
echo ""

echo "4. ${YELLOW}Share on Social Media${NC}"
echo "   → LinkedIn: Update profile with portfolio link"
echo "   → Twitter/X: Share portfolio tweet"
echo "   → GitHub: Add to profile README"
echo "   → dev.to: Create introduction post"
echo ""

echo "5. ${YELLOW}Analytics Setup${NC}"
echo "   → Google Analytics 4: Add tracking code"
echo "   → Setup conversion goals"
echo "   → Monitor Core Web Vitals"
echo ""

echo "SEO verification complete!"
echo ""
echo "For detailed SEO guide, read: SEO-OPTIMIZATION-GUIDE.md"
echo ""
