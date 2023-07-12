package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	channeltypes "github.com/cosmos/ibc-go/v7/modules/core/04-channel/types"
	ibcexported "github.com/cosmos/ibc-go/v7/modules/core/exported"
)

// ContractKeeper defines the entry points to a smart contract that must be exposed by the VM module
type ContractKeeper interface {
	// IBCOnAcknowledgementPacketCallback is called in the source chain when a packet acknowledgement
	// is received. The contract is expected to handle the callback within the user defined
	// gas limit, and handle any errors, or panics gracefully.
	// The state will be reverted by the middleware if an error is returned.
	IBCOnAcknowledgementPacketCallback(
		ctx sdk.Context,
		packet channeltypes.Packet,
		acknowledgement []byte,
		relayer sdk.AccAddress,
		contractAddr string,
	) error
	// IBCOnTimeoutPacketCallback is called in the source chain when a packet is not received before
	// the timeout height. The contract is expected to handle the callback within the user defined
	// gas limit, and handle any error, out of gas, or panics gracefully.
	// The state will be reverted by the middleware if an error is returned.
	IBCOnTimeoutPacketCallback(
		ctx sdk.Context,
		packet channeltypes.Packet,
		relayer sdk.AccAddress,
		contractAddr string,
	) error
	// IBCOnRecvPacketCallback is called in the destination chain when a packet is received.
	// The contract is expected to handle the callback within the user defined gas limit, and
	// handle any errors, out of gas, or panics gracefully.
	// The state will be reverted by the middleware if an error is returned.
	IBCOnRecvPacketCallback(
		ctx sdk.Context,
		packet channeltypes.Packet,
		acknowledgement ibcexported.Acknowledgement,
		relayer sdk.AccAddress,
		contractAddr string,
	) error
}
