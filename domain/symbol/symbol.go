package symbol

import (
	"errors"
	"strconv"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/denom"
)

var (
	symbolSeparator = ":"

	ErrSymbolInvalid = errors.New("symbol is invalid")
)

func NewSymbol(base, quote *denom.Denom) *Symbol {
	return &Symbol{
		Base:  base,
		Quote: quote,
	}
}

// Symbol represents a trading pair of denoms
// e.g. suwusdc_1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28:suaapl_1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28
func NewSymbolFromString(symbStr string) (*Symbol, error) {
	symbolParts := strings.Split(symbStr, symbolSeparator)
	// There are 4 parts in the symbol array:
	if len(symbolParts) != 2 {
		return nil, ErrSymbolInvalid
	}
	base, err := denom.ParseDenom(symbolParts[0])
	if err != nil {
		return nil, err
	}
	quote, err := denom.ParseDenom(symbolParts[1])
	if err != nil {
		return nil, err
	}
	return &Symbol{
		Base:  base,
		Quote: quote,
	}, nil
}

func (s *Symbol) ToString() string {
	return s.Base.ToString() + symbolSeparator + s.Quote.ToString() // {denom1}:{denom2}
}

// Trade data is stored stable by the symbol order.
// By using this approach we do not have to scan for 2 different records since it will be unknown in which order the trade data is requested
func (s *Symbol) IsInverted() bool {
	if s.Base.Currency.Symbol == s.Quote.Currency.Symbol {
		// Convert version strings(1-999) to integers before comparison
		baseVersion, _ := strconv.Atoi(s.Base.Currency.Version)
		quoteVersion, _ := strconv.Atoi(s.Quote.Currency.Version)
		return baseVersion > quoteVersion
	}
	return s.Base.Currency.Symbol > s.Quote.Currency.Symbol
}

func (s *Symbol) Invert() *Symbol {
	return NewSymbol(s.Quote, s.Base)
}
