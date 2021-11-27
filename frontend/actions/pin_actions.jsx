import * as PinApiUtil from '../util/pin_api_util'

export const RECEIVE_ALL_PINS ='RECEIVE_ALL_PINS';
export const RECEIVE_PIN ='RECEIVE_PIN';
export const REMOVE_PIN ='REMOVE_PIN';

const receivePins = pins => ({
  type: RECEIVE_ALL_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

export const requestPins = () => dispatch => (
  PinApiUtil.fetchPins() 
    .then(pins => dispatch(receivePins(pins)))
);

export const requestPin = pinId => dispatch => (
  PinApiUtil.fetchPin(pinId) 
    .then(pin => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
  PinApiUtil.createPin(pin) 
    .then(pin => dispatch(receivePin(pin)))
);

export const updatePin = pin => dispatch => (
  PinApiUtil.updatePin(pin) 
    .then(pin => dispatch(receivePin(pin)))
);

export const deletePin = pinId => dispatch => (
  EventAPIUtil.deletePin(pinId)
    .then(() => dispatch(removePin(pinId)))
);