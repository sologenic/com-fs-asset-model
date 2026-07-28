package domain

import (
	"fmt"

	assetdmncurrency "github.com/sologenic/com-fs-asset-model/domain/currency"
	assetdmndenom "github.com/sologenic/com-fs-asset-model/domain/denom"
)

// CreateAssetKeyStr creates an asset key string from currency and issuer details.
// Asset key format: {symbol}_v{version}_{organizationID}_{smartContractIssuerAddr}
// e.g. "aapl_v1_72c4c072-2fe4-4f72-ae9d-d9d52a05fd71_testcore13s2mmg..."
func CreateAssetKeyStr(currency *assetdmncurrency.Currency, organizationID, smartContractIssuerAddr string) string {
	return fmt.Sprintf("%s_%s_%s", currency.ToString(), organizationID, smartContractIssuerAddr)
}

// CreateAssetKeyStrFromDenomStr creates an asset key string from a denom string.
// Asset key format: {symbol}_v{version}_{organizationID}_{smartContractIssuerAddr}
//
// Denom string format in SmartContract: u{symbol}_v{version}-{issuer}
// e.g. "uaapl_v1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28"
func CreateAssetKeyStrFromDenomStr(denomStr, orgID, smartContractIssuerAddr string) (string, error) {
	denom, err := assetdmndenom.ParseDenom(denomStr)
	if err != nil {
		return "", err
	}
	return CreateAssetKeyStr(denom.Currency, orgID, smartContractIssuerAddr), nil
}
