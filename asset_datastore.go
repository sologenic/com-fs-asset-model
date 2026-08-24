package asset

import (
	"fmt"

	datastore "github.com/sologenic/gclouddatastore"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/structpb"
)

var _ datastore.PropertyLoadSaver = (*Asset)(nil)

// Save implements datastore.PropertyLoadSaver.
func (a *Asset) Save() ([]datastore.Property, error) {
	if a == nil {
		return nil, fmt.Errorf("asset is required")
	}

	props, err := datastore.SaveStruct(a)
	if err != nil {
		return nil, err
	}
	if a.Details == nil {
		return props, nil
	}

	blob, err := protojson.Marshal(a.Details)
	if err != nil {
		return nil, fmt.Errorf("marshal Details: %w", err)
	}
	return append(props, datastore.Property{
		Name:    "Details",
		Value:   blob,
		NoIndex: true,
	}), nil
}

// Load implements datastore.PropertyLoadSaver.
func (a *Asset) Load(ps []datastore.Property) error {
	var blob []byte
	rest := make([]datastore.Property, 0, len(ps))
	for _, p := range ps {
		if p.Name != "Details" {
			rest = append(rest, p)
			continue
		}
		b, ok := p.Value.([]byte)
		if !ok {
			return fmt.Errorf("details: unexpected type %T", p.Value)
		}
		blob = b
	}

	a.Details = nil
	if err := datastore.LoadStruct(a, rest); err != nil {
		return err
	}
	if len(blob) == 0 {
		return nil
	}

	details := &structpb.Struct{}
	if err := protojson.Unmarshal(blob, details); err != nil {
		return fmt.Errorf("unmarshal Details: %w", err)
	}
	a.Details = details
	return nil
}
