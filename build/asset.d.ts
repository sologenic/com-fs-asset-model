import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
export declare const protobufPackage = "asset";
export declare enum FileType {
    /** FILE_TYPE_NONE - TODO: Add generic file types like FILE_TYPE_LEGAL_DOCUMENT, FILE_TYPE_IMAGE, FILE_TYPE_BROCHURE etc */
    FILE_TYPE_NONE = 0,
    UNRECOGNIZED = -1
}
export declare function fileTypeFromJSON(object: any): FileType;
export declare function fileTypeToJSON(object: FileType): string;
export declare enum AssetType {
    ASSET_TYPE_NONE = 0,
    /** ASSET_TYPE_SECURITY - TODO: Add more asset types */
    ASSET_TYPE_SECURITY = 1,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
export interface Asset {
    /**
     * Unique string representation of the asset's denom.
     * Immutable: Cannot be modified after creation.
     */
    ID: string;
    /**
     * Unique identifier of the organization that owns or issued the asset.
     * Immutable: Cannot be modified after creation.
     */
    OrganizationID: string;
    /**
     * Structured denomination data (symbol, version, issuer address).
     * Immutable: Cannot be modified after creation.
     */
    Denom: Denom | undefined;
    /**
     * Categorization of the asset.
     * Immutable: Cannot be modified after creation.
     */
    Type: AssetType;
    /**
     * Display name of the asset.
     * @inject_tags: datastore:",noindex"
     */
    Name: string;
    /**
     * Short plain-text summary of the asset.
     * Suitable for UI previews, cards, and OG meta tags.
     * @inject_tags: datastore:",noindex"
     */
    Description: string;
    /**
     * Extended WYSIWYG content providing a detailed overview of the asset.
     * @inject_tags: datastore:",noindex"
     */
    Content: string;
    /** Country of origin represented as an ISO 3166-1 alpha-3 code (e.g., "USA", "CAD"). */
    OriginCountryAlpha3: string;
    /**
     * Timestamp indicating when the asset was issued on-chain.
     * System-managed: Set automatically via on-chain events. Becomes immutable once set.
     */
    IssuedAt?: Date | undefined;
    /**
     * Indicates whether the asset is active/enabled on-chain.
     * System-managed: Updated automatically via on-chain events. Cannot be mutated manually.
     */
    IsEnabled: boolean;
    /**
     * Controls whether the asset is visible in the public marketplace.
     * Mutable by administrators.
     */
    IsVisible: boolean;
    /**
     * Controls whether the asset is highlighted in the promoted assets panel.
     * Mutable by administrators.
     */
    IsPromoted: boolean;
    /** Attached media and documents (e.g., legal agreements, brochures, images). */
    Files: File[];
    /** Flexible key-value store for arbitrary, frontend-defined dynamic attributes. */
    Details: {
        [key: string]: any;
    } | undefined;
    /** Set to now on create. Immutable afterwards. */
    CreatedAt: Date | undefined;
    /** Set to now on create and on every upsert. */
    UpdatedAt: Date | undefined;
    /**
     * Indicates whether the asset has been issued on-chain.
     * System-managed: Derived from IssuedAt on upsert. Becomes immutable once true.
     */
    IsIssued: boolean;
}
export interface Assets {
    Records: Asset[];
    /** Pagination offset for fetching the next page of results. */
    Offset?: number | undefined;
}
export interface File {
    /** Display name of the file. */
    Name: string;
    /** Categorization of the file's purpose. */
    Type: FileType;
    /** Google Cloud Storage URI pointing to the file blob (e.g., gs://bucket/path/file.pdf). */
    Reference: string;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Denom?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        Content?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsEnabled?: boolean | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        Files?: {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] | undefined;
        Details?: {
            [x: string]: any;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        IsIssued?: boolean | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Denom?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K in Exclude<keyof I["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Denom"], keyof Denom>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        Content?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsEnabled?: boolean | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        Files?: ({
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] & ({
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        } & {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        } & { [K_2 in Exclude<keyof I["Files"][number], keyof File>]: never; })[] & { [K_3 in Exclude<keyof I["Files"], keyof {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[]>]: never; }) | undefined;
        Details?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_4 in Exclude<keyof I["Details"], string | number>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        IsIssued?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Denom?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        Content?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsEnabled?: boolean | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        Files?: {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] | undefined;
        Details?: {
            [x: string]: any;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        IsIssued?: boolean | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Denom?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["Denom"], keyof Denom>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        Content?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsEnabled?: boolean | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        Files?: ({
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] & ({
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        } & {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Files"][number], keyof File>]: never; })[] & { [K_9 in Exclude<keyof I_1["Files"], keyof {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[]>]: never; }) | undefined;
        Details?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_10 in Exclude<keyof I_1["Details"], string | number>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        IsIssued?: boolean | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
};
export declare const Assets: {
    encode(message: Assets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assets;
    fromJSON(object: any): Assets;
    toJSON(message: Assets): unknown;
    create<I extends {
        Records?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Records?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[] & ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K in Exclude<keyof I["Records"][number]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } & { [K_1 in Exclude<keyof I["Records"][number]["Denom"], keyof Denom>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: ({
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            } & {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Records"][number]["Files"][number], keyof File>]: never; })[] & { [K_3 in Exclude<keyof I["Records"][number]["Files"], keyof {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[]>]: never; }) | undefined;
            Details?: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_4 in Exclude<keyof I["Records"][number]["Details"], string | number>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["Records"][number], keyof Asset>]: never; })[] & { [K_6 in Exclude<keyof I["Records"], keyof {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Assets>]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Records?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Records?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[] & ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K_8 in Exclude<keyof I_1["Records"][number]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["Records"][number]["Denom"], keyof Denom>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: ({
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            } & {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["Records"][number]["Files"][number], keyof File>]: never; })[] & { [K_11 in Exclude<keyof I_1["Records"][number]["Files"], keyof {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[]>]: never; }) | undefined;
            Details?: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_12 in Exclude<keyof I_1["Records"][number]["Details"], string | number>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        } & { [K_13 in Exclude<keyof I_1["Records"][number], keyof Asset>]: never; })[] & { [K_14 in Exclude<keyof I_1["Records"], keyof {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            Content?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsEnabled?: boolean | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            IsIssued?: boolean | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Assets>]: never; }>(object: I_1): Assets;
};
export declare const File: {
    encode(message: File, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): File;
    fromJSON(object: any): File;
    toJSON(message: File): unknown;
    create<I extends {
        Name?: string | undefined;
        Type?: FileType | undefined;
        Reference?: string | undefined;
    } & {
        Name?: string | undefined;
        Type?: FileType | undefined;
        Reference?: string | undefined;
    } & { [K in Exclude<keyof I, keyof File>]: never; }>(base?: I | undefined): File;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Type?: FileType | undefined;
        Reference?: string | undefined;
    } & {
        Name?: string | undefined;
        Type?: FileType | undefined;
        Reference?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof File>]: never; }>(object: I_1): File;
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
