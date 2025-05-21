package domain

import (
	"fmt"

	assetdmncurrency "github.com/sologenic/com-fs-asset-model/domain/currency"
)

// Asset key format: {currency}_{organizationID}_{issuer}, {symbol}_{version}_{organizationID}_{issuer}
func CreateAssetKeyStr(currency *assetdmncurrency.Currency, organizationID, issuer string) string {
	return fmt.Sprintf("%s_%s_%s", currency.ToString(), organizationID, issuer)
}
