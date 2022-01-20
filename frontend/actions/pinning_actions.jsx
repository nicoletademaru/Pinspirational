import * as PinningApiUtil from '../util/pinning_api_util'

export const RECEIVE_PINNING = 'RECEIVE_PINNING';
export const REMOVE_PINNING = 'REMOVE_PINNING';

const receivePinning = pinning => ({
  type: RECEIVE_PINNING,
  pinning
});

const removePinning = pinningId => ({
  type: REMOVE_PINNING,
  pinningId
});

export const createPinning = pinning => dispatch => {
  return (
    PinningApiUtil.createPinning(pinning)
      .then(pinning => dispatch(receivePinning(pinning)))
  )
};

export const deletePinning = pinningId => dispatch => (
  PinningApiUtil.deletePinning(pinningId)
    .then(() => dispatch(removePinning(pinningId)))
);