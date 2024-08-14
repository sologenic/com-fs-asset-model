import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "asset";
export declare enum AssetStatus {
    ASSET_STATUS_DO_NOT_USE = 0,
    /** DO_NOT_LIST - Organization admin only */
    DO_NOT_LIST = 1,
    /** REQUEST_LISTING - Organization admin only */
    REQUEST_LISTING = 2,
    /** LISTED - Super admin only */
    LISTED = 3,
    /** SUPER_ADMIN_DO_NOT_LIST - Super admin only */
    SUPER_ADMIN_DO_NOT_LIST = 4,
    OUTDATED_ASSET_VERSION = 5,
    UNRECOGNIZED = -1
}
export declare function assetStatusFromJSON(object: any): AssetStatus;
export declare function assetStatusToJSON(object: AssetStatus): string;
export declare enum Reason {
    REASON_DO_NOT_USE = 0,
    DUPLICATE = 1,
    UNWANTED_ASSET = 2,
    UNSTABLE_ASSET = 3,
    UNRECOGNIZED = -1
}
export declare function reasonFromJSON(object: any): Reason;
export declare function reasonToJSON(object: Reason): string;
export declare enum AssetType {
    ASSET_TYPE_DO_NOT_USE = 0,
    STOCK = 1,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
export declare enum UserAssetStatus {
    USER_ASSET_STATUS_DO_NOT_USE = 0,
    NOT_WHITELISTED = 1,
    WHITELISTING_REQUESTED = 2,
    WHITELISTED = 3,
    OUTDATED_VERSION = 4,
    UNRECOGNIZED = -1
}
export declare function userAssetStatusFromJSON(object: any): UserAssetStatus;
export declare function userAssetStatusToJSON(object: UserAssetStatus): string;
export declare enum UserJurisdictionStatus {
    USER_JURISDICTION_STATUS_DO_NOT_USE = 0,
    ALLOWED = 1,
    NOT_ALLOWED = 2,
    UNRECOGNIZED = -1
}
export declare function userJurisdictionStatusFromJSON(object: any): UserJurisdictionStatus;
export declare function userJurisdictionStatusToJSON(object: UserJurisdictionStatus): string;
export interface Asset {
    /** Key combination: Currency-OrganizationID-Version */
    OrganizationID: string;
    Status: AssetStatus;
    Reason?: Reason | undefined;
    /** list of jurisdictions where this asset is allowed to be traded */
    Jurisdictions: string[];
    Network: string;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
    Type: AssetType;
    /** Flattened StockProperties */
    Symbol: string;
    Currency: string;
    Version: string;
    Precision: number;
    Name: string;
    ExchangeTickerSymbol: string;
    Exchange: string;
    Description: string;
}
export interface Assets {
    Assets: Asset[];
}
export interface UserAssetList {
    /** Key combination: Currency-OrganizationID-Version-UserID */
    UserID: string;
    Wallet: string;
    /** Stable Key: "Currency-OrganizationID-Version" */
    AssetID: string;
    Status: UserAssetStatus;
    Network: string;
    Visible: boolean;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
}
export interface UserAssetLists {
    UserAssetLists: UserAssetList[];
}
export interface Jurisdiction {
    /** UUID */
    ID: string;
    OrganizationID: string;
    Name: string;
    Description: string;
    ExternalID: string;
    Network: string;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
}
export interface Jurisdictions {
    Jurisdictions: Jurisdiction[];
}
export interface UserJurisdiction {
    /** Key combination: UserID-Wallet-JurisdictionID */
    UserID: string;
    Wallet: string;
    JurisdictionID: string;
    Status: UserJurisdictionStatus;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
    Network: string;
}
export interface UserJurisdictions {
    UserJurisdictions: UserJurisdiction[];
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Jurisdictions?: string[] | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Description?: string | undefined;
    } & {
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Jurisdictions?: (string[] & string[] & { [K in Exclude<keyof I["Jurisdictions"], keyof string[]>]: never; }) | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Description?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Jurisdictions?: string[] | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Description?: string | undefined;
    } & {
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Jurisdictions?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Jurisdictions"], keyof string[]>]: never; }) | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        Description?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
};
export declare const Assets: {
    encode(message: Assets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assets;
    fromJSON(object: any): Assets;
    toJSON(message: Assets): unknown;
    create<I extends {
        Assets?: {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[] & ({
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        } & {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: (string[] & string[] & { [K in Exclude<keyof I["Assets"][number]["Jurisdictions"], keyof string[]>]: never; }) | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_2 in Exclude<keyof I["Assets"], keyof {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "Assets">]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Assets?: {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[] & ({
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        } & {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["Assets"][number]["Jurisdictions"], keyof string[]>]: never; }) | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_6 in Exclude<keyof I_1["Assets"], keyof {
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Jurisdictions?: string[] | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            Description?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "Assets">]: never; }>(object: I_1): Assets;
};
export declare const UserAssetList: {
    encode(message: UserAssetList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetList;
    fromJSON(object: any): UserAssetList;
    toJSON(message: UserAssetList): unknown;
    create<I extends {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        AssetID?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Network?: string | undefined;
        Visible?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        AssetID?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Network?: string | undefined;
        Visible?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof UserAssetList>]: never; }>(base?: I | undefined): UserAssetList;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        AssetID?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Network?: string | undefined;
        Visible?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        AssetID?: string | undefined;
        Status?: UserAssetStatus | undefined;
        Network?: string | undefined;
        Visible?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserAssetList>]: never; }>(object: I_1): UserAssetList;
};
export declare const UserAssetLists: {
    encode(message: UserAssetLists, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetLists;
    fromJSON(object: any): UserAssetLists;
    toJSON(message: UserAssetLists): unknown;
    create<I extends {
        UserAssetLists?: {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_1 in Exclude<keyof I["UserAssetLists"], keyof {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "UserAssetLists">]: never; }>(base?: I | undefined): UserAssetLists;
    fromPartial<I_1 extends {
        UserAssetLists?: {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K_3 in Exclude<keyof I_1["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_4 in Exclude<keyof I_1["UserAssetLists"], keyof {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            AssetID?: string | undefined;
            Status?: UserAssetStatus | undefined;
            Network?: string | undefined;
            Visible?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "UserAssetLists">]: never; }>(object: I_1): UserAssetLists;
};
export declare const Jurisdiction: {
    encode(message: Jurisdiction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Jurisdiction;
    fromJSON(object: any): Jurisdiction;
    toJSON(message: Jurisdiction): unknown;
    create<I extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        ExternalID?: string | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        ExternalID?: string | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof Jurisdiction>]: never; }>(base?: I | undefined): Jurisdiction;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        ExternalID?: string | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        ExternalID?: string | undefined;
        Network?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Jurisdiction>]: never; }>(object: I_1): Jurisdiction;
};
export declare const Jurisdictions: {
    encode(message: Jurisdictions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Jurisdictions;
    fromJSON(object: any): Jurisdictions;
    toJSON(message: Jurisdictions): unknown;
    create<I extends {
        Jurisdictions?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        Jurisdictions?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["Jurisdictions"][number], keyof Jurisdiction>]: never; })[] & { [K_1 in Exclude<keyof I["Jurisdictions"], keyof {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "Jurisdictions">]: never; }>(base?: I | undefined): Jurisdictions;
    fromPartial<I_1 extends {
        Jurisdictions?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        Jurisdictions?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K_3 in Exclude<keyof I_1["Jurisdictions"][number], keyof Jurisdiction>]: never; })[] & { [K_4 in Exclude<keyof I_1["Jurisdictions"], keyof {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            ExternalID?: string | undefined;
            Network?: string | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "Jurisdictions">]: never; }>(object: I_1): Jurisdictions;
};
export declare const UserJurisdiction: {
    encode(message: UserJurisdiction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserJurisdiction;
    fromJSON(object: any): UserJurisdiction;
    toJSON(message: UserJurisdiction): unknown;
    create<I extends {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        JurisdictionID?: string | undefined;
        Status?: UserJurisdictionStatus | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: string | undefined;
    } & {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        JurisdictionID?: string | undefined;
        Status?: UserJurisdictionStatus | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UserJurisdiction>]: never; }>(base?: I | undefined): UserJurisdiction;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        JurisdictionID?: string | undefined;
        Status?: UserJurisdictionStatus | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: string | undefined;
    } & {
        UserID?: string | undefined;
        Wallet?: string | undefined;
        JurisdictionID?: string | undefined;
        Status?: UserJurisdictionStatus | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Network?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserJurisdiction>]: never; }>(object: I_1): UserJurisdiction;
};
export declare const UserJurisdictions: {
    encode(message: UserJurisdictions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserJurisdictions;
    fromJSON(object: any): UserJurisdictions;
    toJSON(message: UserJurisdictions): unknown;
    create<I extends {
        UserJurisdictions?: {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[] | undefined;
    } & {
        UserJurisdictions?: ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[] & ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        } & {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        } & { [K in Exclude<keyof I["UserJurisdictions"][number], keyof UserJurisdiction>]: never; })[] & { [K_1 in Exclude<keyof I["UserJurisdictions"], keyof {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "UserJurisdictions">]: never; }>(base?: I | undefined): UserJurisdictions;
    fromPartial<I_1 extends {
        UserJurisdictions?: {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[] | undefined;
    } & {
        UserJurisdictions?: ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[] & ({
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        } & {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["UserJurisdictions"][number], keyof UserJurisdiction>]: never; })[] & { [K_4 in Exclude<keyof I_1["UserJurisdictions"], keyof {
            UserID?: string | undefined;
            Wallet?: string | undefined;
            JurisdictionID?: string | undefined;
            Status?: UserJurisdictionStatus | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Network?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "UserJurisdictions">]: never; }>(object: I_1): UserJurisdictions;
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
