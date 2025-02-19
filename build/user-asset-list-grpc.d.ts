/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { UserAssetList, UserAssetLists, UserAssetStatus } from "./user-asset-list";
export declare const protobufPackage = "asset";
export interface UserAssetListKey {
    Key: string;
}
export interface UserAssetListQuery {
    Network: Network;
    Offset?: number | undefined;
    AccountID?: string | undefined;
    Wallet?: string | undefined;
    AssetKey?: string | undefined;
    Status?: UserAssetStatus | undefined;
    Visible?: boolean | undefined;
}
export declare const UserAssetListKey: {
    encode(message: UserAssetListKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetListKey;
    fromJSON(object: any): UserAssetListKey;
    toJSON(message: UserAssetListKey): unknown;
    create<I extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K in Exclude<keyof I, "Key">]: never; }>(base?: I | undefined): UserAssetListKey;
    fromPartial<I_1 extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Key">]: never; }>(object: I_1): UserAssetListKey;
};
export declare const UserAssetListQuery: {
    encode(message: UserAssetListQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetListQuery;
    fromJSON(object: any): UserAssetListQuery;
    toJSON(message: UserAssetListQuery): unknown;
    create<I extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof UserAssetListQuery>]: never; }>(base?: I | undefined): UserAssetListQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserAssetListQuery>]: never; }>(object: I_1): UserAssetListQuery;
};
export type UserAssetListServiceService = typeof UserAssetListServiceService;
export declare const UserAssetListServiceService: {
    readonly get: {
        readonly path: "/asset.UserAssetListService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetListKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetListKey;
        readonly responseSerialize: (value: UserAssetList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetList;
    };
    readonly list: {
        readonly path: "/asset.UserAssetListService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetListQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetListQuery;
        readonly responseSerialize: (value: UserAssetLists) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetLists;
    };
    readonly upsert: {
        readonly path: "/asset.UserAssetListService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetList) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetList;
        readonly responseSerialize: (value: UserAssetListKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetListKey;
    };
};
export interface UserAssetListServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<UserAssetListKey, UserAssetList>;
    list: handleUnaryCall<UserAssetListQuery, UserAssetLists>;
    upsert: handleUnaryCall<UserAssetList, UserAssetListKey>;
}
export interface UserAssetListServiceClient extends Client {
    get(request: UserAssetListKey, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    get(request: UserAssetListKey, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    get(request: UserAssetListKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    list(request: UserAssetListQuery, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    list(request: UserAssetListQuery, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    list(request: UserAssetListQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    upsert(request: UserAssetList, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
    upsert(request: UserAssetList, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
    upsert(request: UserAssetList, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
}
export declare const UserAssetListServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserAssetListServiceClient;
    service: typeof UserAssetListServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
