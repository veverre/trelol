#!/bin/bash
# Script to prepare workspace files for Docker builds (local development)
# This mimics what the CI workflow does automatically

set -e

echo "Preparing workspace files for Docker builds..."

# Prepare api directory
echo "  - Preparing api/"
cp pnpm-lock.yaml api/pnpm-lock.yaml
cat > api/pnpm-workspace.yaml << 'EOF'
packages:
  - .
EOF

# Prepare web directory
echo "  - Preparing web/"
cp pnpm-lock.yaml web/pnpm-lock.yaml
cat > web/pnpm-workspace.yaml << 'EOF'
packages:
  - .
EOF

echo "✓ Done! You can now run 'docker-compose build' or 'docker-compose up --build'"
