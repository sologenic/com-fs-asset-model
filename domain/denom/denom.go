package denom

import (
	"errors"
	"fmt"
	"regexp"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/currency"
)

var (
	denomRegex = regexp.MustCompile(`^u([A-Za-z0-9]+)_([1-9][0-9]{0,2})-(.+)$`) // Format: u{symbol}_{version}-{smartContractAddr}
)

// BuildDenom creates a new Denom from components
func BuildDenom(symbol, version, smartContractAddr string) (*Denom, error) {
	if smartContractAddr == "" {
		return nil, errors.New("smart contract address is required")
	}

	currency, err := currency.NewCurrency(symbol, version)
	if err != nil {
		return nil, err
	}
	subunit := fmt.Sprintf("u%s", currency.ToString())
	return &Denom{
		Currency:             currency,
		Subunit:              subunit,
		SmartContractAddress: smartContractAddr,
	}, nil
}

// ParseDenom parses a Denom from a string in the format: u{symbol}_{version}-{smartContractAddr}
func ParseDenom(denomStr string) (*Denom, error) {
	matches := denomRegex.FindStringSubmatch(denomStr)
	if matches == nil || len(matches) != 4 {
		return nil, fmt.Errorf("invalid denom format: %s", denomStr)
	}

	symbol := strings.ToUpper(matches[1])
	version := matches[2]
	smartContractAddr := matches[3]

	return BuildDenom(symbol, version, smartContractAddr)
}

func (d *Denom) ToString() string {
	return fmt.Sprintf("%s-%s", d.Subunit, d.SmartContractAddress)
}
