package denom

import (
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	"github.com/sologenic/com-fs-asset-model/domain/currency"
	"github.com/sologenic/com-fs-utils-internal-lib/go/unittest"
	"github.com/stretchr/testify/assert"
)

const mockValidAccountIssuer = "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt"

func TestBuildDenom(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid denom",
			Test: func(t *testing.T) {
				got, err := New("AAPL", "1", mockValidAccountIssuer)
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "AAPL",
						Version: "1",
					},
					Subunit: "uaapl_v1",
					Issuer:  mockValidAccountIssuer,
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
			},
		},
		{
			Name: "Empty smart contract address",
			Test: func(t *testing.T) {
				got, err := New("AAPL", "1", "")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "issuer is required")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Invalid symbol",
			Test: func(t *testing.T) {
				got, err := New("", "1", mockValidAccountIssuer)

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid symbol format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Invalid version",
			Test: func(t *testing.T) {
				got, err := New("AAPL", "1000", mockValidAccountIssuer)

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid version format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Valid denom with dot and complex issuer",
			Test: func(t *testing.T) {
				// We pass raw "1" during build
				got, err := New("BAB.A", "1", "testcore1cd0ezxp06xauqhrrpm4xe3h7yx9xmmeqr23vffppngld54sh9hnqmmep6g")
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "BAB.A",
						Version: "1", // Internal field stores raw "1"
					},
					Subunit: "ubab.a_v1", // Subunit generation injects 'v'
					Issuer:  "testcore1cd0ezxp06xauqhrrpm4xe3h7yx9xmmeqr23vffppngld54sh9hnqmmep6g",
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
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
				got, err := Parse("uaapl_v1-" + mockValidAccountIssuer)
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "AAPL",
						Version: "1",
					},
					Subunit: "uaapl_v1",
					Issuer:  mockValidAccountIssuer,
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
			},
		},
		{
			Name: "Invalid format",
			Test: func(t *testing.T) {
				got, err := Parse("invalid-format")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid denom format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Missing smart contract address",
			Test: func(t *testing.T) {
				got, err := Parse("uaapl_v1-")

				assert.Error(t, err)
				assert.Contains(t, err.Error(), "invalid denom format")
				assert.Nil(t, got)
			},
		},
		{
			Name: "Valid denom parsing",
			Test: func(t *testing.T) {
				// Input contains 'v'
				got, err := Parse("uaapl_v1-" + mockValidAccountIssuer)
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "AAPL",
						Version: "1", // The parsed version is stripped of 'v'
					},
					Subunit: "uaapl_v1",
					Issuer:  mockValidAccountIssuer,
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
			},
		},
		{
			Name: "Valid complex denom parsing with dot",
			Test: func(t *testing.T) {
				// Input contains 'v'
				got, err := Parse("ubab.a_v1-testcore1cd0ezxp06xauqhrrpm4xe3h7yx9xmmeqr23vffppngld54sh9hnqmmep6g")
				want := &Denom{
					Currency: &currency.Currency{
						Symbol:  "BAB.A",
						Version: "1", // The parsed version is stripped of 'v'
					},
					Subunit: "ubab.a_v1",
					Issuer:  "testcore1cd0ezxp06xauqhrrpm4xe3h7yx9xmmeqr23vffppngld54sh9hnqmmep6g",
				}

				assert.NoError(t, err)
				assertEventsEquality(t, want, got)
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
