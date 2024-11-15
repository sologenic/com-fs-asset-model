package domain

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestExtractSymbolFromDenom(t *testing.T) {
	tests := []struct {
		name     string
		denom    string
		expected string
		hasError bool
	}{
		{
			name:     "valid denom",
			denom:    "aapl_v1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
			expected: "AAPL",
			hasError: false,
		},
		{
			name:     "valid denom with single character ticker",
			denom:    "a_v1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
			expected: "A",
			hasError: false,
		},
		{
			name:     "valid denom with special character ticker", // A period (.) is the only special character allowed in Alpaca order symbols
			denom:    "brk.a_v1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
			expected: "BRK.A",
			hasError: false,
		},
		{
			name:     "invalid denom format",
			denom:    "invalid_denom",
			expected: "",
			hasError: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := ExtractSymbolFromDenom(tt.denom)
			if tt.hasError {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
				assert.Equal(t, tt.expected, result)
			}
		})
	}
}
