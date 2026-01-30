package currency

import (
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	"github.com/sologenic/com-fs-utils-internal-lib/go/unittest"
	"github.com/stretchr/testify/assert"
)

func TestNewCurrency(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid currency",
			Test: func(t *testing.T) {
				expected, err := NewCurrency("AAPL", "1")
				wanted := &Currency{
					Symbol:  "AAPL",
					Version: "1",
				}
				assert.NoError(t, err)
				assertEventsEquality(t, wanted, expected)
			},
		},
		{
			Name: "Empty symbol",
			Test: func(t *testing.T) {
				got, err := NewCurrency("", "1")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid symbol format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Symbol too long",
			Test: func(t *testing.T) {
				got, err := NewCurrency("A123456789012345678901234567890123456789012345678", "1")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid symbol format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Invalid version with leading zero",
			Test: func(t *testing.T) {
				got, err := NewCurrency("AAPL", "01")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid version format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Mixed case symbol",
			Test: func(t *testing.T) {
				want := &Currency{
					Symbol:  "APPL",
					Version: "1",
				}
				got, err := NewCurrency("aPpL", "1")

				assert.NoError(t, err)
				assert.Equal(t, want.Symbol, got.Symbol)
				assert.Equal(t, want.Version, got.Version)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestCurrency_ToSubunit(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid subunit",
			Test: func(t *testing.T) {
				curr := &Currency{
					Symbol:  "AAPL",
					Version: "1",
				}
				want := "suaapl_1"

				got, err := BuildSubunit(curr)
				assert.NoError(t, err)
				assert.Equal(t, want, got)
			},
		},
		{
			Name: "Symbol too long",
			Test: func(t *testing.T) {
				curr := &Currency{
					Symbol:  "A123456789012345678901234567890123456789012345678",
					Version: "1",
				}

				got, err := BuildSubunit(curr)
				assert.Error(t, err)
				assert.Contains(t, err.Error(), "subunit length exceeds 51 characters")
				assert.Empty(t, got)
			},
		},
		{
			Name: "Maximum length subunit",
			Test: func(t *testing.T) {
				curr := &Currency{
					// 45 chars for symbol
					Symbol:  "A12345678901234567890123456789012345678901234",
					Version: "999", // 3 chars
				}
				// 2("su") + 45(symbol) + 1("_") + 3("999") = 51 chars
				want := "sua12345678901234567890123456789012345678901234_999"

				got, err := BuildSubunit(curr)
				assert.NoError(t, err)
				assert.Equal(t, want, got)
				assert.Len(t, got, 51) // correct total length
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestCurrency_ToString(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Basic currency",
			Test: func(t *testing.T) {
				currency := &Currency{
					Symbol:  "AAPL",
					Version: "1",
				}
				want := "aapl_1"
				assert.Equal(t, want, currency.ToString())
			},
		},
		{
			Name: "Currency with numbers",
			Test: func(t *testing.T) {
				currency := &Currency{
					Symbol:  "BTC2",
					Version: "999",
				}
				want := "btc2_999"
				assert.Equal(t, want, currency.ToString())
			},
		},
	}
	unittest.RunTests(t, tests)
}

func assertEventsEquality[T any](t *testing.T, expected, actual T) {
	// Compare with approximate time.
	cmpOpt := []cmp.Option{
		cmpopts.EquateApproxTime(3 * time.Second),
		cmpopts.IgnoreUnexported(
			Currency{},
		),
	}

	assert.True(t, cmp.Equal(expected, actual, cmpOpt...), cmp.Diff(expected, actual, cmpOpt...))
}
