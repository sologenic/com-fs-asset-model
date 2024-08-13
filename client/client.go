package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-asset-model"
	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
)

const endpoint = "ASSET_LIST_STORE"

var (
	client     *grpcdef.AssetListServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	cl := grpcdef.NewAssetListServiceClient(grpcClient.Conn)
	client = &cl
}

func Client() *grpcdef.AssetListServiceClient {
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
