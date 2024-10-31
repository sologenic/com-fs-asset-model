package domain

import (
	"errors"
	"strings"
)

// Extracts the Symbol from the Denom of an asset stored in the smart contract
// Denom format: {Symbol}_v{Version}-{SmartContractAddr}
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
	return subParts[0], nil
}
