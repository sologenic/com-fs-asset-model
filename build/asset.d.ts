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
    ASSET_TYPE_EQUITY = 1,
    /** ASSET_TYPE_RWA - TODO: Add more asset types */
    ASSET_TYPE_RWA = 2,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
export interface Asset {
    /**
     * Denom represented as a string
     * Immutable field
     */
    ID: string;
    /** Immutable field */
    OrganizationID: string;
    /**
     * Contains symbol, version, issuer address
     * Immutable field
     */
    Denom: Denom | undefined;
    /** Immutable field */
    Type: AssetType;
    /** @inject_tags: datastore:",noindex" */
    Name: string;
    /** @inject_tags: datastore:",noindex" */
    Description: string;
    /** @inject_tags: datastore:",noindex" */
    HTML: string;
    /** ISO 3166-1 alpha-3 code e.g. "USA", "CAD" */
    OriginCountryAlpha3: string;
    /**
     * If not nil means asset has been issued on chain
     * Immutable field
     */
    IssuedAt?: Date | undefined;
    /** Controls whether the asset is visible in the marketplace */
    IsVisible: boolean;
    /** Controls whether the asset is visible in the promoted assets panel */
    IsPromoted: boolean;
    SupersededAt?: Date | undefined;
    SupersededByID: string;
    Files: File[];
    /** Dynamic fields defined by front-end */
    Details: {
        [key: string]: any;
    } | undefined;
}
export interface Assets {
    Records: Asset[];
    /** If there is more data, this is the offset to pass to the next call */
    Offset?: number | undefined;
}
export interface File {
    Name: string;
    Type: FileType;
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
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        HTML?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        SupersededAt?: Date | undefined;
        SupersededByID?: string | undefined;
        Files?: {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] | undefined;
        Details?: {
            [x: string]: any;
        } | undefined;
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
            Precision?: number | undefined;
            Description?: string | undefined;
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
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Denom"], keyof Denom>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        HTML?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        SupersededAt?: Date | undefined;
        SupersededByID?: string | undefined;
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
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        HTML?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        SupersededAt?: Date | undefined;
        SupersededByID?: string | undefined;
        Files?: {
            Name?: string | undefined;
            Type?: FileType | undefined;
            Reference?: string | undefined;
        }[] | undefined;
        Details?: {
            [x: string]: any;
        } | undefined;
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
            Precision?: number | undefined;
            Description?: string | undefined;
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
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["Denom"], keyof Denom>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        Description?: string | undefined;
        HTML?: string | undefined;
        OriginCountryAlpha3?: string | undefined;
        IssuedAt?: Date | undefined;
        IsVisible?: boolean | undefined;
        IsPromoted?: boolean | undefined;
        SupersededAt?: Date | undefined;
        SupersededByID?: string | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_1 in Exclude<keyof I["Records"][number]["Denom"], keyof Denom>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["Records"][number]["Denom"], keyof Denom>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
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
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            Description?: string | undefined;
            HTML?: string | undefined;
            OriginCountryAlpha3?: string | undefined;
            IssuedAt?: Date | undefined;
            IsVisible?: boolean | undefined;
            IsPromoted?: boolean | undefined;
            SupersededAt?: Date | undefined;
            SupersededByID?: string | undefined;
            Files?: {
                Name?: string | undefined;
                Type?: FileType | undefined;
                Reference?: string | undefined;
            }[] | undefined;
            Details?: {
                [x: string]: any;
            } | undefined;
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
