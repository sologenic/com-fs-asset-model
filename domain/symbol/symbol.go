package symbol

import (
	"errors"
	"regexp"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/currency"
)

var (
	symbolSeparator = "_"
	symbolRegexp    = regexp.MustCompile(`^[a-zA-Z0-9]+$`)

	ErrSymbolInvalid = errors.New("symbol is invalid")
)

func NewSymbol(base, quote *currency.Currency) *Symbol {
	return &Symbol{
		Base:  base,
		Quote: quote,
	}
}

// {wusdc_1}_{aapl_1}
func NewSymbolFromString(symbStr string) (*Symbol, error) {
	symbolParts := strings.Split(symbStr, symbolSeparator)
	// There are 4 parts in the symbol array:
	if len(symbolParts) != 4 {
		return nil, ErrSymbolInvalid
	}
	for _, part := range symbolParts {
		if !symbolRegexp.MatchString(part) && part != "" {
			return nil, ErrSymbolInvalid
		}
	}

	base := &currency.Currency{
		Symbol:  symbolParts[0],
		Version: symbolParts[1],
	}
	quote := &currency.Currency{
		Symbol:  symbolParts[2],
		Version: symbolParts[3],
	}

	return &Symbol{
		Base:  base,
		Quote: quote,
	}, nil
}

func (s *Symbol) ToString() string {
	return s.Base.ToString() + symbolSeparator + s.Quote.ToString() //{wusd_1}_{aapl_1}
}

// Trade data is stored stable by the symbol order.
// By using this approach we do not have to scan for 2 different records since it will be unknown in which order the trade data is requested
func (s *Symbol) IsInverted() bool {
	if s.Base.Symbol == s.Quote.Symbol {
		return s.Base.Version > s.Quote.Version
	}
	return s.Base.Symbol > s.Quote.Symbol
}

func (s *Symbol) Invert() *Symbol {
	return NewSymbol(s.Quote, s.Base)
}

func (s *Symbol) CurrencyFromString(cur string) *currency.Currency {
	c := strings.Split(cur, symbolSeparator)
	if len(c) != 2 {
		return &currency.Currency{
			Symbol:  cur,
			Version: "",
		}
	}
	return &currency.Currency{
		Symbol:  c[0],
		Version: c[1],
	}
}
