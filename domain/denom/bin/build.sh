#!/usr/bin/env bash

set -euo pipefail

# Move to the root directory of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

protoc \
  --proto_path=. \
  --proto_path=$(dirname $(dirname "$rd")) \
  "domain/denom/denom.proto" \
  --go_out=. --go_opt=paths=source_relative

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --proto_path=. \
  --proto_path=$(dirname $(dirname "$rd")) \
  --ts_proto_out=. \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=outputServices=grpc-js \
  domain/denom/denom.proto