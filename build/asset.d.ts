import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "asset";
export declare enum AssetStatus {
    ASSET_STATUS_DO_NOT_USE = 0,
    /** DO_NOT_LIST - BROKER_ASSET_ADMINISTRATOR only */
    DO_NOT_LIST = 1,
    /** REQUEST_LISTING - BROKER_ASSET_ADMINISTRATOR only */
    REQUEST_LISTING = 2,
    /** LISTED - ORGANIZATION_ASSET_ADMINISTRATOR only */
    LISTED = 3,
    /** ORGANIZATION_ADMIN_DO_NOT_LIST - ORGANIZATION_ASSET_ADMINISTRATOR only */
    ORGANIZATION_ADMIN_DO_NOT_LIST = 4,
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
    BOND = 2,
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
export declare enum Exchange {
    EXCHANGE_DO_NOT_USE = 0,
    NASDAQ = 1,
    NYSE = 2,
    UNRECOGNIZED = -1
}
export declare function exchangeFromJSON(object: any): Exchange;
export declare function exchangeToJSON(object: Exchange): string;
export interface AssetDetails {
    /** Key combination: Currency-OrganizationID */
    ID: string;
    /** External entity (broker) that owns this asset */
    OrganizationID: string;
    Status: AssetStatus;
    Reason?: Reason | undefined;
    /** list of jurisdictionIDs where this asset is allowed to be traded */
    JurisdictionIDs: string[];
    Type: AssetType;
    /** Flattened StockProperties */
    Symbol: string;
    /** {Symbol}_{Version}. e.g, appl_1, pltr_15, msft_205 */
    Currency: string;
    /** Auto-incremented version (no leading zeros) with max length 3 characters (values 1 to 999) */
    Version: string;
    /** Decimal precision for the share count. e.g, if set to 6, the smallest unit represents 0.000001 shares. */
    Precision: number;
    Name: string;
    ExchangeTickerSymbol: string;
    Exchange: Exchange;
    Description: string;
    MinTransactionAmount: number;
    /** Extra margin percentage required when buying an asset. e.g ExtraPercentage = 0.1 the buyer must provide 10% extra margin—of which the cost is 5%, and the remaining 5% is returned to the buyer. */
    ExtraPercentage: number;
    /** Smart Contract properties */
    Denom: string;
    SmartContractAddress: string;
    /** Flag to indicate if the asset is issued in the smart contract */
    IsIssuedInSmartContract: boolean;
}
export interface Asset {
    AssetDetails: AssetDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface Assets {
    Assets: Asset[];
}
export interface UserAssetList {
    /** Key combination: Currency-OrganizationID-Version-AccountID-Wallet (AssetKey-AccountID-Wallet) */
    AccountID: string;
    Wallet: string;
    /** Stable Key: "Currency-OrganizationID-Version" */
    AssetKey: string;
    Status: UserAssetStatus;
    MetaData: MetaData | undefined;
    Visible: boolean;
}
export interface UserAssetLists {
    UserAssetLists: UserAssetList[];
}
export declare const AssetDetails: {
    encode(message: AssetDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetDetails;
    fromJSON(object: any): AssetDetails;
    toJSON(message: AssetDetails): unknown;
    create<I extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: string[] | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        Description?: string | undefined;
        MinTransactionAmount?: number | undefined;
        ExtraPercentage?: number | undefined;
        Denom?: string | undefined;
        SmartContractAddress?: string | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        Description?: string | undefined;
        MinTransactionAmount?: number | undefined;
        ExtraPercentage?: number | undefined;
        Denom?: string | undefined;
        SmartContractAddress?: string | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof AssetDetails>]: never; }>(base?: I | undefined): AssetDetails;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: string[] | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        Description?: string | undefined;
        MinTransactionAmount?: number | undefined;
        ExtraPercentage?: number | undefined;
        Denom?: string | undefined;
        SmartContractAddress?: string | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Symbol?: string | undefined;
        Currency?: string | undefined;
        Version?: string | undefined;
        Precision?: number | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        Description?: string | undefined;
        MinTransactionAmount?: number | undefined;
        ExtraPercentage?: number | undefined;
        Denom?: string | undefined;
        SmartContractAddress?: string | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof AssetDetails>]: never; }>(object: I_1): AssetDetails;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Symbol?: string | undefined;
            Currency?: string | undefined;
            Version?: string | undefined;
            Precision?: number | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            Description?: string | undefined;
            MinTransactionAmount?: number | undefined;
            ExtraPercentage?: number | undefined;
            Denom?: string | undefined;
            SmartContractAddress?: string | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
};
export declare const Assets: {
    encode(message: Assets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assets;
    fromJSON(object: any): Assets;
    toJSON(message: Assets): unknown;
    create<I extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } & { [K_1 in Exclude<keyof I["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_3 in Exclude<keyof I["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_5 in Exclude<keyof I["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "Assets">]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } & { [K_8 in Exclude<keyof I_1["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_12 in Exclude<keyof I_1["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Symbol?: string | undefined;
                Currency?: string | undefined;
                Version?: string | undefined;
                Precision?: number | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                Description?: string | undefined;
                MinTransactionAmount?: number | undefined;
                ExtraPercentage?: number | undefined;
                Denom?: string | undefined;
                SmartContractAddress?: string | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, "Assets">]: never; }>(object: I_1): Assets;
};
export declare const UserAssetList: {
    encode(message: UserAssetList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetList;
    fromJSON(object: any): UserAssetList;
    toJSON(message: UserAssetList): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Visible?: boolean | undefined;
    } & {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UserAssetList>]: never; }>(base?: I | undefined): UserAssetList;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Visible?: boolean | undefined;
    } & {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof UserAssetList>]: never; }>(object: I_1): UserAssetList;
};
export declare const UserAssetLists: {
    encode(message: UserAssetLists, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetLists;
    fromJSON(object: any): UserAssetLists;
    toJSON(message: UserAssetLists): unknown;
    create<I extends {
        UserAssetLists?: {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        } & {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K in Exclude<keyof I["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_2 in Exclude<keyof I["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "UserAssetLists">]: never; }>(base?: I | undefined): UserAssetLists;
    fromPartial<I_1 extends {
        UserAssetLists?: {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        } & {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_6 in Exclude<keyof I_1["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "UserAssetLists">]: never; }>(object: I_1): UserAssetLists;
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
