#!/usr/bin/env bash

set -euo pipefail

# Move to the root directory of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

protoc \
  --proto_path=. \
  --proto_path=$(dirname $(dirname "$rd")) \
  "domain/pair/pair.proto" \
  "--go_out=." --go_opt=paths=source_relative
