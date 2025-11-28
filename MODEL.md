# Asset Documentation

## Table of Contents

- [asset.proto](#asset)

## Overview

The Asset provides data structures and definitions for managing asset within the system.

## asset.proto {#asset}

### Package Information

- **Package Name**: `asset`
- **Go Package Path**: `github.com/sologenic/com-fs-asset-model;asset`

### Overview

The `asset.proto` file defines the Asset model.

### Messages

#### AssetDetails

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| StableCoinDetails | `StableCoin` | 21 |  |
| CommodityDetails | `Commodity` | 22 |  |
| CollectibleDetails | `Collectible` | 23 |  |
| VehicleDetails | `Vehicle` | 24 |  |
| IntellectualPropertyDetails | `IntellectualProperty` | 25 |  |
| InvestmentFundDetails | `InvestmentFund` | 26 |  |
| EquityDetails | `Equity` | 29 |  |
| FinancialProperties | `FinancialProperties` | 27 |  |
| Description | `Description` | 28 |  |
| ExternalResources | `ExternalResources` | 30 |  |
| DistributionDetails | `Distribution` | 31 |  |

#### Asset

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Audit | `Audit` | 3 |  |
| IssuerDetails | `IssuerDetails` | 4 |  |

#### Assets

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Assets | `Asset` | 1 |  |
| Offset | `int32` | 2 |  |

#### UserAssetList

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| AccountID | `string` | 1 |  |
| Wallet | `string` | 2 |  |
| AssetKey | `string` | 3 |  |
| Status | `UserAssetStatus` | 4 |  |
| MetaData | `MetaData` | 5 |  |
| Visible | `bool` | 6 |  |
| OrganizationID | `string` | 7 |  |

#### UserAssetLists

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| UserAssetLists | `UserAssetList` | 1 |  |

#### RealEstate

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Bedrooms | `int32` | 3 |  |
| Latitude | `float` | 4 |  |
| Longitude | `float` | 5 |  |
| OwnershipType | `string` | 6 |  |
| PropertyType | `string` | 7 |  |
| RiskRating | `string` | 8 |  |
| SquareFootage | `float` | 9 |  |
| TenancyStatus | `string` | 10 |  |
| YearBuilt | `int32` | 11 |  |
| YieldPercent | `float` | 12 |  |
| Floors | `int32` | 13 |  |
| HeightMeters | `float` | 14 |  |
| Units | `int32` | 15 |  |
| AvailableUnits | `int32` | 16 |  |
| ParkingSpaces | `int32` | 17 |  |
| Elevators | `int32` | 18 |  |
| Classification | `string` | 19 |  |
| YearRenovated | `int32` | 20 |  |
| LotSize | `float` | 21 |  |
| ZoningType | `string` | 22 |  |
| CapRate | `float` | 23 |  |
| NetOperatingIncome | `float` | 24 |  |
| KeyHighlights | `string` | 25 |  |
| Amenities | `string` | 26 |  |
| PropertyDescription | `string` | 27 |  |

#### StableCoin

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Version | `string` | 1 |  |
| PegType | `string` | 2 |  |
| PegRatio | `float` | 3 |  |
| BackingAsset | `string` | 4 |  |
| ExchangeTickerSymbol | `string` | 5 |  |
| Exchange | `string` | 6 |  |
| MinTransactionAmount | `float` | 7 |  |
| TradingMarginPercentage | `float` | 8 |  |
| AssetMarginPercentage | `float` | 9 |  |

#### Commodity

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Category | `string` | 1 |  |
| Quality | `string` | 2 |  |
| UnitOfMeasure | `string` | 3 |  |
| Quantity | `float` | 4 |  |
| OriginCountry | `string` | 5 |  |
| ExchangeTickerSymbol | `string` | 6 |  |
| Exchange | `string` | 7 |  |
| MinTransactionAmount | `float` | 8 |  |
| StorageLocation | `string` | 9 |  |
| ContractType | `string` | 10 |  |
| DeliveryDate | `string` | 11 |  |

#### Collectible

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Category | `string` | 1 |  |
| CollectionName | `string` | 2 |  |
| TokenStandard | `string` | 3 |  |
| TokenID | `string` | 4 |  |
| MetadataURI | `string` | 5 |  |
| Creator | `string` | 6 |  |
| OwnershipHistory | `string` | 7 |  |
| CurrentOwner | `string` | 8 |  |

#### Vehicle

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Category | `string` | 1 |  |
| Manufacturer | `string` | 2 |  |
| Model | `string` | 3 |  |
| SerialNumber | `string` | 4 |  |
| Year | `int32` | 5 |  |
| Specifications | `string` | 6 |  |
| FuelType | `string` | 7 |  |
| UsageHours | `float` | 8 |  |
| Mileage | `float` | 9 |  |
| Condition | `string` | 10 |  |
| CurrentOwner | `string` | 11 |  |
| Location | `string` | 12 |  |

#### DecCoin

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Denom | `string` | 1 |  |
| Amount | `string` | 2 |  |

#### Distribution

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Type | `DistributionType` | 1 |  |
| CrowdfundDetails | `Crowdfund` | 2 |  |
| TokenSaleDetails | `TokenSale` | 3 |  |

#### TokenSale

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| SellPricesPerSubunit | `DecCoin` | 2 |  |
| BaseDenom | `string` | 3 |  |
| MinAmount | `string` | 4 |  |
| StartDate | `int64` | 5 |  |
| EndDate | `int64` | 6 |  |
| ComplianceManagerContractAddr | `string` | 7 |  |
| BuyPricesPerSubunit | `DecCoin` | 8 |  |
| AssetRegistryContractAddr | `string` | 9 |  |
| AssetExtensionCode | `string` | 10 |  |
| AssetExtensionContractAddr | `string` | 11 |  |
| OrderHubContractAddr | `string` | 12 |  |
| TokenSaleContractAddr | `string` | 13 |  |

#### Crowdfund

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| QuantityStep | `string` | 1 |  |
| PricesPerSubunit | `DecCoin` | 2 |  |
| BaseDenom | `string` | 3 |  |
| MinAmount | `string` | 4 |  |
| StartDate | `int64` | 5 |  |
| EndDate | `int64` | 6 |  |
| MinThreshold | `string` | 7 |  |
| MaxThreshold | `string` | 8 |  |
| AllowOrderCancellation | `bool` | 9 |  |
| ComplianceManagerContractAddr | `string` | 10 |  |
| OrderHubContractAddr | `string` | 11 |  |
| CrowdfundContractAddr | `string` | 12 |  |
| AssetRegistryContractAddr | `string` | 13 |  |
| AssetExtensionCode | `string` | 14 |  |
| AssetExtensionContractAddr | `string` | 15 |  |

#### IntellectualProperty

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Category | `string` | 1 |  |
| Owner | `string` | 2 |  |
| RegistrationNumber | `string` | 3 |  |
| FilingDate | `string` | 4 |  |
| ExpirationDate | `string` | 5 |  |
| IPJurisdictionIDs | `string` | 6 |  |
| LicenseType | `string` | 7 |  |
| LicenseTerms | `string` | 8 |  |
| Value | `float` | 9 |  |

#### InvestmentFund

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| FundType | `string` | 1 |  |
| Exchange | `string` | 2 |  |
| ISIN | `string` | 3 |  |
| NAV | `float` | 4 |  |
| InceptionDate | `string` | 5 |  |
| Manager | `string` | 6 |  |
| ExpenseRatio | `float` | 7 |  |
| Holdings | `string` | 8 |  |

#### Equity

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| ExchangeTickerSymbol | `string` | 1 |  |
| Exchange | `string` | 2 |  |
| MinTransactionAmount | `float` | 3 |  |
| TradingMarginPercentage | `float` | 4 |  |
| AssetMarginPercentage | `float` | 5 |  |

#### FinancialProperties

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| JurisdictionIDs | `string` | 3 |  |
| JurisdictionRestrictions | `string` | 4 |  |
| RedemptionTerms | `string` | 5 |  |
| ComplianceRequired | `bool` | 6 |  |
| Type | `string` | 7 |  |
| TradeAllowances | `string` | 8 |  |
| Transferable | `bool` | 9 |  |
| Platform | `string` | 10 |  |
| PlatformType | `string` | 11 |  |
| ContractAddress | `string` | 12 |  |
| Fractional | `bool` | 13 |  |
| TotalSupply | `int32` | 14 |  |
| Subunit | `string` | 15 |  |
| Price | `float` | 16 |  |
| DecimalPlacesPrice | `int32` | 17 |  |
| Currency | `string` | 18 |  |
| InitialValuation | `float` | 19 |  |
| CurrentValuation | `float` | 20 |  |
| ValuationDate | `string` | 21 |  |
| Network | `Network` | 22 |  |
| Status | `string` | 23 |  |

#### Description

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Description | `tring` | 2 |  |
| Logo | `LogoFile` | 3 |  |
| AssetID | `string` | 4 |  |
| URL | `string` | 5 |  |
| Country | `string` | 6 |  |
| Documents | `string` | 7 |  |
| Images | `string` | 8 |  |
| Vertical | `string` | 9 |  |
| CreatedAt | `string` | 10 |  |
| UpdatedAt | `string` | 11 |  |

#### ExternalResources

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Socials | `SocialMedia` | 2 |  |

#### Link

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Type | `LinkType` | 1 |  |
| URL | `string` | 2 |  |

#### SocialMedia

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Type | `SocialMediaType` | 1 |  |
| URL | `string` | 2 |  |

### Enums

#### DistributionType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| Documents | 7 |  |
| Images | 8 |  |
| Vertical | 9 |  |
| CreatedAt | 10 |  |
| UpdatedAt | 11 |  |

#### LinkType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| E | 5 |  |
| VEHICLE_INDUSTRIAL_EQUIPMENT | 6 |  |
| INTELLECTUAL_PROPERTY | 7 |  |
| REAL_ESTATE | 8 |  |
| EQUITY | 9 |  |

#### UserAssetStatus

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| USER_ASSET_STATUS_DO_NOT_USE | 0 |  |
| WHITELISTED | 1 |  |
| BLACKLISTED | 2 |  |
| SELL_ONLY | 3 |  |
| OUTDATED_VERSION | 4 |  |

## Version Information

This documentation corresponds to the current version of the proto files in this repository.

## Support

For more information, see:
- README.md in this repository
- Protocol Buffer documentation
