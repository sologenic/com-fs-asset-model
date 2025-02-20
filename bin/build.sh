#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

protoc \
--proto_path=. "asset.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative \
--go-grpc_opt=require_unimplemented_servers=false \
"--go-grpc_out=." --go-grpc_opt=paths=source_relative

protoc \
--proto_path=. "asset-grpc.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative \
--go-grpc_opt=require_unimplemented_servers=false \
"--go-grpc_out=." --go-grpc_opt=paths=source_relative

rm -rf node_modules
npm i

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
--proto_path=. \
--proto_path=$(dirname $(dirname "$rd")) \
--ts_proto_out=. \
--ts_proto_opt=esModuleInterop=true \
--ts_proto_opt=outputServices=grpc-js \
asset.proto

npm run build-ts
rm -rf node_modules
git add build/

git add *.ts
