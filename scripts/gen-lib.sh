#!/bin/sh

# Usage check
if [ -z "$1" ]; then
  echo "❌ Library name missing"
  echo "Usage: ./scripts/gen-lib.sh <library-name>"
  exit 1
fi

LIB_NAME=$1

npx nx generate @nx/angular:library "$LIB_NAME" \
  --buildable \
  --unitTestRunner=vitest-angular
