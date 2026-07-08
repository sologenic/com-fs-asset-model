/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Asset, Assets, AssetStatus, AssetType, ExtensionType, UserAssetList, UserAssetLists, UserAssetStatus } from "./asset";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "asset";
export interface AssetKey {
    Key: string;
}
export interface AssetQuery {
    Network: Network;
    Offset?: number | undefined;
    /** Compliance filter: list assets allowed in these jurisdictions */
    JurisdictionIDs: string[];
    OrganizationID?: string | undefined;
    Status?: AssetStatus | undefined;
    AssetType?: AssetType | undefined;
    /** On-chain issuer address (distinct from Denom.Issuer) */
    SmartContractIssuerAddr?: string | undefined;
    Limit?: number | undefined;
    /** Asset Extension type filter */
    ExtensionType?: ExtensionType | undefined;
    /** Asset Denom properties filter */
    DenomIssuer?: string | undefined;
    DenomSubunit?: string | undefined;
    IsPromoted?: boolean | undefined;
}
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
    OrganizationID?: string | undefined;
}
export interface CountResponse {
    Count: number;
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
        SmartContractIssuerAddr?: string | undefined;
        Limit?: number | undefined;
        ExtensionType?: ExtensionType | undefined;
        DenomIssuer?: string | undefined;
        DenomSubunit?: string | undefined;
        IsPromoted?: boolean | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        SmartContractIssuerAddr?: string | undefined;
        Limit?: number | undefined;
        ExtensionType?: ExtensionType | undefined;
        DenomIssuer?: string | undefined;
        DenomSubunit?: string | undefined;
        IsPromoted?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof AssetQuery>]: never; }>(base?: I | undefined): AssetQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: string[] | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        SmartContractIssuerAddr?: string | undefined;
        Limit?: number | undefined;
        ExtensionType?: ExtensionType | undefined;
        DenomIssuer?: string | undefined;
        DenomSubunit?: string | undefined;
        IsPromoted?: boolean | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        AssetType?: AssetType | undefined;
        SmartContractIssuerAddr?: string | undefined;
        Limit?: number | undefined;
        ExtensionType?: ExtensionType | undefined;
        DenomIssuer?: string | undefined;
        DenomSubunit?: string | undefined;
        IsPromoted?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof AssetQuery>]: never; }>(object: I_1): AssetQuery;
};
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
        OrganizationID?: string | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UserAssetListQuery>]: never; }>(base?: I | undefined): UserAssetListQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
        OrganizationID?: string | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Visible?: boolean | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserAssetListQuery>]: never; }>(object: I_1): UserAssetListQuery;
};
export declare const CountResponse: {
    encode(message: CountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse;
    fromJSON(object: any): CountResponse;
    toJSON(message: CountResponse): unknown;
    create<I extends {
        Count?: number | undefined;
    } & {
        Count?: number | undefined;
    } & { [K in Exclude<keyof I, "Count">]: never; }>(base?: I | undefined): CountResponse;
    fromPartial<I_1 extends {
        Count?: number | undefined;
    } & {
        Count?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Count">]: never; }>(object: I_1): CountResponse;
};
export type AssetListServiceService = typeof AssetListServiceService;
export declare const AssetListServiceService: {
    /** Upsert on Asset */
    readonly upsertAsset: {
        readonly path: "/asset.AssetListService/UpsertAsset";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Asset) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Asset;
        readonly responseSerialize: (value: AssetKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AssetKey;
    };
    /** Get Asset by Key */
    readonly getAsset: {
        readonly path: "/asset.AssetListService/GetAsset";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetKey;
        readonly responseSerialize: (value: Asset) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Asset;
    };
    /** Get all Assets for a given filter */
    readonly getAssets: {
        readonly path: "/asset.AssetListService/GetAssets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetQuery;
        readonly responseSerialize: (value: Assets) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Assets;
    };
    /** Upsert on UserAssetList */
    readonly upsertUserAssetList: {
        readonly path: "/asset.AssetListService/UpsertUserAssetList";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetList) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetList;
        readonly responseSerialize: (value: UserAssetListKey) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetListKey;
    };
    /** Get UserAssetList by Key */
    readonly getUserAssetList: {
        readonly path: "/asset.AssetListService/GetUserAssetList";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetListKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetListKey;
        readonly responseSerialize: (value: UserAssetList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetList;
    };
    /** Get all UserAssetList for a given filter */
    readonly getUserAssetLists: {
        readonly path: "/asset.AssetListService/GetUserAssetLists";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserAssetListQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserAssetListQuery;
        readonly responseSerialize: (value: UserAssetLists) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAssetLists;
    };
    /** Count all Assets for a given filter */
    readonly countAssets: {
        readonly path: "/asset.AssetListService/CountAssets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetQuery;
        readonly responseSerialize: (value: CountResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CountResponse;
    };
};
export interface AssetListServiceServer extends UntypedServiceImplementation {
    /** Upsert on Asset */
    upsertAsset: handleUnaryCall<Asset, AssetKey>;
    /** Get Asset by Key */
    getAsset: handleUnaryCall<AssetKey, Asset>;
    /** Get all Assets for a given filter */
    getAssets: handleUnaryCall<AssetQuery, Assets>;
    /** Upsert on UserAssetList */
    upsertUserAssetList: handleUnaryCall<UserAssetList, UserAssetListKey>;
    /** Get UserAssetList by Key */
    getUserAssetList: handleUnaryCall<UserAssetListKey, UserAssetList>;
    /** Get all UserAssetList for a given filter */
    getUserAssetLists: handleUnaryCall<UserAssetListQuery, UserAssetLists>;
    /** Count all Assets for a given filter */
    countAssets: handleUnaryCall<AssetQuery, CountResponse>;
}
export interface AssetListServiceClient extends Client {
    /** Upsert on Asset */
    upsertAsset(request: Asset, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
    upsertAsset(request: Asset, metadata: Metadata, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
    upsertAsset(request: Asset, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AssetKey) => void): ClientUnaryCall;
    /** Get Asset by Key */
    getAsset(request: AssetKey, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    getAsset(request: AssetKey, metadata: Metadata, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    getAsset(request: AssetKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Asset) => void): ClientUnaryCall;
    /** Get all Assets for a given filter */
    getAssets(request: AssetQuery, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    getAssets(request: AssetQuery, metadata: Metadata, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    getAssets(request: AssetQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Assets) => void): ClientUnaryCall;
    /** Upsert on UserAssetList */
    upsertUserAssetList(request: UserAssetList, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
    upsertUserAssetList(request: UserAssetList, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
    upsertUserAssetList(request: UserAssetList, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetListKey) => void): ClientUnaryCall;
    /** Get UserAssetList by Key */
    getUserAssetList(request: UserAssetListKey, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    getUserAssetList(request: UserAssetListKey, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    getUserAssetList(request: UserAssetListKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetList) => void): ClientUnaryCall;
    /** Get all UserAssetList for a given filter */
    getUserAssetLists(request: UserAssetListQuery, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    getUserAssetLists(request: UserAssetListQuery, metadata: Metadata, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    getUserAssetLists(request: UserAssetListQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAssetLists) => void): ClientUnaryCall;
    /** Count all Assets for a given filter */
    countAssets(request: AssetQuery, callback: (error: ServiceError | null, response: CountResponse) => void): ClientUnaryCall;
    countAssets(request: AssetQuery, metadata: Metadata, callback: (error: ServiceError | null, response: CountResponse) => void): ClientUnaryCall;
    countAssets(request: AssetQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CountResponse) => void): ClientUnaryCall;
}
export declare const AssetListServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AssetListServiceClient;
    service: typeof AssetListServiceService;
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
