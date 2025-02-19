package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-asset-model"
	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
)

const endpoint = "ASSET_STORE"

var (
	client     grpcdef.AssetServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewAssetServiceClient(grpcClient.Conn)
}

func Client() grpcdef.AssetServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
