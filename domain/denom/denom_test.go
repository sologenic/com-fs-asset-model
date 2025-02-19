package denom

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	"github.com/sologenic/com-fs-asset-model/domain/currency"
	"github.com/sologenic/com-fs-utils-lib/go/unittest"
	"github.com/stretchr/testify/assert"
)

func TestBuildDenom(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid denom",
			Test: func(t *testing.T) {
				got, err := BuildDenom("AAPL", "1", "testcore1et29c")
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "AAPL",
						Version: "1",
					},
					Subunit: "suaapl_1",
					Issuer:  "testcore1et29c",
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
			},
		},
		{
			Name: "Empty smart contract address",
			Test: func(t *testing.T) {
				got, err := BuildDenom("AAPL", "1", "")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "issuer is required")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Invalid symbol",
			Test: func(t *testing.T) {
				got, err := BuildDenom("", "1", "testcore1et29c")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid symbol format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Invalid version",
			Test: func(t *testing.T) {
				got, err := BuildDenom("AAPL", "1000", "testcore1et29c")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid version format")
				assert.Nil(t, got)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestParseDenom(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid denom",
			Test: func(t *testing.T) {
				got, err := ParseDenom("suaapl_1-testcore1et29c")
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "AAPL",
						Version: "1",
					},
					Subunit: "suaapl_1",
					Issuer:  "testcore1et29c",
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
			},
		},
		{
			Name: "Invalid format",
			Test: func(t *testing.T) {
				got, err := ParseDenom("invalid-format")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid denom format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Missing smart contract address",
			Test: func(t *testing.T) {
				got, err := ParseDenom("suaapl_1-")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid denom format")
				assert.Nil(t, got)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func assertEventsEquality[T any](t *testing.T, expected, actual T) {
	cmpOpt := []cmp.Option{
		cmpopts.IgnoreUnexported(
			currency.Currency{},
			Denom{},
		),
	}

	assert.True(t, cmp.Equal(expected, actual, cmpOpt...), cmp.Diff(expected, actual, cmpOpt...))
}
