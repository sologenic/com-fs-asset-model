# Asset Documentation

## Table of Contents

- [Overview](#overview)
- [asset.proto](#asset)
  - [Messages](#messages)
    - [AssetDetails](#assetdetails)
    - [Asset](#asset)
    - [Assets](#assets)
    - [UserAssetList](#userassetlist)
    - [UserAssetLists](#userassetlists)
    - [RealEstate](#realestate)
    - [StableCoin](#stablecoin)
    - [Commodity](#commodity)
    - [Collectible](#collectible)
    - [Vehicle](#vehicle)
    - [DecCoin](#deccoin)
    - [Distribution](#distribution)
    - [TokenSale](#tokensale)
    - [Crowdfund](#crowdfund)
    - [IntellectualProperty](#intellectualproperty)
    - [InvestmentFund](#investmentfund)
    - [Equity](#equity)
    - [FinancialProperties](#financialproperties)
    - [Description](#description)
    - [ExternalResources](#externalresources)
    - [Link](#link)
    - [SocialMedia](#socialmedia)
    - [IssuerDetails](#issuerdetails)
    - [LogoFile](#logofile)
  - [Enums](#enums)
    - [DistributionType](#distributiontype)
    - [LinkType](#linktype)
    - [UserAssetStatus](#userassetstatus)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Asset provides a comprehensive data structure for managing asset within the system. This model supports identification: provides unique identifiers for asset, organizational context: links items to organizations via organizationid, status management: tracks status for administrative control, and more. 

Key features of the {model_name.lower()} model include:
- **Identification**: Provides unique identifiers for asset
- **Organizational Context**: Links items to organizations via OrganizationID
- **Status Management**: Tracks status for administrative control
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Pagination Support**: Provides offset-based pagination for collections

## asset.proto

### Package Information

- **Package Name**: `asset`
- **Go Package Path**: `github.com/sologenic/com-fs-asset-model;asset`

### Overview

The `asset.proto` file defines the core asset model for asset management. It provides message types for representing asset data and operations. The file integrates with external utility libraries: `denom.proto`, `audit.proto`, `metadata.proto`.

### Messages

#### AssetDetails {#assetdetails}

The `AssetDetails` message contains all the core information about a asset, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ID | `string` | Required | Key string to prevent composing the key all the time and reduce errors |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Status | `AssetStatus` | Required | Current status of this item (see related enum) |
| Reason | `Reason` | Optional | Reason field |
| Type | `AssetType` | Required | Type classification for this item (see related enum) |
| Denom | `denom.Denom` | Required | Denom field |
| IsIssuedInSmartContract | `bool` | Required | IsIssuedInSmartContract field |
| SmartContractIssuerAddr | `string` | Required | SmartContractIssuerAddr value |
| RealEstateDetails | `RealEstate` | Optional | RealEstateDetails field |
| StableCoinDetails | `StableCoin` | Optional | StableCoinDetails field |
| CommodityDetails | `Commodity` | Optional | CommodityDetails field |
| CollectibleDetails | `Collectible` | Optional | CollectibleDetails field |
| VehicleDetails | `Vehicle` | Optional | VehicleDetails field |
| IntellectualPropertyDetails | `IntellectualProperty` | Optional | IntellectualPropertyDetails field |
| InvestmentFundDetails | `InvestmentFund` | Optional | InvestmentFundDetails field |
| EquityDetails | `Equity` | Optional | EquityDetails field |
| FinancialProperties | `FinancialProperties` | Optional | Financial-specific properties |
| Description | `Description` | Optional | Human-readable descriptive properties |
| ExternalResources | `ExternalResources` | Optional | External links and resources |
| DistributionDetails | `Distribution` | Optional | DistributionDetails field |

**Use Cases:**
- Creating new asset records with complete information
- Updating asset information
- Associating items with specific organizations
- Tracking status for administrative purposes

**Important Notes:**
- The `ID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `Status` field determines the current state of this item

#### Asset {#asset}

The `Asset` message provides asset data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AssetDetails | `AssetDetails` | Required | AssetDetails field |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |
| IssuerDetails | `IssuerDetails` | Required | IssuerDetails field |

**Use Cases:**
- Creating new asset records
- Retrieving asset information
- Updating asset data

**Important Notes:**
- This message provides the asset representation

#### Assets {#assets}

The `Assets` message represents a collection of asset with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Assets | `Asset` | Optional | Assets field |
| Offset | `int32` | Optional | If there is more data, this is the offset to pass to the next call |

**Use Cases:**
- Returning paginated lists of asset from queries or searches
- Implementing pagination in asset listing APIs
- Handling large assets efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### UserAssetList {#userassetlist}

The `UserAssetList` message represents a collection of userassetlist with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AccountID | `string` | Required | Unique identifier for the account |
| Wallet | `string` | Required | Wallet value |
| AssetKey | `string` | Required | AssetKey value |
| Status | `UserAssetStatus` | Required | Current status of this item (see related enum) |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Visible | `bool` | Required | Visible field |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |

**Use Cases:**
- Returning paginated lists of userassetlist from queries or searches
- Implementing pagination in userassetlist listing APIs
- Handling large userassetlist efficiently
- Tracking status for administrative purposes
- Associating items with specific organizations

**Important Notes:**
- The `AccountID` field must match a valid identifier format
- The `Status` field determines the current state of this item
- The `OrganizationID` must be a valid UUID format

#### UserAssetLists {#userassetlists}

The `UserAssetLists` message represents a collection of userassetlist with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserAssetLists | `UserAssetList` | Optional | UserAssetLists field |

**Use Cases:**
- Returning paginated lists of userassetlist from queries or searches
- Implementing pagination in userassetlist listing APIs
- Handling large userassetlists efficiently

**Important Notes:**
- This message provides the userassetlists representation

#### RealEstate {#realestate}

The `RealEstate` message provides realestate data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Address | `string` | Required | Address value |
| Bathrooms | `int32` | Optional | Bathrooms field |
| Bedrooms | `int32` | Optional | Bedrooms field |
| Latitude | `float` | Required | Latitude field |
| Longitude | `float` | Required | Longitude field |
| OwnershipType | `string` | Optional | Type classification for this item (see related enum) |
| PropertyType | `string` | Required | Type classification for this item (see related enum) |
| RiskRating | `string` | Optional | RiskRating value |
| SquareFootage | `float` | Optional | SquareFootage field |
| TenancyStatus | `string` | Optional | Current status of this item (see related enum) |
| YearBuilt | `int32` | Optional | YearBuilt field |
| YieldPercent | `float` | Optional | YieldPercent field |
| Floors | `int32` | Optional | Floors field |
| HeightMeters | `float` | Optional | HeightMeters field |
| Units | `int32` | Optional | Units field |
| AvailableUnits | `int32` | Optional | AvailableUnits field |
| ParkingSpaces | `int32` | Optional | ParkingSpaces field |
| Elevators | `int32` | Optional | Elevators field |
| Classification | `string` | Optional | Classification value |
| YearRenovated | `int32` | Optional | YearRenovated field |
| LotSize | `float` | Optional | LotSize field |
| ZoningType | `string` | Optional | Type classification for this item (see related enum) |
| CapRate | `float` | Optional | CapRate field |
| NetOperatingIncome | `float` | Optional | NetOperatingIncome field |
| KeyHighlights | `string` | Optional | KeyHighlights value |
| Amenities | `string` | Optional | Amenities value |
| PropertyDescription | `string` | Required | Additional descriptive information about this item |

**Use Cases:**
- Creating new realestate records
- Retrieving realestate information
- Updating realestate data
- Tracking status for administrative purposes

**Important Notes:**
- The `TenancyStatus` field determines the current state of this item

#### StableCoin {#stablecoin}

The `StableCoin` message provides stablecoin data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Version | `string` | Optional | Version value |
| PegType | `string` | Optional | Type classification for this item (see related enum) |
| PegRatio | `float` | Optional | PegRatio field |
| BackingAsset | `string` | Optional | BackingAsset value |
| ExchangeTickerSymbol | `string` | Optional | ExchangeTickerSymbol value |
| Exchange | `string` | Optional | Exchange value |
| MinTransactionAmount | `float` | Optional | MinTransactionAmount field |
| TradingMarginPercentage | `float` | Optional | TradingMarginPercentage field |
| AssetMarginPercentage | `float` | Optional | AssetMarginPercentage field |

**Use Cases:**
- Creating new stablecoin records
- Retrieving stablecoin information
- Updating stablecoin data

**Important Notes:**
- This message provides the stablecoin representation

#### Commodity {#commodity}

The `Commodity` message provides commodity data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Category | `string` | Required | Category value |
| Quality | `string` | Optional | Quality value |
| UnitOfMeasure | `string` | Required | UnitOfMeasure value |
| Quantity | `float` | Optional | Quantity field |
| OriginCountry | `string` | Optional | OriginCountry value |
| ExchangeTickerSymbol | `string` | Optional | ExchangeTickerSymbol value |
| Exchange | `string` | Optional | Exchange value |
| MinTransactionAmount | `float` | Optional | MinTransactionAmount field |
| StorageLocation | `string` | Optional | StorageLocation value |
| ContractType | `string` | Optional | Type classification for this item (see related enum) |
| DeliveryDate | `string` | Optional | DeliveryDate value |

**Use Cases:**
- Creating new commodity records
- Retrieving commodity information
- Updating commodity data

**Important Notes:**
- This message provides the commodity representation

#### Collectible {#collectible}

The `Collectible` message provides collectible data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Category | `string` | Required | Category value |
| CollectionName | `string` | Optional | The collectionname of this item |
| TokenStandard | `string` | Optional | TokenStandard value |
| TokenID | `string` | Optional | Unique identifier for the token |
| MetadataURI | `string` | Optional | Metadata information including network and version details |
| Creator | `string` | Optional | Creator value |
| OwnershipHistory | `string` | Optional | OwnershipHistory value |
| CurrentOwner | `string` | Required | CurrentOwner value |

**Use Cases:**
- Creating new collectible records
- Retrieving collectible information
- Updating collectible data

**Important Notes:**
- The `TokenID` field must match a valid identifier format

#### Vehicle {#vehicle}

The `Vehicle` message provides vehicle data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Category | `string` | Required | Category value |
| Manufacturer | `string` | Required | Manufacturer value |
| Model | `string` | Required | Model value |
| SerialNumber | `string` | Required | SerialNumber value |
| Year | `int32` | Optional | Year field |
| Specifications | `string` | Optional | Specifications value |
| FuelType | `string` | Optional | Type classification for this item (see related enum) |
| UsageHours | `float` | Optional | UsageHours field |
| Mileage | `float` | Optional | Mileage field |
| Condition | `string` | Required | Condition value |
| CurrentOwner | `string` | Required | CurrentOwner value |
| Location | `string` | Optional | Location value |

**Use Cases:**
- Creating new vehicle records
- Retrieving vehicle information
- Updating vehicle data

**Important Notes:**
- This message provides the vehicle representation

#### DecCoin {#deccoin}

The `DecCoin` message provides deccoin data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Denom | `string` | Required | Denom value |
| Amount | `string` | Required | Amount value |

**Use Cases:**
- Creating new deccoin records
- Retrieving deccoin information
- Updating deccoin data

**Important Notes:**
- This message provides the deccoin representation

#### Distribution {#distribution}

The `Distribution` message provides distribution data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Type | `DistributionType` | Required | Type classification for this item (see related enum) |
| CrowdfundDetails | `Crowdfund` | Optional | CrowdfundDetails field |
| TokenSaleDetails | `TokenSale` | Optional | TokenSaleDetails field |

**Use Cases:**
- Creating new distribution records
- Retrieving distribution information
- Updating distribution data

**Important Notes:**
- This message provides the distribution representation

#### TokenSale {#tokensale}

The `TokenSale` message provides tokensale data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| QuantityStep | `string` | Required | QuantityStep value |
| SellPricesPerSubunit | `DecCoin` | Optional | SellPricesPerSubunit field |
| BaseDenom | `string` | Required | Base denom (RWA tokens) |
| MinAmount | `string` | Required | MinAmount value |
| StartDate | `int64` | Required | StartDate field |
| EndDate | `int64` | Required | EndDate field |
| ComplianceManagerContractAddr | `string` | Required | ComplianceManagerContractAddr value |
| BuyPricesPerSubunit | `DecCoin` | Optional | BuyPricesPerSubunit field |
| AssetRegistryContractAddr | `string` | Required | AssetRegistryContractAddr value |
| AssetExtensionCode | `string` | Required | AssetExtensionCode value |
| AssetExtensionContractAddr | `string` | Optional | AssetExtensionContractAddr value |
| OrderHubContractAddr | `string` | Required | OrderHubContractAddr value |
| TokenSaleContractAddr | `string` | Optional | TokenSaleContractAddr value |

**Use Cases:**
- Creating new tokensale records
- Retrieving tokensale information
- Updating tokensale data

**Important Notes:**
- This message provides the tokensale representation

#### Crowdfund {#crowdfund}

The `Crowdfund` message provides crowdfund data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| QuantityStep | `string` | Required | QuantityStep value |
| PricesPerSubunit | `DecCoin` | Optional | PricesPerSubunit field |
| BaseDenom | `string` | Required | Base denom (RWA tokens) |
| MinAmount | `string` | Required | MinAmount value |
| StartDate | `int64` | Required | StartDate field |
| EndDate | `int64` | Required | EndDate field |
| MinThreshold | `string` | Required | MinThreshold value |
| MaxThreshold | `string` | Required | MaxThreshold value |
| AllowOrderCancellation | `bool` | Required | AllowOrderCancellation field |
| ComplianceManagerContractAddr | `string` | Required | ComplianceManagerContractAddr value |
| OrderHubContractAddr | `string` | Required | OrderHubContractAddr value |
| CrowdfundContractAddr | `string` | Optional | CrowdfundContractAddr value |
| AssetRegistryContractAddr | `string` | Required | AssetRegistryContractAddr value |
| AssetExtensionCode | `string` | Required | AssetExtensionCode value |
| AssetExtensionContractAddr | `string` | Optional | AssetExtensionContractAddr value |

**Use Cases:**
- Creating new crowdfund records
- Retrieving crowdfund information
- Updating crowdfund data

**Important Notes:**
- This message provides the crowdfund representation

#### IntellectualProperty {#intellectualproperty}

The `IntellectualProperty` message provides intellectualproperty data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Category | `string` | Required | Category value |
| Owner | `string` | Required | Owner value |
| RegistrationNumber | `string` | Optional | RegistrationNumber value |
| FilingDate | `string` | Optional | FilingDate value |
| ExpirationDate | `string` | Optional | ExpirationDate value |
| IPJurisdictionIDs | `string` | Optional | Unique identifier for the ipjurisdictions |
| LicenseType | `string` | Optional | Type classification for this item (see related enum) |
| LicenseTerms | `string` | Optional | LicenseTerms value |
| Value | `float` | Optional | Value field |

**Use Cases:**
- Creating new intellectualproperty records
- Retrieving intellectualproperty information
- Updating intellectualproperty data

**Important Notes:**
- The `IPJurisdictionIDs` field must match a valid identifier format

#### InvestmentFund {#investmentfund}

The `InvestmentFund` message provides investmentfund data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| FundType | `string` | Required | Type classification for this item (see related enum) |
| Exchange | `string` | Required | Exchange value |
| ISIN | `string` | Optional | ISIN value |
| NAV | `float` | Optional | NAV field |
| InceptionDate | `string` | Optional | InceptionDate value |
| Manager | `string` | Optional | Manager value |
| ExpenseRatio | `float` | Optional | ExpenseRatio field |
| Holdings | `string` | Optional | Holdings value |

**Use Cases:**
- Creating new investmentfund records
- Retrieving investmentfund information
- Updating investmentfund data

**Important Notes:**
- This message provides the investmentfund representation

#### Equity {#equity}

The `Equity` message provides equity data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ExchangeTickerSymbol | `string` | Optional | ExchangeTickerSymbol value |
| Exchange | `string` | Optional | Exchange value |
| MinTransactionAmount | `float` | Required | MinTransactionAmount field |
| TradingMarginPercentage | `float` | Required | TradingMarginPercentage field |
| AssetMarginPercentage | `float` | Required | AssetMarginPercentage field |

**Use Cases:**
- Creating new equity records
- Retrieving equity information
- Updating equity data

**Important Notes:**
- This message provides the equity representation

#### FinancialProperties {#financialproperties}

The `FinancialProperties` message represents a collection of financialpropertie with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Symbol | `string` | Required | Symbol value |
| Issuer | `string` | Required | Issuer value |
| JurisdictionIDs | `string` | Optional | Unique identifier for the jurisdictions |
| JurisdictionRestrictions | `string` | Optional | JurisdictionRestrictions value |
| RedemptionTerms | `string` | Optional | RedemptionTerms value |
| ComplianceRequired | `bool` | Optional | ComplianceRequired field |
| Type | `string` | Required | Type classification for this item (see related enum) |
| TradeAllowances | `string` | Optional | TradeAllowances value |
| Transferable | `bool` | Required | Transferable field |
| Platform | `string` | Required | Platform value |
| PlatformType | `string` | Required | Type classification for this item (see related enum) |
| ContractAddress | `string` | Optional | ContractAddress value |
| Fractional | `bool` | Required | Fractional field |
| TotalSupply | `int32` | Optional | TotalSupply field |
| Subunit | `string` | Optional | Subunit value |
| Price | `float` | Optional | Price field |
| DecimalPlacesPrice | `int32` | Required | DecimalPlacesPrice field |
| Currency | `string` | Required | Currency value |
| InitialValuation | `float` | Required | InitialValuation field |
| CurrentValuation | `float` | Required | CurrentValuation field |
| ValuationDate | `string` | Optional | ValuationDate value |
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| Status | `string` | Required | Current status of this item (see related enum) |

**Use Cases:**
- Returning paginated lists of financialpropertie from queries or searches
- Implementing pagination in financialpropertie listing APIs
- Handling large financialproperties efficiently
- Tracking status for administrative purposes

**Important Notes:**
- The `JurisdictionIDs` field must match a valid identifier format
- The `Status` field determines the current state of this item

#### Description {#description}

The `Description` message provides description data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Name | `string` | Required | The name of this item |
| Description | `string` | Required | Additional descriptive information about this item |
| Logo | `LogoFile` | Required | Logo field |
| AssetID | `string` | Required | Unique identifier for the asset |
| URL | `string` | Required | URL value |
| Country | `string` | Optional | Country value |
| Documents | `string` | Optional | Documents value |
| Images | `string` | Optional | Images value |
| Vertical | `string` | Required | Vertical value |
| CreatedAt | `string` | Optional | CreatedAt value |
| UpdatedAt | `string` | Optional | UpdatedAt value |

**Use Cases:**
- Creating new description records
- Retrieving description information
- Updating description data

**Important Notes:**
- The `AssetID` field must match a valid identifier format

#### ExternalResources {#externalresources}

The `ExternalResources` message represents a collection of externalresource with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Links | `Link` | Optional | Flexible list of links with type and URL |
| Socials | `SocialMedia` | Optional | Flexible list of social media with type and URL |

**Use Cases:**
- Returning paginated lists of externalresource from queries or searches
- Implementing pagination in externalresource listing APIs
- Handling large externalresources efficiently

**Important Notes:**
- This message provides the externalresources representation

#### Link {#link}

The `Link` message provides link data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Type | `LinkType` | Required | Type of link (e.g., "website", "github", "whitepaper", "docs", "explorer", "governance", etc.) |
| URL | `string` | Required | The actual URL |

**Use Cases:**
- Creating new link records
- Retrieving link information
- Updating link data

**Important Notes:**
- This message provides the link representation

#### SocialMedia {#socialmedia}

The `SocialMedia` message provides socialmedia data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Type | `SocialMediaType` | Required | Type of social media (e.g., "twitter", "telegram", "discord", "medium", "linkedin", etc.) |
| URL | `string` | Required | The actual URL |

**Use Cases:**
- Creating new socialmedia records
- Retrieving socialmedia information
- Updating socialmedia data

**Important Notes:**
- This message provides the socialmedia representation

#### IssuerDetails {#issuerdetails}

The `IssuerDetails` message contains all the core information about a issuer, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Name | `string` | Required | The name of this item |
| Description | `string` | Required | Additional descriptive information about this item |
| Image | `string` | Required | Image value |
| ExternalUrl | `string` | Required | ExternalUrl value |
| AddressLine1 | `string` | Required | AddressLine1 value |
| AddressLine2 | `string` | Optional | AddressLine2 value |
| City | `string` | Required | City value |
| Region | `string` | Optional | Region value |
| PostalCode | `string` | Optional | PostalCode value |
| Country | `string` | Required | Country value |
| YearFounded | `int32` | Required | YearFounded field |
| Licensed | `bool` | Required | Licensed field |
| LicenseCountry | `string` | Optional | LicenseCountry value |
| LicenseNumber | `string` | Optional | LicenseNumber value |
| Phone | `string` | Optional | Phone value |
| Email | `string` | Optional | Email value |
| SocialMediaLinks | `string` | Optional | SocialMediaLinks value |
| KeyClients | `string` | Optional | KeyClients value |
| Press | `string` | Optional | Press value |

**Use Cases:**
- Creating new issuer records with complete information
- Updating issuer information

**Important Notes:**
- This message provides the issuerdetails representation

#### LogoFile {#logofile}

The `LogoFile` message provides logofile data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Reference | `string` | Required | The reference to the file |
| Extension | `string` | Required | Extension value |
| Name | `string` | Optional | User defined name of the file, used as a "description" and not to reference the file |

**Use Cases:**
- Creating new logofile records
- Retrieving logofile information
- Updating logofile data

**Important Notes:**
- This message provides the logofile representation

### Enums

#### DistributionType {#distributiontype}

The `DistributionType` enum defines the possible states or types for asset, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| Documents | 7 | Documents value |
| Images | 8 | Images value |
| Vertical | 9 | Vertical value |
| CreatedAt | 10 | CreatedAt value |
| UpdatedAt | 11 | UpdatedAt value |

**Use Cases:**
- Setting distributiontype for items
- Filtering items by distributiontype in queries
- Enforcing business logic based on distributiontype

**Important Notes:**
- Only valid distributiontype values should be used in production code
- DistributionType changes should be tracked in audit trails for compliance purposes

#### LinkType {#linktype}

The `LinkType` enum defines the possible states or types for asset, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| E | 5 | E state or type |
| VEHICLE_INDUSTRIAL_EQUIPMENT | 6 | Vehicle Industrial Equipment state or type |
| INTELLECTUAL_PROPERTY | 7 | Intellectual Property state or type |
| REAL_ESTATE | 8 | Real Estate state or type |
| EQUITY | 9 | Equity state or type |

**Use Cases:**
- Setting linktype for items
- Filtering items by linktype in queries
- Enforcing business logic based on linktype

**Important Notes:**
- Only valid linktype values should be used in production code
- LinkType changes should be tracked in audit trails for compliance purposes

#### UserAssetStatus {#userassetstatus}

The `UserAssetStatus` enum defines the possible states or types for asset, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| USER_ASSET_STATUS_DO_NOT_USE | 0 | Default/unused value (protobuf convention) |
| WHITELISTED | 1 | Whitelisted state or type |
| BLACKLISTED | 2 | Blacklisted state or type |
| SELL_ONLY | 3 | Sell Only state or type |
| OUTDATED_VERSION | 4 | Outdated Version state or type |

**Use Cases:**
- Setting userassetstatus for items
- Filtering items by userassetstatus in queries
- Enforcing business logic based on userassetstatus

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid userassetstatus values should be used in production code
- UserAssetStatus changes should be tracked in audit trails for compliance purposes

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `asset.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `asset.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-asset-model/domain/denom/denom.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
