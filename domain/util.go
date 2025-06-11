package domain

import (
	"fmt"

	assetdmncurrency "github.com/sologenic/com-fs-asset-model/domain/currency"
	assetdmndenom "github.com/sologenic/com-fs-asset-model/domain/denom"
)

// Asset key format: {currency}_{organizationID}_{smartContractIssuerAddr}, {symbol}_{version}_{organizationID}_{smartContractIssuerAddr}
func CreateAssetKeyStr(currency *assetdmncurrency.Currency, organizationID, smartContractIssuerAddr string) string {
	return fmt.Sprintf("%s_%s_%s", currency.ToString(), organizationID, smartContractIssuerAddr)
}

// CreateAssetKeyStrFromDenomStr creates an asset key string from a denom string
// Asset key from: {currency}_{organizationID}_{smartContractIssuerAddr}
// e.g. "aapl_1_72c4c072-2fe4-4f72-ae9d-d9d52a05fd71_testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28"
// Denom string format in SmartContract: su{currency}-{issuer}
// e.g. "suaapl_1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28"
func CreateAssetKeyStrFromDenomStr(denomStr, orgID, smartContractIssuerAddr string) (string, error) {
	denom, err := assetdmndenom.ParseDenom(denomStr)
	if err != nil {
		return "", err
	}
	return CreateAssetKeyStr(denom.Currency, orgID, smartContractIssuerAddr), nil
}
