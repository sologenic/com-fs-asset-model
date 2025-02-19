/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Asset, Assets, AssetStatus, AssetType } from "./asset";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "asset";
export interface AssetKey {
    Key: string;
}
export interface AssetQuery {
    Network: Network;
    Offset?: number | undefined;
    JurisdictionIDs: string[];
    OrganizationID?: string | undefined;
    Status?: AssetStatus | undefined;
    AssetType?: AssetType | undefined;
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    Symbol?: string | undefined;
    Version?: string | undefined;
    Issuer?: string | undefined;
}
export declare const AssetKey: {
    encode(message: AssetKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetKey;
    fromJSON(object: any): AssetKey;
    toJSON(message: AssetKey): unknown;
    create<I extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K in Exclude<keyof I, "Key">]: never; }>(base?: I | undefined): AssetKey;
    fromPartial<I_1 extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Key">]: never; }>(object: I_1): AssetKey;
};
export declare const AssetQuery: {
    encode(message: AssetQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetQuery;
    fromJSON(object: any): AssetQuery;
    toJSON(message: AssetQuery): unknown;
    create<I extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: string[] | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Symbol?: string | undefined;
        Version?: string | undefined;
        Issuer?: string | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Symbol?: string | undefined;
        Version?: string | undefined;
        Issuer?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof AssetQuery>]: never; }>(base?: I | undefined): AssetQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: string[] | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Symbol?: string | undefined;
        Version?: string | undefined;
        Issuer?: string | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Symbol?: string | undefined;
        Version?: string | undefined;
        Issuer?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof AssetQuery>]: never; }>(object: I_1): AssetQuery;
};
export type AssetServiceService = typeof AssetServiceService;
export declare const AssetServiceService: {
    readonly get: {
        readonly path: "/asset.AssetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetKey;
        readonly responseSerialize: (value: Asset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Asset;
    };
    readonly list: {
        readonly path: "/asset.AssetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetQuery;
        readonly responseSerialize: (value: Assets) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Assets;
    };
    readonly upsert: {
        readonly path: "/asset.AssetService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Asset) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Asset;
        readonly responseSerialize: (value: AssetKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AssetKey;
    };
};
export interface AssetServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<AssetKey, Asset>;
    list: handleUnaryCall<AssetQuery, Assets>;
    upsert: handleUnaryCall<Asset, AssetKey>;
}
export interface AssetServiceClient extends Client {
    get(request: AssetKey, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    get(request: AssetKey, metadata: Metadata, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    get(request: AssetKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    list(request: AssetQuery, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    list(request: AssetQuery, metadata: Metadata, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    list(request: AssetQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    upsert(request: Asset, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
    upsert(request: Asset, metadata: Metadata, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
    upsert(request: Asset, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
}
export declare const AssetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AssetServiceClient;
    service: typeof AssetServiceService;
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
