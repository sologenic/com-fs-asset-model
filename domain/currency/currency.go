package currency

import (
	"errors"
	"fmt"
	"regexp"
	"strings"
)

var (
	// Supports dot (.) and dash (-) for complex tickers like BAB.A or BTC-USD
	symbolRegex = regexp.MustCompile(`^[a-zA-Z0-9.\-]{1,45}$`)

	// Internally we strictly store only digits (without 'v')
	versionRegex = regexp.MustCompile(`^[1-9][0-9]{0,2}$`)

	// In the string representation of a subunit, 'v' is mandatory
	subunitRegex = regexp.MustCompile(`^u[a-z0-9.\-]{1,45}_v[1-9][0-9]{0,2}$`)
)

func NewCurrency(symbol, version string) (*Currency, error) {
	if err := ValidateSymbol(symbol); err != nil {
		return nil, err
	}
	if err := ValidateVersion(version); err != nil {
		return nil, err
	}

	return &Currency{
		Symbol:  strings.ToUpper(symbol),
		Version: version, // Store clean digits only
	}, nil
}

// ParseCurrency parses format {symbol}_v{version}
func ParseCurrency(currencyStr string) (*Currency, error) {
	// Search for the last index of _v since the symbol itself might theoretically contain underscores
	lastIdx := strings.LastIndex(currencyStr, "_v")
	if lastIdx == -1 {
		// Fallback to uppercase V just in case
		lastIdx = strings.LastIndex(currencyStr, "_V")
		if lastIdx == -1 {
			return nil, fmt.Errorf("invalid currency string (missing _v): %s", currencyStr)
		}
	}

	symbol := strings.ToUpper(currencyStr[:lastIdx])
	// Skip "_v" (2 characters) to extract only the digits
	version := currencyStr[lastIdx+2:]

	return NewCurrency(symbol, version)
}

func ValidateSymbol(symbol string) error {
	if !symbolRegex.MatchString(symbol) {
		return errors.New("invalid symbol format: must be [a-zA-Z0-9.\\-]{1,45}")
	}
	return nil
}

func ValidateVersion(version string) error {
	if !versionRegex.MatchString(version) {
		return errors.New("invalid version format: must be [1-9][0-9]{0,2}")
	}
	return nil
}

func BuildSubunit(c *Currency) (string, error) {
	// Add 'v' prefix when generating the string
	subunit := fmt.Sprintf("u%s_v%s", strings.ToLower(c.Symbol), c.Version)
	if len(subunit) > 51 {
		return "", fmt.Errorf("subunit length exceeds 51 characters: %s", subunit)
	}
	if !subunitRegex.MatchString(subunit) {
		return "", fmt.Errorf("invalid subunit format: %s", subunit)
	}
	return subunit, nil
}

func (c *Currency) ToString() string {
	// Return 'v' in the string representation
	return fmt.Sprintf("%s_v%s", strings.ToLower(c.Symbol), c.Version)
}
