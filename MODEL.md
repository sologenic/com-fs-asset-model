# Asset Documentation

## Table of Contents

1. [Overview](#overview)
2. [asset.proto - Core Asset Model](#asset-proto---core-asset-model)
3. [asset-grpc.proto - Asset gRPC Service](#asset-grpc-proto---asset-grpc-service)
4. [domain/currency/currency.proto - Currency Definitions](#domaincurrencycurrency-proto---currency-definitions)
5. [domain/denom/denom.proto - Denomination Definitions](#domaindenomdenomproto---denomination-definitions)
6. [domain/symbol/symbol.proto - Symbol Definitions](#domainsymbolsymbolproto---symbol-definitions)
7. [Version Information](#version-information)
8. [Support](#support)

## Overview

The com-fs-asset-model repository defines the Protocol Buffer schemas for a comprehensive asset management and tokenization system. This model supports multiple asset types including real world assets (RWA), digital assets, commodities, real estate, collectibles, and various financial instruments.

### Key Features

- **Multi-Asset Support**: Comprehensive definitions for real estate, commodities, stablecoins, collectibles, vehicles, intellectual property, investment funds, and equity assets
- **Tokenization Framework**: Built-in support for asset tokenization with denomination and currency management
- **Distribution Mechanisms**: Support for crowdfunding and token sale distribution methods
- **Compliance Integration**: Jurisdiction-based compliance and regulatory framework support
- **gRPC Services**: Complete service definitions for asset management operations
- **Audit and Metadata**: Integrated audit trails and metadata management
- **Financial Properties**: Detailed financial attributes and valuation tracking

The system is designed to handle complex asset structures while maintaining flexibility for various tokenization scenarios and regulatory requirements across different jurisdictions.

## asset.proto - Core Asset Model

**Package:** `asset`  
**Go Package Path:** `github.com/sologenic/com-fs-asset-model;asset`

### Overview

The asset.proto file contains the core asset model definitions, including the main Asset message structure and all asset-specific details. This file defines comprehensive schemas for various asset types, financial properties, and distribution mechanisms.

### Messages

#### Asset

The primary asset message that combines all asset-related information.

| Field         | Type              | Required/Optional | Description                                                                   |
| ------------- | ----------------- | ----------------- | ----------------------------------------------------------------------------- |
| AssetDetails  | AssetDetails      | Required          | Core asset information including ID, status, type, and asset-specific details |
| MetaData      | metadata.MetaData | Required          | System metadata for the asset                                                 |
| Audit         | audit.Audit       | Required          | Audit trail information                                                       |
| IssuerDetails | IssuerDetails     | Required          | Information about the asset issuer                                            |

**Use Cases:**

- Complete asset representation for storage and retrieval
- Asset transfer and ownership management
- Regulatory compliance and audit purposes

#### AssetDetails

Contains the core details and properties of an asset. Key string to prevent composing the key all the time and reduce errors.

| Field                       | Type                 | Required/Optional | Description                                                      |
| --------------------------- | -------------------- | ----------------- | ---------------------------------------------------------------- |
| ID                          | string               | Required          | Unique key string to prevent composition errors                  |
| OrganizationID              | string               | Required          | Organization that manages the asset                              |
| Status                      | AssetStatus          | Required          | Current status of the asset (DO_NOT_LIST, REQUEST_LISTING, etc.) |
| Reason                      | Reason               | Optional          | Reason for certain status changes                                |
| Type                        | AssetType            | Required          | Type of asset (REAL_ESTATE, COMMODITY, CRYPTO, etc.)             |
| Denom                       | denom.Denom          | Required          | On-chain denomination information                                |
| IsIssuedInSmartContract     | bool                 | Required          | Whether the asset is issued via smart contract                   |
| SmartContractIssuerAddr     | string               | Required          | Address of the smart contract issuer                             |
| RealEstateDetails           | RealEstate           | Optional          | Real estate specific properties                                  |
| StableCoinDetails           | StableCoin           | Optional          | Stablecoin specific properties                                   |
| CommodityDetails            | Commodity            | Optional          | Commodity specific properties                                    |
| CollectibleDetails          | Collectible          | Optional          | Collectible (NFT) specific properties                            |
| VehicleDetails              | Vehicle              | Optional          | Vehicle/equipment specific properties                            |
| IntellectualPropertyDetails | IntellectualProperty | Optional          | IP asset specific properties                                     |
| InvestmentFundDetails       | InvestmentFund       | Optional          | Investment fund specific properties                              |
| EquityDetails               | Equity               | Optional          | Equity asset specific properties                                 |
| FinancialProperties         | FinancialProperties  | Optional          | Financial-specific properties                                    |
| Description                 | Description          | Optional          | Human-readable descriptive properties                            |
| ExternalResources           | ExternalResources    | Optional          | External links and resources                                     |
| DistributionDetails         | Distribution         | Optional          | Distribution method details                                      |

**Use Cases:**

- Asset creation and modification
- Asset categorization and filtering
- Regulatory compliance checks

**Important Notes:**

- The ID field is a key string designed to prevent composing the key all the time and reduce errors
- Only one asset type detail should be populated based on the Type field
- FinancialProperties, Description, and ExternalResources are optional but commonly used for complete asset information

#### Assets

Container for multiple assets with pagination support.

| Field  | Type           | Required/Optional | Description                                                        |
| ------ | -------------- | ----------------- | ------------------------------------------------------------------ |
| Assets | repeated Asset | Required          | List of assets                                                     |
| Offset | int32          | Optional          | If there is more data, this is the offset to pass to the next call |

**Use Cases:**

- Paginated asset retrieval
- Bulk asset operations
- Asset listing endpoints

#### UserAssetList

Represents a user's relationship with a specific asset, including permissions and visibility settings.

| Field          | Type              | Required/Optional | Description                              |
| -------------- | ----------------- | ----------------- | ---------------------------------------- |
| AccountID      | string            | Required          | User's account identifier                |
| Wallet         | string            | Required          | Wallet address                           |
| AssetKey       | string            | Required          | Reference to the asset                   |
| Status         | UserAssetStatus   | Required          | User's permission status for the asset   |
| MetaData       | metadata.MetaData | Required          | System metadata                          |
| Visible        | bool              | Required          | Whether the asset is visible to the user |
| OrganizationID | string            | Required          | Associated organization                  |

**Use Cases:**

- User portfolio management
- Asset permission control
- Compliance and whitelisting
- User-specific asset visibility

#### UserAssetLists

Container for multiple user asset list entries.

| Field          | Type                   | Required/Optional | Description                      |
| -------------- | ---------------------- | ----------------- | -------------------------------- |
| UserAssetLists | repeated UserAssetList | Required          | List of user asset relationships |

### Asset Type Specific Messages

#### RealEstate

Defines properties for real estate assets including residential, commercial, and mixed-use properties.

| Field               | Type            | Required/Optional | Description                                      |
| ------------------- | --------------- | ----------------- | ------------------------------------------------ |
| Address             | string          | Required          | Property address                                 |
| Bathrooms           | int32           | Optional          | Number of bathrooms                              |
| Bedrooms            | int32           | Optional          | Number of bedrooms                               |
| Latitude            | float           | Required          | Geographic latitude                              |
| Longitude           | float           | Required          | Geographic longitude                             |
| OwnershipType       | string          | Optional          | Type of ownership (freehold, leasehold, etc.)    |
| PropertyType        | string          | Required          | Type of property (residential, commercial, etc.) |
| RiskRating          | string          | Optional          | Investment risk assessment                       |
| SquareFootage       | float           | Optional          | Total area in square feet                        |
| TenancyStatus       | string          | Optional          | Current occupancy status                         |
| YearBuilt           | int32           | Optional          | Year of construction                             |
| YieldPercent        | repeated float  | Optional          | Historical yield percentages                     |
| Floors              | int32           | Optional          | Number of floors                                 |
| HeightMeters        | float           | Optional          | Height in meters                                 |
| Units               | int32           | Optional          | Total number of units                            |
| AvailableUnits      | int32           | Optional          | Currently available units                        |
| ParkingSpaces       | int32           | Optional          | Number of parking spaces                         |
| Elevators           | int32           | Optional          | Number of elevators                              |
| Classification      | string          | Optional          | Property classification                          |
| YearRenovated       | int32           | Optional          | Year of last renovation                          |
| LotSize             | float           | Optional          | Lot size                                         |
| ZoningType          | string          | Optional          | Zoning classification                            |
| CapRate             | float           | Optional          | Capitalization rate                              |
| NetOperatingIncome  | float           | Optional          | Annual NOI                                       |
| KeyHighlights       | repeated string | Optional          | Property highlights                              |
| Amenities           | repeated string | Optional          | Available amenities                              |
| PropertyDescription | string          | Required          | Detailed property description                    |

**Use Cases:**

- Real estate tokenization
- Property investment analysis
- Real estate portfolio management
- Property valuation and assessment

#### StableCoin

Defines properties for stablecoin assets with pegging mechanisms and exchange information.

| Field                   | Type   | Required/Optional | Description                           |
| ----------------------- | ------ | ----------------- | ------------------------------------- |
| Version                 | string | Optional          | Stablecoin version                    |
| PegType                 | string | Optional          | Type of peg (fiat, crypto, commodity) |
| PegRatio                | float  | Optional          | Ratio of peg (e.g., 1:1)              |
| BackingAsset            | string | Optional          | Asset backing the stablecoin          |
| ExchangeTickerSymbol    | string | Optional          | Trading symbol on exchanges           |
| Exchange                | string | Optional          | Primary exchange for trading          |
| MinTransactionAmount    | float  | Optional          | Minimum transaction amount            |
| TradingMarginPercentage | float  | Optional          | Trading margin requirement            |
| AssetMarginPercentage   | float  | Optional          | Asset margin requirement              |

**Use Cases:**

- Stablecoin issuance and management
- Exchange integration
- Trading margin calculations
- Peg mechanism tracking

#### Commodity

Defines properties for commodity assets including metals, energy, agriculture, and other physical commodities.

| Field                | Type   | Required/Optional | Description                                            |
| -------------------- | ------ | ----------------- | ------------------------------------------------------ |
| Category             | string | Required          | Commodity category (metals, energy, agriculture, etc.) |
| Quality              | string | Optional          | Quality grade or specification                         |
| UnitOfMeasure        | string | Required          | Unit of measurement (tons, barrels, ounces, etc.)      |
| Quantity             | float  | Optional          | Total quantity available                               |
| OriginCountry        | string | Optional          | Country of origin                                      |
| ExchangeTickerSymbol | string | Optional          | Trading symbol                                         |
| Exchange             | string | Optional          | Primary exchange                                       |
| MinTransactionAmount | float  | Optional          | Minimum transaction amount                             |
| StorageLocation      | string | Optional          | Physical storage location                              |
| ContractType         | string | Optional          | Contract type (spot, futures, etc.)                    |
| DeliveryDate         | string | Optional          | Expected delivery date                                 |

**Use Cases:**

- Commodity tokenization
- Physical asset tracking
- Exchange trading integration
- Supply chain management

#### Collectible

Defines properties for collectible/NFT assets including art, sports memorabilia, gaming items, and digital collectibles.

| Field            | Type            | Required/Optional | Description                                         |
| ---------------- | --------------- | ----------------- | --------------------------------------------------- |
| Category         | string          | Required          | Category of collectible (art, sports, gaming, etc.) |
| CollectionName   | string          | Optional          | Name of the collection                              |
| TokenStandard    | string          | Optional          | Token standard (ERC-721, ERC-1155, etc.)            |
| TokenID          | string          | Optional          | Unique token identifier                             |
| MetadataURI      | string          | Optional          | URI to metadata                                     |
| Creator          | string          | Optional          | Original creator                                    |
| OwnershipHistory | repeated string | Optional          | Historical ownership chain                          |
| CurrentOwner     | string          | Required          | Current owner                                       |

**Use Cases:**

- NFT tokenization
- Collectible provenance tracking
- Digital art management
- Gaming asset tokenization

#### Vehicle

Defines properties for vehicle and industrial equipment assets including cars, trucks, aircraft, and machinery.

| Field          | Type   | Required/Optional | Description                                   |
| -------------- | ------ | ----------------- | --------------------------------------------- |
| Category       | string | Required          | Vehicle category (car, truck, aircraft, etc.) |
| Manufacturer   | string | Required          | Vehicle manufacturer                          |
| Model          | string | Required          | Vehicle model                                 |
| SerialNumber   | string | Required          | Serial or VIN number                          |
| Year           | int32  | Optional          | Manufacturing year                            |
| Specifications | string | Optional          | Technical specifications                      |
| FuelType       | string | Optional          | Fuel type (gasoline, electric, diesel, etc.)  |
| UsageHours     | float  | Optional          | Total usage hours                             |
| Mileage        | float  | Optional          | Total mileage                                 |
| Condition      | string | Required          | Current condition assessment                  |
| CurrentOwner   | string | Required          | Current owner                                 |
| Location       | string | Optional          | Current location                              |

**Use Cases:**

- Vehicle tokenization
- Equipment financing
- Fleet management
- Asset tracking and valuation

#### IntellectualProperty

Defines properties for intellectual property assets including patents, trademarks, copyrights, and licenses.

| Field              | Type            | Required/Optional | Description                                      |
| ------------------ | --------------- | ----------------- | ------------------------------------------------ |
| Category           | string          | Required          | IP category (patent, trademark, copyright, etc.) |
| Owner              | string          | Required          | IP rights holder                                 |
| RegistrationNumber | string          | Optional          | Official registration number                     |
| FilingDate         | string          | Optional          | Original filing date                             |
| ExpirationDate     | string          | Optional          | Rights expiration date                           |
| IPJurisdictionIDs  | repeated string | Optional          | Jurisdictions where IP is valid                  |
| LicenseType        | string          | Optional          | Type of license available                        |
| LicenseTerms       | string          | Optional          | License terms and conditions                     |
| Value              | float           | Optional          | Estimated IP value                               |

**Use Cases:**

- IP tokenization
- License management
- IP portfolio tracking
- Royalty distribution

#### InvestmentFund

Defines properties for investment fund assets including ETFs, mutual funds, and hedge funds.

| Field         | Type            | Required/Optional | Description                                       |
| ------------- | --------------- | ----------------- | ------------------------------------------------- |
| FundType      | string          | Required          | Type of fund (ETF, mutual fund, hedge fund, etc.) |
| Exchange      | string          | Required          | Primary exchange                                  |
| ISIN          | string          | Optional          | International Securities Identification Number    |
| NAV           | float           | Optional          | Net Asset Value                                   |
| InceptionDate | string          | Optional          | Fund inception date                               |
| Manager       | string          | Optional          | Fund manager                                      |
| ExpenseRatio  | float           | Optional          | Annual expense ratio                              |
| Holdings      | repeated string | Optional          | Major fund holdings                               |

**Use Cases:**

- Fund tokenization
- Portfolio management
- Fund performance tracking
- Investment product distribution

#### Equity

Defines properties for equity assets including stocks and equity securities.

| Field                   | Type   | Required/Optional | Description                |
| ----------------------- | ------ | ----------------- | -------------------------- |
| ExchangeTickerSymbol    | string | Optional          | Stock ticker symbol        |
| Exchange                | string | Optional          | Primary exchange           |
| MinTransactionAmount    | float  | Required          | Minimum transaction amount |
| TradingMarginPercentage | float  | Required          | Trading margin requirement |
| AssetMarginPercentage   | float  | Required          | Asset margin requirement   |

**Use Cases:**

- Equity tokenization
- Stock trading integration
- Margin calculation
- Exchange compliance

### Financial and Descriptive Properties

#### FinancialProperties

Contains general financial information applicable to any asset. Financial-specific properties.

| Field                    | Type             | Required/Optional | Description                             |
| ------------------------ | ---------------- | ----------------- | --------------------------------------- |
| Symbol                   | string           | Required          | Asset symbol/ticker                     |
| Issuer                   | string           | Required          | Asset issuer                            |
| JurisdictionIDs          | repeated string  | Optional          | Applicable jurisdictions                |
| JurisdictionRestrictions | string           | Optional          | Jurisdiction-based restrictions         |
| RedemptionTerms          | string           | Optional          | Terms for asset redemption              |
| ComplianceRequired       | bool             | Optional          | Whether compliance checks are required  |
| Type                     | string           | Required          | Financial asset type                    |
| TradeAllowances          | repeated string  | Optional          | Allowed trading operations              |
| Transferable             | bool             | Required          | Whether the asset can be transferred    |
| Platform                 | string           | Required          | Issuing platform                        |
| PlatformType             | string           | Required          | Type of platform                        |
| ContractAddress          | string           | Optional          | Smart contract address                  |
| Fractional               | bool             | Required          | Whether fractional ownership is allowed |
| TotalSupply              | int32            | Optional          | Total supply of the asset               |
| Subunit                  | string           | Optional          | Smallest tradeable unit                 |
| Price                    | float            | Optional          | Current price                           |
| DecimalPlacesPrice       | int32            | Required          | Decimal places for price precision      |
| Currency                 | string           | Required          | Price currency                          |
| InitialValuation         | float            | Required          | Initial asset valuation                 |
| CurrentValuation         | float            | Required          | Current asset valuation                 |
| ValuationDate            | string           | Optional          | Date of last valuation                  |
| Network                  | metadata.Network | Required          | Blockchain network                      |
| Status                   | string           | Required          | Financial status                        |

**Use Cases:**

- Financial asset management
- Trading configuration
- Compliance tracking
- Valuation management

#### Description

Contains human-readable descriptive information. Human-readable descriptive properties.

| Field       | Type            | Required/Optional | Description                 |
| ----------- | --------------- | ----------------- | --------------------------- |
| Name        | string          | Required          | Asset name                  |
| Description | string          | Required          | Detailed description        |
| Logo        | LogoFile        | Required          | Asset logo/image            |
| AssetID     | string          | Required          | Asset identifier            |
| URL         | string          | Required          | Official website URL        |
| Country     | repeated string | Optional          | Countries of operation      |
| Documents   | repeated string | Optional          | Related document references |
| Images      | repeated string | Optional          | Additional image references |
| Vertical    | string          | Required          | Business vertical/sector    |
| CreatedAt   | string          | Optional          | Creation timestamp          |
| UpdatedAt   | string          | Optional          | Last update timestamp       |

**Use Cases:**

- User-facing asset information
- Asset presentation and marketing
- Documentation management
- Asset discovery and browsing

#### ExternalResources

Contains external links and social media information. External links and resources.

| Field   | Type                 | Required/Optional | Description                                     |
| ------- | -------------------- | ----------------- | ----------------------------------------------- |
| Links   | repeated Link        | Optional          | Flexible list of links with type and URL        |
| Socials | repeated SocialMedia | Optional          | Flexible list of social media with type and URL |

**Use Cases:**

- Asset marketing and promotion
- Community engagement
- Documentation and resources
- Social media presence

#### Link

Represents an external link with type classification. Type of link (e.g., "website", "github", "whitepaper", "docs", "explorer", "governance", etc.)

| Field | Type     | Required/Optional | Description                                      |
| ----- | -------- | ----------------- | ------------------------------------------------ |
| Type  | LinkType | Required          | Type of link (WEBSITE, GITHUB, WHITEPAPER, etc.) |
| URL   | string   | Required          | The actual URL                                   |

#### SocialMedia

Represents a social media profile with type classification. Type of social media (e.g., "twitter", "telegram", "discord", "medium", "linkedin", etc.)

| Field | Type            | Required/Optional | Description                                    |
| ----- | --------------- | ----------------- | ---------------------------------------------- |
| Type  | SocialMediaType | Required          | Type of social media (TWITTER, TELEGRAM, etc.) |
| URL   | string          | Required          | Profile URL                                    |

### Distribution Mechanisms

#### Distribution

Defines how an asset is distributed to investors through various mechanisms.

| Field            | Type             | Required/Optional | Description                                |
| ---------------- | ---------------- | ----------------- | ------------------------------------------ |
| Type             | DistributionType | Required          | Distribution method (CROWDFUND, TOKENSALE) |
| CrowdfundDetails | Crowdfund        | Optional          | Crowdfunding specific details              |
| TokenSaleDetails | TokenSale        | Optional          | Token sale specific details                |

**Use Cases:**

- Asset tokenization campaigns
- Investment distribution
- Fundraising mechanisms
- Token sale management

#### TokenSale

Defines a token sale distribution mechanism. Should be pre-issued (even with zero total supply). Base denom (RWA tokens). Address of compliance manager contract. That contract is called to check if transfers are allowed or not. Buy prices per subunit. If empty, buy is not allowed for this token sale.

| Field                         | Type             | Required/Optional | Description                                                                                              |
| ----------------------------- | ---------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| QuantityStep                  | string           | Required          | The smallest allowable step for the base_denom                                                           |
| SellPricesPerSubunit          | repeated DecCoin | Required          | Price to purchase the tokenized asset with, per subunit                                                  |
| BaseDenom                     | string           | Required          | Base denom (RWA tokens). Should be pre-issued (even with zero total supply)                              |
| MinAmount                     | string           | Required          | Minimum amount of base_denom to purchase                                                                 |
| StartDate                     | int64            | Required          | Timestamp (in seconds) of when the token sale starts                                                     |
| EndDate                       | int64            | Required          | Timestamp (in seconds) of when the token sale ends                                                       |
| ComplianceManagerContractAddr | string           | Required          | Address of compliance manager contract. That contract is called to check if transfers are allowed or not |
| BuyPricesPerSubunit           | repeated DecCoin | Optional          | Buy prices per subunit. If empty, buy is not allowed for this token sale                                 |
| AssetRegistryContractAddr     | string           | Required          | Address of the asset registry contract                                                                   |
| AssetExtensionCode            | string           | Required          | Code of the asset extension                                                                              |
| AssetExtensionContractAddr    | string           | Optional          | Address of the asset extension contract                                                                  |
| OrderHubContractAddr          | string           | Required          | Address of the order hub contract                                                                        |
| TokenSaleContractAddr         | string           | Optional          | Address of the token sale contract                                                                       |

**Use Cases:**

- Token sale campaigns
- Asset tokenization launches
- Investment distribution
- Compliance-enabled token sales

#### Crowdfund

Defines a crowdfunding distribution mechanism. Should be pre-issued (even with zero total supply). Base denom (RWA tokens). Timestamp (in seconds) of when the token sale starts. Timestamp (in seconds) of when the token sale ends. Address of the compliance manager contract.

| Field                         | Type             | Required/Optional | Description                                                                 |
| ----------------------------- | ---------------- | ----------------- | --------------------------------------------------------------------------- |
| QuantityStep                  | string           | Required          | The smallest allowable step for the base_denom                              |
| PricesPerSubunit              | repeated DecCoin | Required          | Price to purchase the tokenized asset with, per subunit                     |
| BaseDenom                     | string           | Required          | Base denom (RWA tokens). Should be pre-issued (even with zero total supply) |
| MinAmount                     | string           | Required          | Minimum amount of base_denom to purchase                                    |
| StartDate                     | int64            | Required          | Timestamp (in seconds) of when the token sale starts                        |
| EndDate                       | int64            | Required          | Timestamp (in seconds) of when the token sale ends                          |
| MinThreshold                  | string           | Required          | Minimum threshold for the token sale                                        |
| MaxThreshold                  | string           | Required          | Maximum threshold for the token sale                                        |
| AllowOrderCancellation        | bool             | Required          | Allow order cancellation                                                    |
| ComplianceManagerContractAddr | string           | Required          | Address of the compliance manager contract                                  |
| OrderHubContractAddr          | string           | Required          | Address of the order hub contract                                           |
| CrowdfundContractAddr         | string           | Optional          | Address of the crowdfund contract                                           |
| AssetRegistryContractAddr     | string           | Required          | Address of the asset registry contract                                      |
| AssetExtensionCode            | string           | Required          | Code of the asset extension                                                 |
| AssetExtensionContractAddr    | string           | Optional          | Address of the asset extension contract                                     |

**Use Cases:**

- Crowdfunding campaigns
- Threshold-based fundraising
- Community investment projects
- Flexible investment distribution

#### DecCoin

Represents a decimal coin with denomination and amount, used for pricing in distribution mechanisms.

| Field  | Type   | Required/Optional | Description                  |
| ------ | ------ | ----------------- | ---------------------------- |
| Denom  | string | Required          | Coin denomination            |
| Amount | string | Required          | Coin amount (decimal string) |

**Use Cases:**

- Price representation in token sales
- Crowdfunding pricing
- Multi-currency support
- Precise decimal calculations

#### IssuerDetails

Contains detailed information about the asset issuer including company information, licensing, and contact details.

| Field            | Type            | Required/Optional | Description                     |
| ---------------- | --------------- | ----------------- | ------------------------------- |
| Name             | string          | Required          | Issuer company name             |
| Description      | string          | Required          | Company description             |
| Image            | string          | Required          | Company logo/image reference    |
| ExternalUrl      | string          | Required          | Official website                |
| AddressLine1     | string          | Required          | Primary address                 |
| AddressLine2     | string          | Optional          | Secondary address line          |
| City             | string          | Required          | City                            |
| Region           | string          | Optional          | State/region                    |
| PostalCode       | string          | Optional          | Postal/zip code                 |
| Country          | string          | Required          | Country                         |
| YearFounded      | int32           | Required          | Year company was founded        |
| Licensed         | bool            | Required          | Whether the company is licensed |
| LicenseCountry   | string          | Optional          | Country of license              |
| LicenseNumber    | string          | Optional          | License number                  |
| Phone            | string          | Optional          | Contact phone number            |
| Email            | string          | Optional          | Contact email                   |
| SocialMediaLinks | repeated string | Optional          | Social media profiles           |
| KeyClients       | string          | Optional          | Notable clients                 |
| Press            | string          | Optional          | Press mentions or coverage      |

**Use Cases:**

- Issuer verification
- Compliance documentation
- Investor due diligence
- Company profile display

#### LogoFile

Represents a file reference for logos and images. The reference to the file. User defined name of the file, used as a "description" and not to reference the file.

| Field     | Type   | Required/Optional | Description                                                                          |
| --------- | ------ | ----------------- | ------------------------------------------------------------------------------------ |
| Reference | string | Required          | The reference to the file                                                            |
| Extension | string | Required          | File extension                                                                       |
| Name      | string | Optional          | User defined name of the file, used as a "description" and not to reference the file |

**Use Cases:**

- Asset logo storage
- Image file management
- Brand asset representation

### Enums

#### AssetStatus

Defines the status of an asset in the system.

| Value                          | Number | Description                        |
| ------------------------------ | ------ | ---------------------------------- |
| ASSET_STATUS_DO_NOT_USE        | 0      | Reserved value, do not use         |
| DO_NOT_LIST                    | 1      | Asset should not be listed         |
| REQUEST_LISTING                | 2      | Asset is requesting to be listed   |
| LISTED                         | 3      | Asset is actively listed           |
| ORGANIZATION_ADMIN_DO_NOT_LIST | 4      | Organization admin blocked listing |
| OUTDATED_ASSET_VERSION         | 5      | Asset version is outdated          |

**Use Cases:**

- Asset lifecycle management
- Listing approval workflows
- Version control
- Administrative controls

#### Reason

Provides reasons for certain asset status changes.

| Value             | Number | Description                       |
| ----------------- | ------ | --------------------------------- |
| REASON_DO_NOT_USE | 0      | Reserved value, do not use        |
| DUPLICATE         | 1      | Asset is a duplicate              |
| UNWANTED_ASSET    | 2      | Asset is not wanted in the system |
| UNSTABLE_ASSET    | 3      | Asset is considered unstable      |

**Use Cases:**

- Status change documentation
- Audit trail maintenance
- Asset rejection reasons
- Quality control

#### AssetType

Defines the category of an asset.

| Value                        | Number | Description                       |
| ---------------------------- | ------ | --------------------------------- |
| ASSET_TYPE_DO_NOT_USE        | 0      | Reserved value, do not use        |
| FUNDS_AND_INVESTMENT_PRODUCT | 1      | Investment funds and products     |
| COMMODITY                    | 2      | Physical commodities              |
| WRAPPED_STABLECOIN           | 3      | Wrapped stablecoin assets         |
| CRYPTO                       | 4      | Cryptocurrency assets             |
| COLLECTIBLE                  | 5      | Collectibles and NFTs             |
| VEHICLE_INDUSTRIAL_EQUIPMENT | 6      | Vehicles and industrial equipment |
| INTELLECTUAL_PROPERTY        | 7      | Intellectual property assets      |
| REAL_ESTATE                  | 8      | Real estate properties            |
| EQUITY                       | 9      | Equity securities                 |

**Use Cases:**

- Asset categorization
- Type-specific validation
- Filtering and search
- Regulatory classification

#### UserAssetStatus

Defines a user's permission status for an asset.

| Value                        | Number | Description                        |
| ---------------------------- | ------ | ---------------------------------- |
| USER_ASSET_STATUS_DO_NOT_USE | 0      | Reserved value, do not use         |
| WHITELISTED                  | 1      | User is whitelisted for the asset  |
| BLACKLISTED                  | 2      | User is blacklisted from the asset |
| SELL_ONLY                    | 3      | User can only sell, not buy        |
| OUTDATED_VERSION             | 4      | User has outdated version          |

**Use Cases:**

- User permission management
- Compliance controls
- Access restrictions
- Version synchronization

#### DistributionType

Defines the type of distribution mechanism.

| Value                        | Number | Description                |
| ---------------------------- | ------ | -------------------------- |
| DISTRIBUTION_TYPE_DO_NOT_USE | 0      | Reserved value, do not use |
| DISTRIBUTION_TYPE_CROWDFUND  | 1      | Crowdfunding distribution  |
| DISTRIBUTION_TYPE_TOKENSALE  | 2      | Token sale distribution    |

**Use Cases:**

- Distribution method selection
- Campaign type configuration
- Investment mechanism identification

#### LinkType

Defines types of external links.

| Value                | Number | Description                |
| -------------------- | ------ | -------------------------- |
| LINK_TYPE_DO_NOT_USE | 0      | Reserved value, do not use |
| WEBSITE              | 1      | Official website           |
| GITHUB               | 2      | GitHub repository          |
| WHITEPAPER           | 3      | Project whitepaper         |
| DOCS                 | 4      | Documentation              |
| EXPLORER             | 5      | Blockchain explorer        |
| GOVERNANCE           | 6      | Governance platform        |

**Use Cases:**

- Link categorization
- Resource organization
- External reference management

#### SocialMediaType

Defines types of social media platforms.

| Value                        | Number | Description                |
| ---------------------------- | ------ | -------------------------- |
| SOCIAL_MEDIA_TYPE_DO_NOT_USE | 0      | Reserved value, do not use |
| TWITTER                      | 1      | Twitter/X profile          |
| TELEGRAM                     | 2      | Telegram channel/group     |
| DISCORD                      | 3      | Discord server             |
| MEDIUM                       | 4      | Medium publication         |
| LINKEDIN                     | 5      | LinkedIn profile           |

**Use Cases:**

- Social media link organization
- Community platform identification
- Marketing resource management

## asset-grpc.proto - Asset gRPC Service

**Package:** `asset`  
**Go Package Path:** `github.com/sologenic/com-fs-asset-model;asset`

### Overview

The asset-grpc.proto file defines the gRPC service interface for asset management operations. It provides comprehensive CRUD operations for both assets and user asset lists with support for filtering, pagination, and compliance checks.

### Services

#### AssetListService

The main gRPC service for asset management operations.

**Methods:**

##### UpsertAsset

Upsert on Asset. Creates or updates an asset in the system.

**Request:** `Asset`  
**Response:** `AssetKey`

**Behavior:**

- Creates a new asset if it doesn't exist
- Updates existing asset if it already exists
- Returns the asset key for reference
- Validates asset data and compliance requirements

**Use Cases:**

- Initial asset onboarding
- Asset information updates
- Status changes

**Error Conditions:**

- Invalid asset data
- Compliance violations
- Duplicate asset conflicts

##### GetAsset

Get Asset by Key. Retrieves a single asset by its key.

**Request:** `AssetKey`  
**Response:** `Asset`

**Behavior:**

- Returns complete asset information including details, metadata, and audit trail
- Includes issuer information
- May apply jurisdiction-based filtering

**Use Cases:**

- Asset detail views
- Asset verification
- Compliance checks

**Error Conditions:**

- Asset not found
- Access denied due to jurisdiction restrictions

##### GetAssets

Get all Assets for a given filter. Retrieves multiple assets based on filter criteria.

**Request:** `AssetQuery`  
**Response:** `Assets`

**Behavior:**

- Supports pagination via offset and limit
- Applies multiple filters simultaneously
- Returns assets matching all specified criteria
- Includes compliance filtering by jurisdiction

**Use Cases:**

- Asset listing and browsing
- Portfolio management
- Compliance reporting
- Asset discovery

**Error Conditions:**

- Invalid query parameters
- Pagination errors
- Jurisdiction access violations

##### UpsertUserAssetList

Upsert on UserAssetList. Creates or updates a user's relationship with an asset.

**Request:** `UserAssetList`  
**Response:** `UserAssetListKey`

**Behavior:**

- Manages user-specific asset permissions and visibility
- Handles whitelist/blacklist status
- Updates asset visibility preferences
- Maintains audit trail of changes

**Use Cases:**

- User asset permissions management
- Portfolio customization
- Compliance status updates

**Error Conditions:**

- Invalid user or asset references
- Permission conflicts
- Status validation errors

##### GetUserAssetList

Get UserAssetList by Key. Retrieves a single user asset list entry by key.

**Request:** `UserAssetListKey`  
**Response:** `UserAssetList`

**Behavior:**

- Returns user-specific asset relationship data
- Includes current status and visibility settings
- Provides metadata and audit information

**Use Cases:**

- User permission verification
- Portfolio status checks
- Compliance auditing

**Error Conditions:**

- Entry not found
- Access denied

##### GetUserAssetLists

Get all UserAssetList for a given filter. Retrieves multiple user asset list entries based on filter criteria.

**Request:** `UserAssetListQuery`  
**Response:** `UserAssetLists`

**Behavior:**

- Supports filtering by user, asset, status, and organization
- Includes pagination support
- Returns comprehensive relationship data

**Use Cases:**

- User portfolio management
- Bulk permission updates
- Organization asset management
- Compliance reporting

**Error Conditions:**

- Invalid query parameters
- Access permission violations

### Message Definitions

#### AssetKey

Simple key wrapper for asset identification.

| Field | Type   | Required/Optional | Description             |
| ----- | ------ | ----------------- | ----------------------- |
| Key   | string | Required          | Unique asset identifier |

#### AssetQuery

Query parameters for asset filtering and retrieval. Compliance filter: list assets allowed in these jurisdictions. On-chain issuer address (distinct from Denom.Issuer).

| Field                   | Type             | Required/Optional | Description                                                   |
| ----------------------- | ---------------- | ----------------- | ------------------------------------------------------------- |
| Network                 | metadata.Network | Required          | Blockchain network filter                                     |
| Offset                  | int32            | Optional          | Pagination offset                                             |
| JurisdictionIDs         | repeated string  | Optional          | Compliance filter: list assets allowed in these jurisdictions |
| OrganizationID          | string           | Optional          | Organization filter                                           |
| Status                  | AssetStatus      | Optional          | Asset status filter                                           |
| AssetType               | AssetType        | Optional          | Asset type filter                                             |
| SmartContractIssuerAddr | string           | Optional          | On-chain issuer address (distinct from Denom.Issuer)          |
| Limit                   | int32            | Optional          | Maximum results to return                                     |

**Use Cases:**

- Asset discovery and browsing
- Compliance-filtered asset listings
- Organization-specific asset management
- Type-based asset categorization

**Important Notes:**

- JurisdictionIDs filter ensures compliance by only returning assets allowed in specified jurisdictions
- SmartContractIssuerAddr is distinct from Denom.Issuer and refers to the on-chain contract issuer

#### UserAssetListKey

Simple key wrapper for user asset list identification.

| Field | Type   | Required/Optional | Description                       |
| ----- | ------ | ----------------- | --------------------------------- |
| Key   | string | Required          | Unique user asset list identifier |

#### UserAssetListQuery

Query parameters for user asset list filtering and retrieval.

| Field          | Type             | Required/Optional | Description               |
| -------------- | ---------------- | ----------------- | ------------------------- |
| Network        | metadata.Network | Required          | Blockchain network filter |
| Offset         | int32            | Optional          | Pagination offset         |
| AccountID      | string           | Optional          | User account filter       |
| Wallet         | string           | Optional          | Wallet address filter     |
| AssetKey       | string           | Optional          | Specific asset filter     |
| Status         | UserAssetStatus  | Optional          | Permission status filter  |
| Visible        | bool             | Optional          | Visibility filter         |
| OrganizationID | string           | Optional          | Organization filter       |

**Use Cases:**

- User portfolio management
- Permission status queries
- Organization user management
- Asset visibility management

## domain/currency/currency.proto - Currency Definitions

**Package:** `currency`  
**Go Package Path:** `github.com/sologenic/com-fs-asset-model/domain/currency;currency`

### Overview

The currency.proto file defines the basic currency structure used throughout the asset model. It provides a simple but robust system for currency identification with versioning support.

### Messages

#### Currency

Represents a currency with symbol and version information. User-entered ticker with format:[a-zA-Z0-9]{1,45}. e.g., APPL, PLTR, MSFT. Auto-incremented version (no leading zeros) with max length 3 characters (values 1 to 999).

| Field   | Type   | Required/Optional | Description                                                                                |
| ------- | ------ | ----------------- | ------------------------------------------------------------------------------------------ |
| Symbol  | string | Required          | User-entered ticker with format:[a-zA-Z0-9]{1,45}. e.g., APPL, PLTR, MSFT                  |
| Version | string | Required          | Auto-incremented version (no leading zeros) with max length 3 characters (values 1 to 999) |

**Use Cases:**

- Currency identification in asset denominations
- Version management for currency updates
- Asset tokenization with currency backing

**Important Notes:**

- Symbol format must match regex: `[a-zA-Z0-9]{1,45}`
- Examples: "AAPL", "PLTR", "MSFT", "BTC-USD"
- Version is auto-incremented and limited to 3 characters (values 1 to 999)
- No leading zeros allowed in version numbers

**Constraints:**

- Symbol must be unique within the system for a given version
- Version management ensures backward compatibility
- Used as a component in denomination construction

## domain/denom/denom.proto - Denomination Definitions

**Package:** `denom`  
**Go Package Path:** `github.com/sologenic/com-fs-asset-model/domain/denom;denom`

### Overview

The denom.proto file defines the on-chain denomination structure that combines currency information with issuer details and precision settings. This is a critical component for tokenization as it establishes the complete on-chain identity of a token.

### Messages

#### Denom

Defines the on-chain denomination of a token and include on-chain data such as the issuer, precision, and description. It is constructed according to the following conventions:

1. Currency: {lowercase(symbol)}\_{version}
   - Example: "aapl_1", "btc-usd_2"
2. Subunit: su{currency}
   - Example: "suaapl_1"
3. Denom: {subunit}-{issuer}
   - Example: "suaapl_1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e"

| Field       | Type              | Required/Optional | Description                                                                                            |
| ----------- | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------ |
| Currency    | currency.Currency | Required          | Format: {symbol}\_{version}                                                                            |
| Subunit     | string            | Required          | Format: su{currency}                                                                                   |
| Issuer      | string            | Required          | On-chain issuer address                                                                                |
| Precision   | int64             | Required          | Decimal precision for the share count. e.g, if set to 6, the smallest unit represents 0.000001 shares. |
| Description | string            | Required          | On-chain description                                                                                   |

**Use Cases:**

- On-chain token identification
- Asset tokenization with precise denomination
- Cross-chain asset representation
- Fractional ownership implementation

**Important Notes and Conventions:**

The denomination follows a specific construction pattern:

1. **Currency Format:** `{lowercase(symbol)}_{version}`

   - Example: "aapl_1", "btc-usd_2"

2. **Subunit Format:** `su{currency}`

   - Example: "suaapl_1"

3. **Denom Format:** `{subunit}-{issuer}`
   - Example: "suaapl_1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e"

**Precision Usage:**

- Defines decimal places for the smallest tradeable unit
- Example: precision of 6 means smallest unit represents 0.000001 shares
- Enables fractional asset ownership
- Critical for financial calculations and token economics

**Constraints:**

- Issuer must be a valid blockchain address
- Precision must be non-negative
- Subunit format is strictly enforced
- Description should be human-readable for on-chain visibility

## domain/symbol/symbol.proto - Symbol Definitions

**Package:** `symbol`  
**Go Package Path:** `github.com/sologenic/com-fs-asset-model/domain/symbol;symbol`

### Overview

The symbol.proto file defines trading symbols as pairs of denominations, enabling the representation of trading pairs for asset exchanges and price discovery.

### Messages

#### Symbol

Represents a trading symbol as a pair of base and quote denominations.

| Field | Type        | Required/Optional | Description                            |
| ----- | ----------- | ----------------- | -------------------------------------- |
| Base  | denom.Denom | Required          | Base denomination of the trading pair  |
| Quote | denom.Denom | Required          | Quote denomination of the trading pair |

**Use Cases:**

- Trading pair definition for exchanges
- Price discovery and market data
- Asset exchange rate calculation
- Multi-asset portfolio valuation

**Important Notes:**

- Base represents the asset being traded
- Quote represents the currency/asset used for pricing
- Both denominations must be valid and properly formatted
- Enables complex trading scenarios with multiple asset types

**Examples:**

- Real estate token (base) priced in USD stablecoin (quote)
- Commodity token (base) priced in native blockchain token (quote)
- Equity token (base) priced in fiat-backed stablecoin (quote)

**Constraints:**

- Both base and quote must reference valid denominations
- Base and quote should be different to avoid circular references
- Symbol pairs should be unique within the trading system

## Version Information

This documentation corresponds to the current version of the Protocol Buffer definitions in the com-fs-asset-model repository. The schemas are designed to be backward compatible, with version management built into the currency and denomination systems.

**Key Version Considerations:**

- Currency versions are auto-incremented (1-999)
- Asset schema changes maintain backward compatibility
- gRPC service versions may be extended with new methods
- Enum values are additive only (existing values never change)

## Support

For additional information about this asset model:

- See the [README.md](README.md) file for build instructions and usage examples
- Review the Protocol Buffer files directly for the most up-to-date field definitions
- Check the `client/` directory for Go client implementation examples
- Examine the `build/` directory for generated TypeScript definitions

**Generated Files:**

- Go: `*.pb.go` files contain generated Go structs and gRPC services
- TypeScript: `build/` directory contains TypeScript definitions and JavaScript implementations
- The build process is automated via shell scripts in `bin/` directories

**Development Notes:**

- All Protocol Buffer files use proto3 syntax
- Import dependencies are managed through the sologenic namespace structure
- Build scripts generate both server and client code for multiple languages
