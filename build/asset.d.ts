import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "asset";
export declare enum AssetStatus {
    ASSET_STATUS_DO_NOT_USE = 0,
    DO_NOT_LIST = 1,
    REQUEST_LISTING = 2,
    LISTED = 3,
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
    STOCKS = 1,
    BONDS = 2,
    WRAPPED_STABLECOIN = 3,
    CRYPTO = 4,
    FOREX = 5,
    FUTURES = 6,
    OPTIONS = 7,
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
    /** ONCHAIN - On‑chain token/cryptocurrency markets, e.g. wrapped USDC */
    ONCHAIN = 3,
    UNRECOGNIZED = -1
}
export declare function exchangeFromJSON(object: any): Exchange;
export declare function exchangeToJSON(object: Exchange): string;
export declare enum Industry {
    INDUSTRY_DO_NOT_USE = 0,
    ENERGY = 1,
    MATERIALS = 2,
    INDUSTRIALS = 3,
    CONSUMER_DISCRETIONARY = 4,
    CONSUMER_STAPLES = 5,
    HEALTH_CARE = 6,
    FINANCIALS = 7,
    INFORMATION_TECHNOLOGY = 8,
    COMMUNICATION_SERVICES = 9,
    UTILITIES = 10,
    REAL_ESTATE = 11,
    UNRECOGNIZED = -1
}
export declare function industryFromJSON(object: any): Industry;
export declare function industryToJSON(object: Industry): string;
export interface AssetDetails {
    /**
     * Key combination: Currency_OrganizationID_SmartContractIssuerAddr
     * e.g., "appl_1_72c4c072-2fe4-4f72-ae9d-d9d52a05fd71_testcore1et29c..."
     */
    ID: string;
    /** External entity (broker) that owns this asset */
    OrganizationID: string;
    Status: AssetStatus;
    Reason?: Reason | undefined;
    /** list of jurisdictionIDs where this asset is allowed to be traded */
    JurisdictionIDs: string[];
    Type: AssetType;
    /** Asset specific properties */
    Name: string;
    ExchangeTickerSymbol: string;
    Exchange: Exchange;
    /** Description for internal use, not for on-chain */
    InternalDescription: string;
    MinTransactionAmount: number;
    /**
     * Required additional margin as a percentage of the order value that buyers must provide.
     * Value should be between 0.0 and 1.0 (0% to 100%)
     * Example: If TradingMarginPercentage = 0.1 (10%) and order value is $100:
     *  - Buyer must provide $110 total ($100 asset cost + $10 margin)
     *  - $5 (5%, cost) is kept for transaction costs
     *  - $5 (5%, refundable) is returned to the buyer after execution
     */
    TradingMarginPercentage: number;
    LogoFile: LogoFile | undefined;
    /** Global Industry Classification Standard (GICS®) sector */
    Industry: Industry;
    /**
     * Margin percentage specific to the asset. This is the asset's individual margin percentage used to calculate buying power.
     * Buying Power = AvailableFunds(On-chain) + (Σ Assets(non-stablecoin)  × AssetMarginPercentage)
     * Asset Margin Percentage: represents the collateral value of the asset (e.g., 50% → 10,000BTC → 5,000 buying power contribution)
     */
    AssetMarginPercentage: number;
    /** On-chain properties */
    Denom: Denom | undefined;
    /** Flag to indicate if the asset is issued in the smart contract */
    IsIssuedInSmartContract: boolean;
    /** Issuer address of the smart contract (distinct from Denom.Issuer) */
    SmartContractIssuerAddr: string;
    /** -------- New category-specific optional fields -------- */
    RealEstateDetails?: RealEstate | undefined;
    StableCoinDetails?: StableCoin | undefined;
    CommodityDetails?: Commodity | undefined;
    CollectibleDetails?: Collectible | undefined;
    VehicleDetails?: Vehicle | undefined;
    IntellectualPropertyDetails?: IntellectualProperty | undefined;
    InvestmentFundDetails?: InvestmentFund | undefined;
}
export interface Asset {
    AssetDetails: AssetDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface Assets {
    Assets: Asset[];
}
export interface LogoFile {
    /** The reference to the file */
    Reference: string;
    Extension: string;
    /** User defined name of the file, used as a "description" */
    Name?: string | undefined;
}
export interface UserAssetList {
    /** Key combination: Currency-OrganizationID-AccountID-Wallet (AssetKey-AccountID-Wallet) */
    AccountID: string;
    Wallet: string;
    /** Currency-OrganizationID */
    AssetKey: string;
    Status: UserAssetStatus;
    MetaData: MetaData | undefined;
    Visible: boolean;
}
export interface UserAssetLists {
    UserAssetLists: UserAssetList[];
}
export interface RealEstate {
    Address: string;
    Bathrooms?: number | undefined;
    Bedrooms?: number | undefined;
    Latitude: number;
    Longitude: number;
    OwnershipType?: string | undefined;
    PropertyType: string;
    RiskRating?: string | undefined;
    SquareFootage?: number | undefined;
    TenancyStatus?: string | undefined;
    YearBuilt?: number | undefined;
    YieldPercent: number[];
}
export interface StableCoin {
    Version?: string | undefined;
    PegType?: string | undefined;
    PegRatio?: number | undefined;
    BackingAsset?: string | undefined;
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    MinTransactionAmount?: number | undefined;
    TradingMarginPercentage?: number | undefined;
    AssetMarginPercentage?: number | undefined;
}
export interface Commodity {
    Category: string;
    Quality?: string | undefined;
    UnitOfMeasure: string;
    Quantity?: number | undefined;
    OriginCountry?: string | undefined;
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    MinTransactionAmount?: number | undefined;
    StorageLocation?: string | undefined;
    ContractType?: string | undefined;
    DeliveryDate?: string | undefined;
}
export interface Collectible {
    Category: string;
    CollectionName?: string | undefined;
    TokenStandard?: string | undefined;
    TokenID?: string | undefined;
    MetadataURI?: string | undefined;
    Creator?: string | undefined;
    OwnershipHistory: string[];
    CurrentOwner: string;
}
export interface Vehicle {
    Category: string;
    Manufacturer: string;
    Model: string;
    SerialNumber: string;
    Year?: number | undefined;
    Specifications?: string | undefined;
    FuelType?: string | undefined;
    UsageHours?: number | undefined;
    Mileage?: number | undefined;
    Condition: string;
    CurrentOwner: string;
    Location?: string | undefined;
}
export interface IntellectualProperty {
    Category: string;
    Owner: string;
    RegistrationNumber?: string | undefined;
    FilingDate?: string | undefined;
    ExpirationDate?: string | undefined;
    IPJurisdictionIDs: string[];
    LicenseType?: string | undefined;
    LicenseTerms?: string | undefined;
    Value?: number | undefined;
}
export interface InvestmentFund {
    FundType: string;
    Exchange: string;
    ISIN?: string | undefined;
    NAV?: number | undefined;
    InceptionDate?: string | undefined;
    Manager?: string | undefined;
    ExpenseRatio?: number | undefined;
    Holdings: string[];
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
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
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
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } | undefined;
        StableCoinDetails?: {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        CommodityDetails?: {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } | undefined;
        CollectibleDetails?: {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } | undefined;
        VehicleDetails?: {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } | undefined;
        IntellectualPropertyDetails?: {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } | undefined;
        InvestmentFundDetails?: {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K_1 in Exclude<keyof I["LogoFile"], keyof LogoFile>]: never; }) | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
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
            } & { [K_2 in Exclude<keyof I["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: ({
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } & {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: (number[] & number[] & { [K_4 in Exclude<keyof I["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
        StableCoinDetails?: ({
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_6 in Exclude<keyof I["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
        CommodityDetails?: ({
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & { [K_7 in Exclude<keyof I["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
        CollectibleDetails?: ({
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } & {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: (string[] & string[] & { [K_8 in Exclude<keyof I["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
            CurrentOwner?: string | undefined;
        } & { [K_9 in Exclude<keyof I["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
        VehicleDetails?: ({
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & { [K_10 in Exclude<keyof I["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
        IntellectualPropertyDetails?: ({
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: (string[] & string[] & { [K_11 in Exclude<keyof I["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & { [K_12 in Exclude<keyof I["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
        InvestmentFundDetails?: ({
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } & {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: (string[] & string[] & { [K_13 in Exclude<keyof I["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof AssetDetails>]: never; }>(base?: I | undefined): AssetDetails;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: string[] | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
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
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } | undefined;
        StableCoinDetails?: {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        CommodityDetails?: {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } | undefined;
        CollectibleDetails?: {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } | undefined;
        VehicleDetails?: {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } | undefined;
        IntellectualPropertyDetails?: {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } | undefined;
        InvestmentFundDetails?: {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K_17 in Exclude<keyof I_1["LogoFile"], keyof LogoFile>]: never; }) | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
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
            } & { [K_18 in Exclude<keyof I_1["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_19 in Exclude<keyof I_1["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: ({
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } & {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: (number[] & number[] & { [K_20 in Exclude<keyof I_1["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I_1["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
        StableCoinDetails?: ({
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_22 in Exclude<keyof I_1["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
        CommodityDetails?: ({
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & { [K_23 in Exclude<keyof I_1["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
        CollectibleDetails?: ({
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } & {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
            CurrentOwner?: string | undefined;
        } & { [K_25 in Exclude<keyof I_1["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
        VehicleDetails?: ({
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & { [K_26 in Exclude<keyof I_1["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
        IntellectualPropertyDetails?: ({
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & { [K_28 in Exclude<keyof I_1["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
        InvestmentFundDetails?: ({
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } & {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I_1["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
    } & { [K_31 in Exclude<keyof I_1, keyof AssetDetails>]: never; }>(object: I_1): AssetDetails;
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
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_1 in Exclude<keyof I["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_3 in Exclude<keyof I["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: ({
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } & {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: (number[] & number[] & { [K_4 in Exclude<keyof I["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
            StableCoinDetails?: ({
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_6 in Exclude<keyof I["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
            CommodityDetails?: ({
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & { [K_7 in Exclude<keyof I["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
            CollectibleDetails?: ({
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } & {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: (string[] & string[] & { [K_8 in Exclude<keyof I["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                CurrentOwner?: string | undefined;
            } & { [K_9 in Exclude<keyof I["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
            VehicleDetails?: ({
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & { [K_10 in Exclude<keyof I["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
            IntellectualPropertyDetails?: ({
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: (string[] & string[] & { [K_11 in Exclude<keyof I["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & { [K_12 in Exclude<keyof I["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
            InvestmentFundDetails?: ({
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } & {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: (string[] & string[] & { [K_13 in Exclude<keyof I["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                socialMediaLinks?: (string[] & string[] & { [K_16 in Exclude<keyof I["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                keyClients?: string | undefined;
                press?: string | undefined;
            } & { [K_17 in Exclude<keyof I["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_19 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_20 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
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
                } & { [K_23 in Exclude<keyof I_1["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_24 in Exclude<keyof I_1["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: ({
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } & {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: (number[] & number[] & { [K_25 in Exclude<keyof I_1["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I_1["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
            StableCoinDetails?: ({
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
            CommodityDetails?: ({
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & { [K_28 in Exclude<keyof I_1["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
            CollectibleDetails?: ({
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } & {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                CurrentOwner?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
            VehicleDetails?: ({
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & { [K_31 in Exclude<keyof I_1["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
            IntellectualPropertyDetails?: ({
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: (string[] & string[] & { [K_32 in Exclude<keyof I_1["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & { [K_33 in Exclude<keyof I_1["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
            InvestmentFundDetails?: ({
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } & {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: (string[] & string[] & { [K_34 in Exclude<keyof I_1["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                socialMediaLinks?: (string[] & string[] & { [K_37 in Exclude<keyof I_1["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                keyClients?: string | undefined;
                press?: string | undefined;
            } & { [K_38 in Exclude<keyof I_1["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_40 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_41 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_1 in Exclude<keyof I["Assets"][number]["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                    } & { [K_2 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_3 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_4 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_6 in Exclude<keyof I["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_7 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_8 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_9 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_10 in Exclude<keyof I["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_11 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_12 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_13 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                    socialMediaLinks?: (string[] & string[] & { [K_16 in Exclude<keyof I["Assets"][number]["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    keyClients?: string | undefined;
                    press?: string | undefined;
                } & { [K_17 in Exclude<keyof I["Assets"][number]["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_19 in Exclude<keyof I["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_21 in Exclude<keyof I["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_22 in Exclude<keyof I, "Assets">]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_24 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                    } & { [K_25 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_26 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_27 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_29 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_30 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_32 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_33 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_34 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_35 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_36 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
            } & { [K_38 in Exclude<keyof I_1["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                    socialMediaLinks?: (string[] & string[] & { [K_39 in Exclude<keyof I_1["Assets"][number]["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    keyClients?: string | undefined;
                    press?: string | undefined;
                } & { [K_40 in Exclude<keyof I_1["Assets"][number]["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
            } & { [K_41 in Exclude<keyof I_1["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_42 in Exclude<keyof I_1["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_44 in Exclude<keyof I_1["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
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
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_45 in Exclude<keyof I_1, "Assets">]: never; }>(object: I_1): Assets;
};
export declare const LogoFile: {
    encode(message: LogoFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogoFile;
    fromJSON(object: any): LogoFile;
    toJSON(message: LogoFile): unknown;
    create<I extends {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LogoFile>]: never; }>(base?: I | undefined): LogoFile;
    fromPartial<I_1 extends {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LogoFile>]: never; }>(object: I_1): LogoFile;
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
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                socialMediaLinks?: (string[] & string[] & { [K in Exclude<keyof I["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                keyClients?: string | undefined;
                press?: string | undefined;
            } & { [K_1 in Exclude<keyof I["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UserAssetList>]: never; }>(base?: I | undefined): UserAssetList;
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
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                socialMediaLinks?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                keyClients?: string | undefined;
                press?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof UserAssetList>]: never; }>(object: I_1): UserAssetList;
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
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                    socialMediaLinks?: (string[] & string[] & { [K in Exclude<keyof I["UserAssetLists"][number]["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    keyClients?: string | undefined;
                    press?: string | undefined;
                } & { [K_1 in Exclude<keyof I["UserAssetLists"][number]["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_4 in Exclude<keyof I["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "UserAssetLists">]: never; }>(base?: I | undefined): UserAssetLists;
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
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
                    socialMediaLinks?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["UserAssetLists"][number]["MetaData"]["MetaDataDetails"]["socialMediaLinks"], keyof string[]>]: never; }) | undefined;
                    keyClients?: string | undefined;
                    press?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["UserAssetLists"][number]["MetaData"]["MetaDataDetails"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaDataDetails>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_9 in Exclude<keyof I_1["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_10 in Exclude<keyof I_1["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
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
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "UserAssetLists">]: never; }>(object: I_1): UserAssetLists;
};
export declare const RealEstate: {
    encode(message: RealEstate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RealEstate;
    fromJSON(object: any): RealEstate;
    toJSON(message: RealEstate): unknown;
    create<I extends {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: number[] | undefined;
    } & {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: (number[] & number[] & { [K in Exclude<keyof I["YieldPercent"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RealEstate>]: never; }>(base?: I | undefined): RealEstate;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: number[] | undefined;
    } & {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I_1["YieldPercent"], keyof number[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RealEstate>]: never; }>(object: I_1): RealEstate;
};
export declare const StableCoin: {
    encode(message: StableCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StableCoin;
    fromJSON(object: any): StableCoin;
    toJSON(message: StableCoin): unknown;
    create<I extends {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof StableCoin>]: never; }>(base?: I | undefined): StableCoin;
    fromPartial<I_1 extends {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StableCoin>]: never; }>(object: I_1): StableCoin;
};
export declare const Commodity: {
    encode(message: Commodity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commodity;
    fromJSON(object: any): Commodity;
    toJSON(message: Commodity): unknown;
    create<I extends {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Commodity>]: never; }>(base?: I | undefined): Commodity;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Commodity>]: never; }>(object: I_1): Commodity;
};
export declare const Collectible: {
    encode(message: Collectible, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collectible;
    fromJSON(object: any): Collectible;
    toJSON(message: Collectible): unknown;
    create<I extends {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: string[] | undefined;
        CurrentOwner?: string | undefined;
    } & {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: (string[] & string[] & { [K in Exclude<keyof I["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
        CurrentOwner?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Collectible>]: never; }>(base?: I | undefined): Collectible;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: string[] | undefined;
        CurrentOwner?: string | undefined;
    } & {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
        CurrentOwner?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Collectible>]: never; }>(object: I_1): Collectible;
};
export declare const Vehicle: {
    encode(message: Vehicle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vehicle;
    fromJSON(object: any): Vehicle;
    toJSON(message: Vehicle): unknown;
    create<I extends {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Vehicle>]: never; }>(base?: I | undefined): Vehicle;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Vehicle>]: never; }>(object: I_1): Vehicle;
};
export declare const IntellectualProperty: {
    encode(message: IntellectualProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntellectualProperty;
    fromJSON(object: any): IntellectualProperty;
    toJSON(message: IntellectualProperty): unknown;
    create<I extends {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: string[] | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof IntellectualProperty>]: never; }>(base?: I | undefined): IntellectualProperty;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: string[] | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof IntellectualProperty>]: never; }>(object: I_1): IntellectualProperty;
};
export declare const InvestmentFund: {
    encode(message: InvestmentFund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvestmentFund;
    fromJSON(object: any): InvestmentFund;
    toJSON(message: InvestmentFund): unknown;
    create<I extends {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: string[] | undefined;
    } & {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: (string[] & string[] & { [K in Exclude<keyof I["Holdings"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof InvestmentFund>]: never; }>(base?: I | undefined): InvestmentFund;
    fromPartial<I_1 extends {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: string[] | undefined;
    } & {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Holdings"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof InvestmentFund>]: never; }>(object: I_1): InvestmentFund;
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
