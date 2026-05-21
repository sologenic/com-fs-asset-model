# Asset List

The asset list proto provides all the functionality required to interact with the asset store.

## Building the protos

Run the script

```sh
./bin/build.sh
```

Validation rules use `buf/validate/validate.proto`, vendored under [`third_party/buf/validate/validate.proto`](third_party/buf/validate/validate.proto). The Go module depends on `buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go` so generated `asset.pb.go` can register those options.

