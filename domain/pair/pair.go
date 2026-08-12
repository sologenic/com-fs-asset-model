package pair

import (
	"errors"
	"strings"

	"github.com/sologenic/com-fs-asset-model/domain/denom"
)

const separator = ":"

func New(base, quote *denom.Denom) *Pair {
	return &Pair{
		Base:  base,
		Quote: quote,
	}
}

// Parse represents a trading pair of denoms
// e.g. uwusdc_v1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28:uaapl_v1-testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28
func Parse(value string) (*Pair, error) {
	parts := strings.Split(value, separator)
	if len(parts) != 2 {
		return nil, errors.New("invalid pair")
	}
	base, err := denom.Parse(parts[0])
	if err != nil {
		return nil, err
	}
	quote, err := denom.Parse(parts[1])
	if err != nil {
		return nil, err
	}
	return &Pair{
		Base:  base,
		Quote: quote,
	}, nil
}

func (p *Pair) ToString() string {
	return p.Base.ToString() + separator + p.Quote.ToString() // {denom1}:{denom2}
}
