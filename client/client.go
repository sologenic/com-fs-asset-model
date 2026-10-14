package client

import (
	"context"
	"sync"

	grpcdef "github.com/sologenic/com-fs-asset-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "ASSET_STORE"

var (
	client     grpcdef.AssetListServiceClient
	grpcClient *grpcclient.GRPCClient
	once       sync.Once
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewAssetListServiceClient(grpcClient.Conn)
}

func Client() grpcdef.AssetListServiceClient {
	once.Do(initClient)
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	once.Do(initClient)
	return grpcClient.AuthCtx(ctx)
}
