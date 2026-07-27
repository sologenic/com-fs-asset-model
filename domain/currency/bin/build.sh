#!/usr/bin/env bash

set -euo pipefail
 
protoc \
  --proto_path=. "currency.proto" \
  --proto_path=$(dirname $(dirname "$rd")) \
  "--go_out=." --go_opt=paths=source_relative