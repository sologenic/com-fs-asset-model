package currency

import (
	"errors"
	"fmt"
	"regexp"
	"strings"
)

var (
	symbolRegex  = regexp.MustCompile(`^[a-zA-Z0-9]{1,45}$`)                // Max length of 45 characters
	versionRegex = regexp.MustCompile(`^[1-9][0-9]{0,2}$`)                  // No leading zeros with a max length of 3 characters
	subunitRegex = regexp.MustCompile(`^su[a-z0-9]{1,45}_[1-9][0-9]{0,2}$`) // Format: su{lowercase(symbol)}_{version}, total max 51 chars
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
		Version: version,
	}, nil
}

// ParseCurrency parses a Currency from a string in the format: {symbol}_{version}
func ParseCurrency(currencyStr string) (*Currency, error) {
	parts := strings.Split(currencyStr, "_")
	if len(parts) != 2 {
		return nil, fmt.Errorf("invalid currency string: %s", currencyStr)
	}
	symbol := strings.ToUpper(parts[0])
	version := parts[1]
	return NewCurrency(symbol, version)
}

func ValidateSymbol(symbol string) error {
	if !symbolRegex.MatchString(symbol) {
		return errors.New("invalid symbol format: must be [a-zA-Z0-9]{1,45}")
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
	subunit := fmt.Sprintf("su%s_%s", strings.ToLower(c.Symbol), c.Version)
	if len(subunit) > 51 {
		return "", fmt.Errorf("subunit length exceeds 51 characters: %s", subunit)
	}
	if !subunitRegex.MatchString(subunit) {
		return "", fmt.Errorf("invalid subunit format: %s", subunit)
	}
	return subunit, nil
}

func (c *Currency) ToString() string {
	return fmt.Sprintf("%s_%s", strings.ToLower(c.Symbol), c.Version)
}
