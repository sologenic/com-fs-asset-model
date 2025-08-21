import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "metadata";
export declare enum Network {
    /** NETWORK_DO_NOT_USE - Avoid a default value since a default and a bug are not distinguishable */
    NETWORK_DO_NOT_USE = 0,
    MAINNET = 1,
    TESTNET = 2,
    DEVNET = 3,
    UNRECOGNIZED = -1
}
export declare function networkFromJSON(object: any): Network;
export declare function networkToJSON(object: Network): string;
export interface MetaData {
    /** mainnet, testnet, devnet, can also be some virtually defined network (extra devnet for testing, extra mainnnet node for scanning historical blocks, etc) */
    Network: Network;
    UpdatedAt: Date | undefined;
    /** Internal to listener */
    CreatedAt: Date | undefined;
    UpdatedByAccount?: string | undefined;
    MetaDataDetails?: MetaDataDetails | undefined;
}
export interface MetaDataDetails {
    /** required */
    name: string;
    /** required */
    description: string;
    /** required */
    image: string;
    /** required */
    externalUrl: string;
    /** required */
    addressLine1: string;
    /** optional */
    addressLine2?: string | undefined;
    /** required */
    city: string;
    /** optional */
    region?: string | undefined;
    /** optional */
    postalCode?: string | undefined;
    /** required */
    country: string;
    /** required */
    yearFounded: number;
    /** required */
    licensed: boolean;
    /** optional */
    licenseCountry?: string | undefined;
    /** optional */
    licenseNumber?: string | undefined;
    /** optional */
    phone?: string | undefined;
    /** optional */
    email?: string | undefined;
    /** optional (list of links) */
    socialMediaLinks: string[];
    /** JSON array string */
    keyClients?: string | undefined;
    /** JSON array string */
    press?: string | undefined;
}
export declare const MetaData: {
    encode(message: MetaData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetaData;
    fromJSON(object: any): MetaData;
    toJSON(message: MetaData): unknown;
    create<I extends {
        Network?: Network | undefined;
        UpdatedAt?: Date | undefined;
        CreatedAt?: Date | undefined;
        UpdatedByAccount?: string | undefined;
        MetaDataDetails?: {
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: string[] | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } | undefined;
    } & {
        Network?: Network | undefined;
        UpdatedAt?: Date | undefined;
        CreatedAt?: Date | undefined;
        UpdatedByAccount?: string | undefined;
        MetaDataDetails?: ({
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: string[] | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } & {
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: (string[] & string[] & { [K in Exclude<keyof I["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } & { [K_1 in Exclude<keyof I["MetaDataDetails"], keyof MetaDataDetails>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MetaData>]: never; }>(base?: I | undefined): MetaData;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        UpdatedAt?: Date | undefined;
        CreatedAt?: Date | undefined;
        UpdatedByAccount?: string | undefined;
        MetaDataDetails?: {
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: string[] | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } | undefined;
    } & {
        Network?: Network | undefined;
        UpdatedAt?: Date | undefined;
        CreatedAt?: Date | undefined;
        UpdatedByAccount?: string | undefined;
        MetaDataDetails?: ({
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: string[] | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } & {
            name?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            externalUrl?: string | undefined;
            addressLine1?: string | undefined;
            addressLine2?: string | undefined;
            city?: string | undefined;
            region?: string | undefined;
            postalCode?: string | undefined;
            country?: string | undefined;
            yearFounded?: number | undefined;
            licensed?: boolean | undefined;
            licenseCountry?: string | undefined;
            licenseNumber?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            socialMediaLinks?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
            keyClients?: string | undefined;
            press?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["MetaDataDetails"], keyof MetaDataDetails>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MetaData>]: never; }>(object: I_1): MetaData;
};
export declare const MetaDataDetails: {
    encode(message: MetaDataDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetaDataDetails;
    fromJSON(object: any): MetaDataDetails;
    toJSON(message: MetaDataDetails): unknown;
    create<I extends {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        externalUrl?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        country?: string | undefined;
        yearFounded?: number | undefined;
        licensed?: boolean | undefined;
        licenseCountry?: string | undefined;
        licenseNumber?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        socialMediaLinks?: string[] | undefined;
        keyClients?: string | undefined;
        press?: string | undefined;
    } & {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        externalUrl?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        country?: string | undefined;
        yearFounded?: number | undefined;
        licensed?: boolean | undefined;
        licenseCountry?: string | undefined;
        licenseNumber?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        socialMediaLinks?: (string[] & string[] & { [K in Exclude<keyof I["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
        keyClients?: string | undefined;
        press?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MetaDataDetails>]: never; }>(base?: I | undefined): MetaDataDetails;
    fromPartial<I_1 extends {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        externalUrl?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        country?: string | undefined;
        yearFounded?: number | undefined;
        licensed?: boolean | undefined;
        licenseCountry?: string | undefined;
        licenseNumber?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        socialMediaLinks?: string[] | undefined;
        keyClients?: string | undefined;
        press?: string | undefined;
    } & {
        name?: string | undefined;
        description?: string | undefined;
        image?: string | undefined;
        externalUrl?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        postalCode?: string | undefined;
        country?: string | undefined;
        yearFounded?: number | undefined;
        licensed?: boolean | undefined;
        licenseCountry?: string | undefined;
        licenseNumber?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        socialMediaLinks?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
        keyClients?: string | undefined;
        press?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof MetaDataDetails>]: never; }>(object: I_1): MetaDataDetails;
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
