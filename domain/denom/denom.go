package denom

import (
	"errors"
	"fmt"
	"regexp"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/currency"
)

var (
	denomRegex = regexp.MustCompile(`^su([A-Za-z0-9]+)_([1-9][0-9]{0,2})-(.+)$`) // Format: su{symbol}_{version}-{issuer}
)

// BuildDenom creates a new Denom from components
func BuildDenom(symbol, version, issuer string) (*Denom, error) {
	if issuer == "" {
		return nil, errors.New("issuer is required")
	}

	currency, err := currency.NewCurrency(symbol, version)
	if err != nil {
		return nil, err
	}
	subunit := fmt.Sprintf("su%s", currency.ToString()) // format: su{currency}
	return &Denom{
		Currency: currency,
		Subunit:  subunit,
		Issuer:   issuer,
	}, nil
}

// ParseDenom parses a Denom from a string in the format: su{symbol}_{version}-{issuer}, equivalent to {subunit}-{issuer}
func ParseDenom(denomStr string) (*Denom, error) {
	matches := denomRegex.FindStringSubmatch(denomStr)
	if matches == nil || len(matches) != 4 {
		return nil, fmt.Errorf("invalid denom format: %s", denomStr)
	}

	symbol := strings.ToUpper(matches[1])
	version := matches[2]
	issuer := matches[3]

	return BuildDenom(symbol, version, issuer)
}

func (d *Denom) ToString() string {
	return fmt.Sprintf("%s-%s", d.Subunit, d.Issuer)
}
