package domain

import (
	"errors"
	"strings"
)

// Extracts the Symbol from the Denom of an asset stored in the smart contract
// Denom format: {Symbol}_v{Version}-{SmartContractAddr}
// Example:
//   - denom: appl_v1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e
//   - output: APPL
func ExtractSymbolFromDenom(denom string) (string, error) {
	// Split the Denom by '-'
	parts := strings.Split(denom, "-")
	if len(parts) < 2 {
		return "", errors.New("invalid Denom format")
	}

	// Split the first part by '_v'
	subParts := strings.Split(parts[0], "_v")
	if len(subParts) < 2 {
		return "", errors.New("invalid Denom format")
	}

	// Convert symbol to uppercase for exchange compatibility
	return strings.ToUpper(subParts[0]), nil
}
