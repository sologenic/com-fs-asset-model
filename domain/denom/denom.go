package denom

import (
	"errors"
	"fmt"
	"regexp"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/currency"
)

var (
	// Wallet address or contract address
	issuerRegex = regexp.MustCompile(`^(?:test)?core1(?:[02-9ac-hj-np-z]{38}|[02-9ac-hj-np-z]{58})$`)

	// Format: u{symbol}_v{version}-{issuer}
	// Group 1 captures symbol
	// Group 2 captures only digits ([1-9][0-9]{0,2}), ignoring the 'v'
	// Group 3 captures issuer address
	denomRegex = regexp.MustCompile(`^u([A-Za-z0-9.\-]+)_v([1-9][0-9]{0,2})-((?:test)?core1(?:[02-9ac-hj-np-z]{38}|[02-9ac-hj-np-z]{58}))$`)
)

func New(symbol, version, issuer string) (*Denom, error) {
	if issuer == "" {
		return nil, errors.New("issuer is required")
	}

	if !issuerRegex.MatchString(issuer) {
		return nil, fmt.Errorf("invalid issuer format: %s", issuer)
	}

	// Pass the clean version (e.g., "1")
	curr, err := currency.New(symbol, version)
	if err != nil {
		return nil, err
	}
	subunit, err := currency.BuildSubunit(curr)
	if err != nil {
		return nil, err
	}

	return &Denom{
		Currency: curr,
		Subunit:  subunit,
		Issuer:   issuer,
	}, nil
}

func Parse(value string) (*Denom, error) {
	matches := denomRegex.FindStringSubmatch(value)
	if matches == nil || len(matches) != 4 {
		return nil, fmt.Errorf("invalid denom format: %s", value)
	}

	symbol := strings.ToUpper(matches[1])
	version := matches[2] // This will be "1", not "v1"
	issuer := matches[3]

	return New(symbol, version, issuer)
}

func (d *Denom) ToString() string {
	return fmt.Sprintf("%s-%s", d.Subunit, d.Issuer)
}
