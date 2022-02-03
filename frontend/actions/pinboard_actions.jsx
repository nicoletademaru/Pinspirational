import * as PinboardApiUtil from '../util/pinboard_api_util'

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receivePinboards = pinboards => ({
  type: RECEIVE_ALL_BOARDS,
  pinboards
});

const receivePinboard = pinboard => ({
  type: RECEIVE_BOARD,
  pinboard
});

const removePinboard = pinboardId => ({
  type: REMOVE_BOARD,
  pinboardId
});

export const requestPinboards = () => dispatch => (
  PinboardApiUtil.fetchPinboards()
    .then(pinboards => dispatch(receivePinboards(pinboards)))
);

export const requestPinboard = pinboardId => dispatch => (
  PinboardApiUtil.fetchPinboard(pinboardId)
    .then(pinboard => dispatch(receivePinboard(pinboard)))
);

export const createPinboard = pinboard => dispatch => {
  return (
    PinboardApiUtil.createPinboard(pinboard)
      .then(pinboard => dispatch(receivePinboard(pinboard)))
  )
};

export const updatePinboard = pinboard => dispatch => {
  return (
  PinboardApiUtil.updatePinboard(pinboard) 
    .then(pinboard => dispatch(receivePinboard(pinboard)))
  )
};

export const deletePinboard = pinboardId => dispatch => (
  PinboardApiUtil.deletePinboard(pinboardId)
    .then(() => dispatch(removePinboard(pinboardId)))
);