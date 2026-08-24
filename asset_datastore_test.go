package asset

import (
	"testing"

	datastore "github.com/sologenic/gclouddatastore"
	"google.golang.org/protobuf/types/known/structpb"
)

func findProperty(props []datastore.Property, name string) *datastore.Property {
	for i := range props {
		if props[i].Name == name {
			return &props[i]
		}
	}
	return nil
}

func TestAssetDetailsRoundTrip(t *testing.T) {
	details, err := structpb.NewStruct(map[string]any{"Exchange": "NASDAQ", "Ticker": "GOOGL"})
	if err != nil {
		t.Fatalf("NewStruct: %v", err)
	}

	props, err := (&Asset{Name: "Alphabet", Details: details}).Save()
	if err != nil {
		t.Fatalf("Save: %v", err)
	}

	blob := findProperty(props, "Details")
	if blob == nil {
		t.Fatal("Save omitted Details")
	}
	if !blob.NoIndex {
		t.Error("Details blob should be noindex")
	}

	loaded := &Asset{}
	if err := loaded.Load(props); err != nil {
		t.Fatalf("Load: %v", err)
	}
	if got := loaded.GetDetails().AsMap(); got["Exchange"] != "NASDAQ" || got["Ticker"] != "GOOGL" {
		t.Errorf("Details = %#v", got)
	}
	if loaded.Name != "Alphabet" {
		t.Errorf("Name = %q", loaded.Name)
	}
}

func TestAssetNilDetails(t *testing.T) {
	props, err := (&Asset{Name: "No Details"}).Save()
	if err != nil {
		t.Fatalf("Save: %v", err)
	}
	if p := findProperty(props, "Details"); p != nil {
		t.Fatalf("unexpected Details property %#v", p)
	}

	loaded := &Asset{}
	if err := loaded.Load(props); err != nil {
		t.Fatalf("Load: %v", err)
	}
	if loaded.Details != nil {
		t.Errorf("Details = %#v, want nil", loaded.Details)
	}
}
