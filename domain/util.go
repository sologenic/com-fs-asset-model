package domain

import (
	"fmt"

	assetdmncurrency "github.com/sologenic/com-fs-asset-model/domain/currency"
)

// Asset key format: {currency}_{organizationID}, {symbol}_{version}_{organizationID}
func CreateAssetKeyStr(currency *assetdmncurrency.Currency, organizationID string) string {
	return fmt.Sprintf("%s_%s", currency.ToString(), organizationID)
}
