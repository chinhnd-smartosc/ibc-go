package simulation_test

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/kv"
	"github.com/cosmos/ibc-go/modules/capability/simulation"
	"github.com/cosmos/ibc-go/modules/capability/types"
	"github.com/cosmos/ibc-go/v7/testing/simapp"
)

func TestDecodeStore(t *testing.T) {
	app := simapp.Setup(false)
	dec := simulation.NewDecodeStore(app.AppCodec())

	capOwners := types.CapabilityOwners{
		Owners: []types.Owner{{Module: "transfer", Name: "ports/transfer"}},
	}

	kvPairs := kv.Pairs{
		Pairs: []kv.Pair{
			{
				Key:   types.KeyIndex,
				Value: sdk.Uint64ToBigEndian(10),
			},
			{
				Key:   types.KeyPrefixIndexCapability,
				Value: app.AppCodec().MustMarshal(&capOwners),
			},
			{
				Key:   []byte{0x99},
				Value: []byte{0x99},
			},
		},
	}
	tests := []struct {
		name        string
		expectedLog string
	}{
		{"Index", "Index A: 10\nIndex B: 10\n"},
		{"CapabilityOwners", fmt.Sprintf("CapabilityOwners A: %v\nCapabilityOwners B: %v\n", capOwners, capOwners)},
		{"other", ""},
	}

	for i, tt := range tests {
		i, tt := i, tt
		t.Run(tt.name, func(t *testing.T) {
			switch i {
			case len(tests) - 1:
				require.Panics(t, func() { dec(kvPairs.Pairs[i], kvPairs.Pairs[i]) }, tt.name)
			default:
				require.Equal(t, tt.expectedLog, dec(kvPairs.Pairs[i], kvPairs.Pairs[i]), tt.name)
			}
		})
	}
}
