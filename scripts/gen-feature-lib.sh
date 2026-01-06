#!/bin/sh

if [ -z "$1" ]; then
  echo "Usage: ./scripts/gen-feature-lib.sh <name>"
  exit 1
fi

NAME=$1
LIB_NAME="feature-$NAME"

npx nx g @nx/angular:library "$LIB_NAME" \
  --directory=features \
  --buildable \
  --unitTestRunner=vitest-angular
